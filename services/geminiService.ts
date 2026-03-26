
import { GoogleGenAI, Type } from "@google/genai";
import { JLPTLevel, Category, QuestionType } from "../components/src/types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateJLPTQuestions = async (
  level: JLPTLevel,
  type: QuestionType,
  count: number = 3
): Promise<any[]> => {
  const model = "gemini-3-pro-preview";
  
  const vocabSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        level: { type: Type.STRING },
        type: { type: Type.STRING },
        id: { type: Type.STRING },
        category: { type: Type.STRING },
        question: { type: Type.STRING },
        options: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        },
        answer: { type: Type.INTEGER },
        explanation: { type: Type.STRING },
        reference: { type: Type.STRING }
      },
      required: ["level", "type", "id", "category", "question", "options", "answer", "explanation"]
    }
  };

  const readingSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        level: { type: Type.STRING },
        type: { type: Type.STRING },
        id: { type: Type.STRING },
        title: { type: Type.STRING },
        content: { type: Type.STRING },
        translation: { type: Type.STRING },
        vocabulary_list: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        },
        questions: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              q_text: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              answer: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["q_text", "options", "answer", "explanation"]
          }
        },
        reference: { type: Type.STRING }
      },
      required: ["level", "type", "id", "title", "content", "questions"]
    }
  };

  const prompt = type === 'language_knowledge' 
    ? `Generate ${count} JLPT ${level} [언어지식] questions. 
       Use varied categories like 한자 읽기, 표기, 문맥 규정, 유의어, 용법, 문법 형식, 문장 배열. 
       Ensure question text uses markdown **bold** for keywords. 
       IDs should be formatted like ${level}-VOC-XXX.`
    : `Generate ${count} JLPT ${level} [독해] short or medium length passages. 
       Include a title, content (with paragraphs), translation, and 1-2 questions per passage. 
       IDs should be formatted like ${level}-READ-XXX.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: type === 'language_knowledge' ? vocabSchema : readingSchema,
        thinkingConfig: { thinkingBudget: 4000 }
      }
    });

    const result = JSON.parse(response.text || "[]");
    return result;
  } catch (error) {
    console.error("Error generating JLPT content:", error);
    throw error;
  }
};
