// File: app/api/upload-login/route.js
export async function POST(request) {
  try {
    const { username, password } = await request.json()

    // Validate input
    if (!username || !password) {
      return NextResponse.json({ success: false, message: 'Username and password are required' }, { status: 400 })
    }

    const myHeaders = new Headers()
    myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`)
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      fields: {
        username: username,
        password: password
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
      return NextResponse.json({ success: false, message: errorData.message }, { status: 500 })
    }

    const data = await response.json()
    return NextResponse.json({ success: true, message: 'Data uploaded successfully', data }, { status: 201 })

  } catch (error) {
    console.error('Error uploading data:', error)
    return NextResponse.json({ success: false, message: 'Error uploading data', error: error.message }, { status: 500 })
  }
}