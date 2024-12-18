import { json } from 'micro';
export function GET(request) {

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "fields": {
    "username": "username1323",
    "password": "test123"
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.airtable.com/v0/appXXbVu5p4uSKViT/logins", requestOptions)
  return new Response(`Hello from vergini-inia` + JSON.stringify(request.body));
}

