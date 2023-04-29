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
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }

  let feedback = "";
  if (score === userAnswers.length) {
    feedback = "Congratulations! You got all the answers right.";
  } else {
    feedback = "Sorry, you got " + score + " out of " + userAnswers.length + " answers correct. You need help.";
  }

  feedbackDiv.innerHTML = feedback;
});
