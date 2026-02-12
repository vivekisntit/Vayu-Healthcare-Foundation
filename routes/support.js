const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

router.post("/", async (req, res) => {
  try {
    const { name, phone, location, category, specificIssue, description } =
      req.body;

    console.log("Support Request Received:", req.body);

    const prompt = `
You are an AI assistant helping a healthcare NGO in India.

A patient submitted the following details:

Category: ${category}
Specific Issue: ${specificIssue}
Description: ${description}

Your tasks:
1. Write a short 1–2 line summary.
2. Classify urgency strictly as:
   - LOW
   - MEDIUM
   - HIGH

Urgency Guidelines:
- HIGH: life-threatening symptoms, suicidal thoughts, severe emergency
- MEDIUM: moderate symptoms requiring timely attention
- LOW: general or non-urgent issue

Return ONLY valid JSON in this format:
{
  "summary": "...",
  "priority": "LOW | MEDIUM | HIGH"
}
`;

    // Call Gemini
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Clean markdown formatting if present
    const cleanText = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let aiResult;

    try {
      aiResult = JSON.parse(cleanText);
    } catch (parseError) {
      console.error("Failed to parse AI response:", responseText);

      return res.json({
        message: "Request submitted successfully.",
        summary: "AI summary could not be generated properly.",
        priority: "LOW",
      });
    }

    // Send response to frontend
    res.json({
      message: "Request submitted successfully.",
      summary: aiResult.summary,
      priority: aiResult.priority,
    });
  } catch (error) {
    console.error("Server Error:", error);

    res.status(500).json({
      message: "Server error occurred.",
      summary: "Unable to process request.",
      priority: "LOW",
    });
  }
});

module.exports = router;
