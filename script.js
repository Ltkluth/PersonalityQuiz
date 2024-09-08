/*Add your JavaScript here*/

// defining variables
var buildingScore = 0;
var parkScore = 0;

var questionCount = 0;

var result = document.getElementById ("result");

// getting buttons
var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');
var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');
var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');
var restartButton = document.getElementById('restart');

// telling buttons which function to run
q1a1.addEventListener('click', building);
q1a2.addEventListener('click', park);
q2a1.addEventListener('click', building);
q2a2.addEventListener('click', park);
q3a1.addEventListener('click', park);
q3a2.addEventListener('click', building);
restartButton.addEventListener('click', restart);

// defining functions
function park(){
  questionCount += 1;
  parkScore += 1;

  console.log ("questionCount =" + questionCount + " parkScore = " + parkScore);

  if (questionCount == 3){
    console.log("The quiz is done!")
    updateResult();
  }
}

function building(){;
  questionCount += 1
  buildingScore += 1;

  console.log ("questionCount =" + questionCount + " buildingScore = " + buildingScore);
  
  if (questionCount == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

// defining result function
function updateResult() {
  if (buildingScore >=2) {
    console.log("You should focus on visiting Buildings!");
    result.innerHTML = "You should focus on visiting buildings!";
    
  } else if (parkScore >= 2) {
    console.log("You should focus on visiting Parks!");  
    result.innerHTML = "You should focus on visiting parks!";
  }  
}

// reset
function restart() {
  result.innerHTML = "Your result is..."
  parkScore = 0
  buildingScore = 0
  questionCount = 0
  console.log ("parkScore = " + parkScore + " buldingScore = " + buildingScore + " questionCount = " +questionCount);
}
