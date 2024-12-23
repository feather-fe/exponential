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
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": username,
      "password": password
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    try {
      const response = await fetch("https://exponential-psi.vercel.app/api/makenewaccount", requestOptions);
      const result = await response.text();
      console.log(result)
    } catch (error) {
      return new Response("Error: Account not created", error);
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
