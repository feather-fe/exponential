export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "brw=brwZN44zk4cpdIbUP; brwConsent=opt-in; AWSALBTG=7obCMJwRb+9qkHhytradpdIn/0fAiG7Ecruf0VYRpJ4xpaDkhAu76RytbG6qm1qwm9kQH4FBhhdmSrqVdcw2W/HDUA1lb9nQGPkwOKoa2WpwNNL4EjHhSJfm1Av6MzOlWnw1Yz+yfXSh3tn4j8f9lnUH0pO5YbxWBx+EYlAyFYOOn1Yvgv4=; AWSALBTGCORS=7obCMJwRb+9qkHhytradpdIn/0fAiG7Ecruf0VYRpJ4xpaDkhAu76RytbG6qm1qwm9kQH4FBhhdmSrqVdcw2W/HDUA1lb9nQGPkwOKoa2WpwNNL4EjHhSJfm1Av6MzOlWnw1Yz+yfXSh3tn4j8f9lnUH0pO5YbxWBx+EYlAyFYOOn1Yvgv4=");

const raw = {
  "fields": {
    "username": username,
    "password": password
  }
};

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.airtable.com/v0/appXXbVu5p4uSKViT/logins", requestOptions)

    // Send a response back to the client
    res.status(200).json({ success: true, message: 'Data received successfully', data : {name , email} });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
