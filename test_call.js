const express = require('express');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: false }));

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

async function makeTestCall() {
  const call = await client.calls.create({
    url: 'https://ea73-2607-fb90-bb09-c5eb-146e-88cc-4eda-f837.ngrok-free.app', 
    to: process.env.PERSONAL_PHONE,
    from: process.env.TWILIO_PHONE
  });
  console.log("Calling:", process.env.PERSONAL_PHONE);
}

app.post('/voice', (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();
  twiml.say("Hi, this is a test call from Twilio. How are you?");
  twiml.pause({ length: 2 });
  twiml.say("That's great to hear! This was just a test. Goodbye.");
  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Press ENTER to make the test call...", () => {
  makeTestCall();
  rl.close();
});