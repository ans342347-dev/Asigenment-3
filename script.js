document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('StudentName').value;
    let rollNo = document.getElementById('rollNo').value;
    let subjectInputs = document.querySelectorAll('.subject-marks');
    let errorMessage = document.getElementById('erroressage');

    let total = 0;
    let isValid = true;

    // Validate marks inputs (0 - 100 check)
    subjectInputs.forEach(input => {
        let mark = Number(input.value);
        if (input.value === '' || mark < 0 || mark > 100) {
            isValid = false;
        }
        total += mark;
    });

    if (!isValid) {
        errorMessage.style.display = 'block';
        document.getElementById('resultCard').style.display = 'none';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    // Percentage & Grade calculations
    let percentage = (total / 600) * 100;

    let grade = '';
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    let status = percentage >= 50 ? 'PASS' : 'FAIL';

    // DOM Updates
    document.getElementById('resName').textContent = name;
    document.getElementById('resRollNo').textContent = rollNo;
    document.getElementById('resTotal').textContent = total + " / 600";
    document.getElementById('resPercentage').textContent = percentage.toFixed(2) + " %";
    document.getElementById('resGrade').textContent = grade;

    let statusElement = document.getElementById('resStatus');
    if (status === 'PASS') {
        statusElement.textContent = 'PASS ✔️';
        statusElement.className = 'pass';
    } else {
        statusElement.textContent = 'FAIL ❌';
        statusElement.className = 'fail';
    }

    // Display Result
    document.getElementById('resultCard').style.display = 'block';
});
