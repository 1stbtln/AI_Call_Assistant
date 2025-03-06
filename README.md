# AI Call Assistant

AI Call Assistant is a personal project that uses Twilio's Voice API to automate phone calls. The assistant can initiate calls, speak predefined messages, and interact with recipients.

---

## Features
-  **Automated Phone Calls** – Uses Twilio to make outbound calls.  
-  **Voice Interaction** – Delivers spoken messages and can pause for responses.  
-  **Configurable & Expandable** – Can be adapted for scheduling, reminders, or other tasks.  

---

##  How It Works
1. The script initiates a **Twilio call** to a specified phone number.  
2. The recipient hears a **predefined message** and interacts.  
3. The conversation is handled using **Twilio’s Voice API**.  

---

## Installation & Setup

### Clone the Repository

git clone https://github.com/your-username/AI-Call-Assistant.git
cd AI-Call-Assistant

### Install Dependencies
bash
Copy
Edit
npm install

### Configure Environment Variables
Create a .env file in the project root and add:
ini
Copy
Edit
- TWILIO_SID=your_twilio_sid
- TWILIO_AUTH=your_twilio_auth_token
- TWILIO_PHONE=your_twilio_phone_number
- PERSONAL_PHONE=your_personal_phone_number

### Start the Server
bash
Copy
Edit
node test_call.js
-  Future Enhancements
-  Interactive AI Responses using OpenAI
-  Appointment Scheduling Capabilities
-  Call Logging & Transcription

 Technologies Used
- Node.js – Backend runtime
- Twilio Voice API – Call handling
- Express.js – Web server
- dotenv – Environment variable management

 License
This project is open-source and available under the MIT License.
