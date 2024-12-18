import { json } from 'micro';
export default async function handler(req) {
  const data = await json(req)
  const {username, password} = data
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_SECRET_API_TOKEN'}).base('appXXbVu5p4uSKViT');

base('logins').create({
  "username": "Very-Secure-Username.gov",
  "password": "thosewhoknow"
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});
