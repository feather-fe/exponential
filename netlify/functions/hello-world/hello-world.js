// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default async (request) => {
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', {
      status: 405,
    })
  }
  try {
    return process.env.API_KEY
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
