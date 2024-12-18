export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    // Send a response back to the client
    res.status(200).json({ success: true, message: 'Data received successfully', data : {username, password} });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
