function check(){
  var question1 = document.questionaire.q1.value;
  var question2 = document.questionaire.q2.value;
  var question3 = document.questionaire.q3.value;
  var question4 = document.questionaire.q4.value;
  var question5 = document.questionaire.q5.value;
  var question6 = document.questionaire.q6.value;
  var question7 = document.questionaire.q7.value;
  var question8 = document.questionaire.q8.value;
  var question9 = document.questionaire.q9.value;
  var question10 = document.questionaire.q10.value;
  var correct =0;
  if (question1 == "d") {
    correct++;
  }
  if (question2 == "c") {
    correct++;
  }
  if (question3 == "a") {
    correct++;
  }
  if (question4 == "c") {
    correct++;
  }
  if (question5 == "d") {
    correct++;
  }
  if (question6 == "b") {
    correct++;
  }
  if (question7 == "d") {
    correct++;
  }
  if (question8 == "b") {
    correct++;
  }
  if (question9 == "d") {
    correct++;
  }
  if (question10 == "a") {
    correct++;
  }

  document.getElementById("score-submit").style.visibility = "visible";
  document.getElementById("correct-numbers").innerHTML = "You got" + correct + "correct.";
}
i = 60;
function onTimer() {
  document.getElementById('timer').innerHTML = i;
  i--;
  if (i < 0) {
    alert('You lose!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
}
