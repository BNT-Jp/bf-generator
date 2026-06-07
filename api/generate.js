import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = "テスト：理想の彼氏を一言で説明して";

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    res.status(200).json({
      text: response.output_text,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
