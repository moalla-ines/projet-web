function corrigerQuiz() {
    // Correct answers
    const bonnesReponses = {
        q1: "Hyper Text Markup Language",
        q2: "<a>",
        q3: "background-color",
        q4: "var",
        q5: "alert()",
        q6: "<style>",
        q7: "font-family",
        q8: "Hides the element",
        q9: "// This is a comment",
        q10: "Positions the element relative to its nearest positioned ancestor"
    };

    let score = 0;
    const quizForm = document.getElementById("quiz-form"); 
    const reponsesUtilisateur = new FormData(quizForm); 
    const resultDiv = document.getElementById("result"); 
    let feedback = "<h2>Results:</h2><ul>"; 

    Object.keys(bonnesReponses).forEach(question => {
        // Find the selected radio button for the current question
        const reponseUtilisateur = reponsesUtilisateur.get(question);
        
        // If the user didn't select an answer for this question
        if (!reponseUtilisateur) {
            feedback += `<li>Question ${question.slice(1)}: <span style="color: orange;">No answer selected.</span></li>`;
            return;
        }
        
        // If the selected answer matches the correct answer
        if (reponseUtilisateur === bonnesReponses[question]) {
            score++; // Increment score
            feedback += `<li>Question ${question.slice(1)}: <span style="color: green;">Correct!</span></li>`;
        } else {
            feedback += `<li>Question ${question.slice(1)}: <span style="color: red;">Incorrect.</span> Correct answer: <strong>${bonnesReponses[question]}</strong></li>`;
        }
    });

    feedback += "</ul>";

    // Display the score and feedback
    resultDiv.innerHTML = ` 
        <p>Your score is <strong>${score} / ${Object.keys(bonnesReponses).length}</strong>.</p>
        ${feedback}
    `;
}
