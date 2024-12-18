import { json } from 'micro';
export default async function handler(req) {
  const data = await json(req)
  const {username, password} = data
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'Bearer patFPAzk3Ni4jtL7K.8bdcda86e17b32bd177f9ab25661e401e4454a8e4a2401a267c36b67e94ea933'}).base('appXXbVu5p4uSKViT');

base('logins').create({
  "username": username,
  "password": password
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});
}
