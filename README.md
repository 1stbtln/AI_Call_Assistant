# AI_Call_AssistantAI Call Assistant
This is a personal AI-powered call assistant that uses Twilio to automate phone calls. The assistant can make test calls, generate responses, and handle basic phone interactions.

🚀 Features
✅ Makes automated phone calls using Twilio
✅ Speaks predefined messages and interacts with users
✅ Designed for personal use (scheduling, reminders, etc.)

📌 How It Works
Runs a Node.js script to initiate a Twilio call.
Uses Twilio Voice API to call a phone number.
Plays a test message and interacts with the recipient.
Can be expanded to handle personal scheduling tasks in the future.
🛠️ Installation & Setup
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/AI-Call-Assistant.git
cd AI-Call-Assistant
Install dependencies:
bash
Copy
Edit
npm install
Set up environment variables in a .env file:
ini
Copy
Edit
TWILIO_SID=your_twilio_sid
TWILIO_AUTH=your_twilio_auth_token
TWILIO_PHONE=your_twilio_phone_number
PERSONAL_PHONE=your_personal_phone_number
Run the script:
bash
Copy
Edit
node test_call.js
⚠️ Disclaimer
This project is for personal use and development only. It is not intended for commercial use
