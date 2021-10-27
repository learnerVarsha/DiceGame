var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomNumber2 = (Math.floor(Math.random()*6))+1;

document.querySelector("#diceForPlayer1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("#diceForPlayer2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins!";
  document.querySelector("#p1").textContent = "🚩Player 1";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!";
  document.querySelector("#p2").textContent = "🚩Player 2";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
