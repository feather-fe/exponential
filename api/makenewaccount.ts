import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON data
    const data = await request.json()

    // Process the data (for this example, we'll just log it)
    console.log('Received data:', data)

    // You can perform any necessary operations here
    // For example, you could save the data to a database

    // Return a response
    return NextResponse.json({
      success: true,
      message: 'Data received successfully',
      receivedData: data
    })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({
      success: false,
      message: 'Error processing request',
      error: error.message
    }, { status: 500 })
  }
}

