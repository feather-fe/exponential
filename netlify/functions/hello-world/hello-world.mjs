// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default (request, context) => {
  try {
    const url = new URL(request.url)
    const subject = url.searchParams.get('name') || 'World'
    const { username, password } = request.json()
    return new Response({username, password})
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
