document.getElementById('assessmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const teacherName = document.getElementById('teacherName').value;
    const subject = document.getElementById('subject').value;
    const score = document.getElementById('score').value;

    const table = document.getElementById('resultsTable').querySelector('tbody');
    const row = table.insertRow();

    row.innerHTML = `
        <td>${teacherName}</td>
        <td>${subject}</td>
        <td>${score}</td>
    `;

    this.reset();
});
