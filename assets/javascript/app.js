
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