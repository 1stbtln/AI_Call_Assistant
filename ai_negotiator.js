const express = require('express');
const twilio = require('twilio');
const { OpenAI } = require('openai');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: false }));

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

let transcript = "";

async function makeCall(toNumber) {
  const call = await client.calls.create({
    url: 'http://your-ngrok-url.com/ai-response', 
    to: toNumber,
    from: process.env.TWILIO_PHONE
  });
  console.log("Calling:", toNumber);
}

app.post('/ai-response', async (req, res) => {
  const userInput = req.body.SpeechResult || "Hello, I am calling regarding a collection account.";
  
  transcript += `Agency: ${userInput}\n`;

  const aiResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a professional debt negotiator. Your goal is to negotiate a 50% settlement and a pay-for-delete agreement. If that fails, get the best possible outcome (lower amount, 'Paid in Full'). Ensure a written agreement is sent via email before any payment." },
      { role: "user", content: userInput }
    ]
  });

  const responseText = aiResponse.choices[0].message.content;
  transcript += `AI: ${responseText}\n`;

  const twiml = new twilio.twiml.VoiceResponse();
  twiml.say(responseText);

  res.type('text/xml');
  res.send(twiml.toString());
});

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.YOUR_EMAIL,
    subject: "Debt Settlement Agreement & Call Transcript",
    text: `Here is the final transcript:\n\n${transcript}\n\nIf an agreement was reached, please review before making any payment.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email failed:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

app.post('/send-email', async (req, res) => {
  await sendEmail();
  res.send("Email sent!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});