function calculateScore() {
    console.log("calculateScore function is called");

    var selectedValues = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
        q6: document.querySelector('input[name="q6"]:checked').value,
        q7: document.querySelector('input[name="q7"]:checked').value,
        q8: document.querySelector('input[name="q8"]:checked').value,
        q9: document.querySelector('input[name="q9"]:checked').value,
        difficulty: document.querySelector('input[name="difficulty"]:checked').value
    };

    alert("Selected Values: " + JSON.stringify(selectedValues));

    var totalScore = calculateTotalScore(selectedValues);
    alert("Total Score: " + totalScore);

    // Redirect to another page
    window.location.href = 'Emotion Detection.html';
}

function calculateTotalScore(values) {
    var totalScore = Object.values(values).reduce((acc, val) => acc + parseInt(val), 0);
    return totalScore;
}
