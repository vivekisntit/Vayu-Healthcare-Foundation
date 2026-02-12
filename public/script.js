const priorityClass =
  result.priority === "HIGH"
    ? "high"
    : result.priority === "MEDIUM"
      ? "medium"
      : "low";

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
