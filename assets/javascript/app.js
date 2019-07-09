function check(){
  var q1 = document.questionaire.q1.value;
  var q2 = document.questionaire.q2.value;
  var q3 = document.questionaire.q3.value;
  var q4 = document.questionaire.q4.value;
  var q5 = document.questionaire.q5.value;
  var q6 = document.questionaire.q6.value;
  var q7 = document.questionaire.q7.value;
  var q8 = document.questionaire.q8.value;
  var q9 = document.questionaire.q9.value;
  var q10 = document.questionaire.q10.value;
  var correct = 0;
  var messages = ["Outstanding", "Acceptable", "Poor", "Troll"];
  var pics = ["assets/images/tenor.gif", "assets/images/acceptable.gif", "assets/images/poor.gif", "assets/images/troll.gif"];

  var score;
  if (correct > 8) {
    score = 0;
  }
  if (correct < 8 && correct > 6) {
    score = 1;
  }
  if (correct < 6 && correct > 3) {
    score = 2;
  }
  if (correct < 3) {
    score = 3;
  }
   
  if (q1 == "d") {
    correct++;
  }
  if (q2 == "c") {
    correct++;
  }
  if (q3 == "a") {
    correct++;
  }
  if (q4 == "c") {
    correct++;
  }
  if (q5 == "d") {
    correct++;
  }
  if (q6 == "b") {
    correct++;
  }
  if (q7 == "d") {
    correct++;
  }
  if (q8 == "b") {
    correct++;
  }
  if (q9 == "d") {
    correct++;
  }
  if (q10 == "a") {
    correct++;
  }

  document.getElementById("score-submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("correct-answers").innerHTML = "You got " + correct + " correct answers out of 10 questions.";
  document.getElementById("pic").src = pics[score];
    document.getElementById("form").style.visibility = "hidden";
    document.getElementById("reset-btn").onclick = function() {
      restartplay()
   };
}
i = 60;
function onTimer() {
  document.getElementById('timer').innerHTML = "TIME REMAINING: " + i;
  i--;
  if (i < 0) {
    alert('Time is Up!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
}
document.getElementById("#start-btn-wrapper").onclick = function(){
startplay()
}

