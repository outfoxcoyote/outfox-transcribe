export const config = {
  api: { bodyParser: false },  // must be false to forward raw multipart data
  maxDuration: 120,            // Pro plan supports up to 300s
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: { message: 'OPENAI_API_KEY not configured on server' } });
  }

  // Collect raw body so we can forward it with the correct Content-Type (including multipart boundary)
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks);

  const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': req.headers['content-type'],
    },
    body,
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
