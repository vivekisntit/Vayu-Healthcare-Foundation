const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, location, category, description } = req.body;

  console.log("Support Request Received:");
  console.log(req.body);

  // Dummy AI response (temporary)
  res.json({
    message: "Your request has been received.",
    summary: "AI summary will appear here after integration.",
    priority: "LOW",
  });
});

module.exports = router;
