const form = document.getElementById("supportForm");
const resultDiv = document.getElementById("result");
const categorySelect = document.getElementById("category");
const specificIssueSelect = document.getElementById("specificIssue");

const issues = {
  physical: [
    "Tuberculosis (TB)",
    "Diabetes / High Blood Pressure",
    "Heart-related problems",
    "Respiratory problems",
    "Severe infection / Fever",
  ],
  mental: [
    "Depression / Persistent sadness",
    "Anxiety / Panic attacks",
    "Suicidal thoughts / Crisis",
    "Substance abuse",
    "Severe stress / Trauma",
  ],
  maternal: [
    "Pregnancy complications",
    "Newborn care issues",
    "Child malnutrition / Anemia",
    "Vaccination support",
    "Menstrual health problems",
  ],
  social: [
    "Domestic violence",
    "Elderly neglect",
    "Financial inability for treatment",
    "Disability support",
    "Chronic caregiving burden",
  ],
};

categorySelect.addEventListener("change", function () {
  const selectedCategory = this.value;
  specificIssueSelect.innerHTML =
    '<option value="">Select Specific Issue</option>';

  if (selectedCategory && issues[selectedCategory]) {
    specificIssueSelect.disabled = false;

    issues[selectedCategory].forEach((issue) => {
      const option = document.createElement("option");
      option.value = issue;
      option.textContent = issue;
      specificIssueSelect.appendChild(option);
    });
  } else {
    specificIssueSelect.disabled = true;
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultDiv.innerHTML = `
    <div class="result-content">
      <p>Processing your request...</p>
    </div>
  `;

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    let priorityClass = "low";
    if (result.priority === "HIGH") priorityClass = "high";
    if (result.priority === "MEDIUM") priorityClass = "medium";

    resultDiv.innerHTML = `
      <div class="result-content">
        <h3>Request Submitted Successfully</h3>
        <p><strong>AI Summary:</strong> ${result.summary}</p>
        <p>
          <strong>Priority:</strong> 
          <span class="priority ${priorityClass}">
            ${result.priority}
          </span>
        </p>
      </div>
    `;

    // Reset form after submission
    form.reset();
    specificIssueSelect.disabled = true;
  } catch (error) {
    console.error("Error submitting form:", error);

    resultDiv.innerHTML = `
      <div class="result-content">
        <h3>Something went wrong</h3>
        <p>Please try again later.</p>
      </div>
    `;
  }
});
