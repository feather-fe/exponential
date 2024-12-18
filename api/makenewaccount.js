import { json } from 'micro';
export default async function handler() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933");
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "fields": {
      "username": "Very-Secure-Username.gov",
      "password": "thosewhoknow"
    }
  });
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("https://api.airtable.com/v0/appXXbVu5p4uSKViT/logins", requestOptions)
}
