# 🏥 Vayu Healthcare Foundation
Live Demo: https://vayu-healthcare-foundation.onrender.com/

---

## Project Overview

Vayu Healthcare Foundation is a web application designed to help NGOs efficiently manage and prioritize healthcare support requests across India.

The system allows patients to submit structured support requests, which are then automatically analyzed using AI to:

- Generate a concise case summary
- Classify urgency level (LOW / MEDIUM / HIGH)
- Assist NGOs in faster preliminary assessment and response prioritization

---
## India focused Healthcare Design

The application has:

**Broad Categories :**  
- Physical Health
- Mental Health
- Maternal and Child Health
- Social and Family health concerns


**Dynamically loading Sub-categories :**  
- Tuberculosis, Diabetes, Cardiac issues... etc
- Depression, Anxiety Sucidal thoughts... etc
- Pregnancy complications, Child malnutrition, vaccination support... etc
- Domestic violence, Elderly neglect, Disability support... etc

This structure improves context for AI classification.

---

## AI Solution
#### This application integrates Gemini API to perform:

**Case Summarization**
- The AI condenses the patient’s description into a 1–2 line concise summary.

**Urgency Classification**

Each case is categorized as:
- **HIGH** - Life-threatening symptoms, suicidal behaviour, severe emergencies
- **MEDIUM** - Moderate symptoms requiring timely intervention
- **LOW** - General or non-urgent requests

The AI is guided using structured prompting to ensure consistent JSON output, which is sanitized and parsed securely in the backend.

---

## Technologies Used
**FRONTEND**
- HTML
- CSS
- JavaScript

**BACKEND**
- Node.js
- Express.js

**AI Integration** - @google/generative-ai (Gemini 2.5 Flash)

**DEPLOYEMENT** - Render (Full-stack deployement)

---

## Project Structure
```bash
├── node_modules/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── routes/
│   └── support.js
└── README.md
```
---

## How to Run Locally


### Clone the Repository
```bash
git clone https://github.com/vivekisntit/Vayu-Healthcare-Foundation.git
cd .\foundation_vayu\
```
### Install Dependencies
```bash
npm install
```
### Create .env file
```bash
GEMINI_API_KEY=enter_gemini_2.5flash_api
```

### Start server
```bash
npm start
```

### Visit
```bash
http://localhost:3000
```