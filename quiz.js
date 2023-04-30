const quizForm = document.getElementById("quiz-form");
const feedbackDiv = document.getElementById("feedback");

const correctAnswers = ["a", "b"];

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value
  ];

  let score = 0;
  let feedback = "";
  
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    } else {
      feedback += "Question " + (i+1) + ": ";
      feedback += "Your answer was " + userAnswers[i] + ". ";
      feedback += "<br>"; 
      feedback += "The correct answer was " + correctAnswers[i] + ". ";
      feedback += "Here's an explanation of why the correct answer is correct.";
      feedback += "<br>";
    }
  }

  if (score === userAnswers.length) {
    feedback = "Congratulations! You got all the answers right.";
  } else {
    feedback = "Sorry, you got " + score + " out of " + userAnswers.length + " answers correct. Here's some feedback on your answers: <br>" + feedback;
  }

  feedbackDiv.innerHTML = feedback;
});