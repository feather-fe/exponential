export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Here you can process the data, e.g., save it to a database
    console.log('Received data:', { name, email });

    // Send a response back to the client
    res.status(200).json({ success: true, message: 'Data received successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
