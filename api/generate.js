import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: "テスト：彼氏を一人生成して",
    });

    return res.status(200).json({
      text: response.output_text,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "APIエラー",
      detail: error.message,
    });
  }
}
