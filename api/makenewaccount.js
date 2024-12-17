import { json } from 'micro';
export default async function handler(req, res) {
  const data = await json(req)
  const {username, password} = data
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933");
  myHeaders.append("Cookie", "brw=brwtcGK1QAbqebbws; brwConsent=opt-in; AWSALBTG=6T63Z+/C4Y2fSa08fQ+Dd9w3ky5hIhSR1GPSxAHSR035xAJj3Pp3fzmvHQYB++5LhIOO3TA9g69hnPFsbiuQqVMNepH4DyjZR50WN45JnQUqoXP2XI1wxgo3GdDhCQbzlkos3YfDTBy9SroMw6oHgfd7KuyuNk3roNIyoaYNmt3PSpACziE=; AWSALBTGCORS=6T63Z+/C4Y2fSa08fQ+Dd9w3ky5hIhSR1GPSxAHSR035xAJj3Pp3fzmvHQYB++5LhIOO3TA9g69hnPFsbiuQqVMNepH4DyjZR50WN45JnQUqoXP2XI1wxgo3GdDhCQbzlkos3YfDTBy9SroMw6oHgfd7KuyuNk3roNIyoaYNmt3PSpACziE=");
  
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
  
  fetch("https://api.airtable.com/v0/appXXbVu5p4uSKViT/logins", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
