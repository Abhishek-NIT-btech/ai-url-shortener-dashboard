import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing in .env");
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * Test Gemini connection
 */
export const testGemini = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "In one sentence, what is GitHub?",
    });

    return response.text ?? "";
  } catch (error) {
    console.error("Gemini Test Error:", error);
    throw error;
  }
};

/**
 * Generate AI metadata for a URL
 */
export const generateUrlSummary = async (
  url: string
): Promise<string> => {
  const prompt = `
You are an AI assistant.

Analyze this URL:

${url}

Return ONLY valid JSON.

{
  "title": "",
  "category": "",
  "summary": ""
}

Rules:
- Only JSON
- No markdown
- No explanation
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text ?? "";
  } catch (error) {
    console.error("Gemini Summary Error:", error);
    throw error;
  }
};