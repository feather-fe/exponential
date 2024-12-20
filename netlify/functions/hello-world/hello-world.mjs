// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default async (request, context) => {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
    })
  }

  try {
    const { username, password } = await request.json()
    return new Response(JSON.stringify({ username, password }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
