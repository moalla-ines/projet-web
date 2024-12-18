function corrigerQuiz() {
    // Correct answers
    const bonnesReponses = {
        q1: "Paris",
        q2: "Leonardo da Vinci",
        q3: "7",
        q4: "Hydrogen",
        q5: "Mars",
        q6: "Jupiter",
        q7: "Michael Jackson",
        q8: "H2O",
        q9: "Japan",
        q10: "William Shakespeare"
    };

    let score = 0; // Initial score
    let reponsesUtilisateur = new FormData(document.getElementById("quiz-form")); // Retrieve user answers
    let resultDiv = document.getElementById("result"); // Area to display results
    let feedback = "<h2>Results:</h2><ul>";

    // Iterate through the correct answers
    for (let question in bonnesReponses) {
        const reponse = reponsesUtilisateur.get(question); // Get the user's answer for each question
        if (reponse === bonnesReponses[question]) {
            score++; // Increase score if the answer is correct
            feedback += `<li>Question ${question.slice(1)}: Correct!</li>`; // Show correct answer
        } else {
            // Show the correct answer if the user's answer is wrong
            feedback += `<li>Question ${question.slice(1)}: Correct answer: <strong>${bonnesReponses[question]}</strong></li>`;
        }
    }

    feedback += "</ul>";

    // Display score and feedback
    resultDiv.innerHTML = `<p>Your score is <strong>${score} / 10</strong></p>` + feedback;
}
