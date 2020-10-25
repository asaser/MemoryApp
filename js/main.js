let sec = 0;
let counterClicked = 0;
let clickCard = null;
let notclickCard = false;
let allCard = 0;

const cards = [...document.querySelectorAll('.card')];

// creat table with values to creat them to be able random


function startTime(value) {
  return value > 9 ? value : "0" + value;
}

function stopTime() {
  clearInterval(intervalTime);
}

let intervalTime = setInterval(function () {

  document.getElementById("seconds").innerHTML = startTime(++sec % 60);
  document.getElementById("minutes").innerHTML = startTime(parseInt(sec / 60, 10));
}, 1000);

let movements = document.getElementsByClassName('movements');
movements[0].innerHTML = 0;


function startCounter() {
  counterClicked++;
  movements[0].innerHTML = counterClicked;
}
