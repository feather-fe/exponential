export async function POST(request) {
  try {
    const { username, password } = await request.json()

    // Validate input
    if (!username || !password) {
      return new Response(JSON.stringify({ success: false, message: 'Username and password are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const myHeaders = new Headers()
    myHeaders.append("Authorization", `${process.env.AIRTABLE_API_KEY}`)
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      fields: {
        username: "username",
        password: "password"
      }
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    }

    const response = await fetch("https://api.airtable.com/v0/appXXbVu5p4uSKViT/logins", requestOptions)

    if (!response.ok) {
      const errorData = await response.json()
      return new Response(JSON.stringify({ success: false, message: errorData.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const data = await response.json()
    return new Response(JSON.stringify({ success: true, message: 'Data uploaded successfully', data }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Error uploading data:', error, request.json())
    return new Response(JSON.stringify({ success: false, message: 'Error uploading data', error: error.message, data }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}