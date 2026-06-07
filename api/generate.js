export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "50代ちょい悪マッチョの理想の彼氏を一言で表現して"
          }
        ],
      }),
    });

    const data = await response.json();

    // OpenAIエラー対策
    if (!data.choices) {
      return res.status(500).json({ text: "APIエラー: " + JSON.stringify(data) });
    }

    res.status(200).json({
      text: data.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({
      text: "サーバーエラー: " + error.message
    });
  }
}
