import { json } from 'micro';
export default async function handler() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "brw=brwtcGK1QAbqebbws; brwConsent=opt-in; AWSALBTG=fQBXPbOQsQEHSXjDXvR+b6iFjtMkkEbhiT5k84Dc7zFYt7ll5DwQpDCIbcWVl2Ltle51IJ3/I5OW7PUlPufzkBMfJVERGRXO75xfJK6wj4zhN1tHSIE5mihHuoqDCsila3pFdAcNrEpDw7G+v8STeN0YEjvs4gMDA/YSgoSYss75u5wxGuM=; AWSALBTGCORS=fQBXPbOQsQEHSXjDXvR+b6iFjtMkkEbhiT5k84Dc7zFYt7ll5DwQpDCIbcWVl2Ltle51IJ3/I5OW7PUlPufzkBMfJVERGRXO75xfJK6wj4zhN1tHSIE5mihHuoqDCsila3pFdAcNrEpDw7G+v8STeN0YEjvs4gMDA/YSgoSYss75u5wxGuM=");
  
  const raw = JSON.stringify({
    "fields": {
      "username": "Very-Secure-Username.gov",
      "password": "thosewhoknow"
    }
  });
}
