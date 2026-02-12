const form = document.getElementById("supportForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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

  resultDiv.innerHTML = `
    <h3>${result.message}</h3>
    <p><strong>Summary:</strong> ${result.summary}</p>
    <p><strong>Priority:</strong> ${result.priority}</p>
  `;
});
