
//Settining Inital Score = 0
var myScore = 0;
var wins = 0;
var loose = 0;


// Adding Sound for NOW
// var audioElement = document.createElement("audio");
// audioElement.setAttribute ("src", "assets/captainplanet24.mp3");


// Generating a target and random number for gems   
var target = randomNumber(20,50);
var gem1 = randomNumber(1,5);
var gem2 = randomNumber(1,5);
var gem3 = randomNumber(1,5);
var gem4 = randomNumber(1,5);


//Displaying the current score as 0 and target
$("#score").text (0);
$("#target").text (target);


//// Setting up the function for all the gem to add up the random score after each click
// scores ("gem1",gem1);
// scores ("gem2",gem2);
// scores ("gem3",gem3);
// scores ("gem4",gem4);
  
  // Function for random number
  function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
  }  
  

function scores (points){
    myScore = myScore + points;              
    $("#score").text(myScore);
      console.log("sdffds"+points)
    if (myScore == target){
        wins = wins + 1;
         $("#wins").text(wins);
         gem1 = randomNumber(1,5);
          gem2 = randomNumber(1,5);
          gem3 = randomNumber(1,5);
          gem4 = randomNumber(1,5);
          target = randomNumber(20,25);
          $("#target").text (target);
          myScore= 0;
          $("#score").text(myScore);

        }

        else if (myScore > target){
        loose = loose +1;
        $("#loose").text(loose);
        gem1 = randomNumber(1,5);
          gem2 = randomNumber(1,5);
          gem3 = randomNumber(1,5);
          gem4 = randomNumber(1,5);
          target = randomNumber(20,25);
          $("#target").text (target);
          myScore= 0;
          $("#score").text(myScore);
    }
//})
}

//  function for all the gem to add up the random score after each click
$("#gem1").on("click", function() {
  scores(gem1)
});

$("#gem2").on("click",  function() {
  scores(gem2)
});
$("#gem3").on("click",  function() {
  scores(gem3)
});
$("#gem4").on("click",  function() {
  scores(gem4)
});

    

