init()
var sum = 0;
var activePlayer = 0
var scores = [0 , 0]
var gamePlayer = true
document.querySelector(".role").addEventListener("click" , function(){
document.querySelector(".dice").style.display = "block";
var dice = 1 + Math.floor(Math.random() * 6);
console.log(dice);
var test = document.getElementById("dice-id");
console.log(test.src);
test.src = "img/Dice-"+dice+".png"
if(dice != 1){
sum = sum + dice;
document.querySelector(".player-"+activePlayer+"-sum").innerHTML = sum;
}else{
/*if(activePlayer == 0){
activePlayer = 1
}else{
activePlayer = 0
}*/
nextPlayer()
}
})


function nextPlayer(){
/*(activePlayer == 0) ? activePlayer = 1 : activePlayer = 0;*/
if (activePlayer == 0){
activePlayer = 1;
document.querySelector(".player-0-sum").innerHTML = 0
}else{
activePlayer = 0;
document.querySelector(".player-1-sum").innerHTML = 0
}
sum = 0
document.querySelector(".player-0").classList.toggle("active")
document.querySelector(".player-1").classList.toggle("active");
document.querySelector(".dice").style.display = "none"
}




document.querySelector(".hold").addEventListener("click" , function(){
scores[activePlayer] = scores[activePlayer] + sum
//scores[activePlayer] += sum;
document.querySelector(".player-"+activePlayer+"-score").innerHTML = scores[activePlayer];
if(scores[activePlayer] > 30){
document.querySelector(".player-"+activePlayer+"-score").innerHTML = "winner with score: " + scores[activePlayer];
document.querySelector(".player-" + activePlayer).classList.add("winner")
}
nextPlayer()
})


document.querySelector(".new").addEventListener("click" , init)



function init(){
document.querySelector(".player-0-score").innerHTML = 0;
document.querySelector(".player-1-score").innerHTML = 0;
document.querySelector(".player-0-sum").innerHTML = 0;
document.querySelector(".player-1-sum").innerHTML = 0;
document.querySelector(".dice").style.display = "none";
document.querySelector(".player-1").classList.remove("winner")
document.querySelector(".player-0").classList.remove("winner")
document.querySelector(".player-0").classList.remove("active")
document.querySelector(".player-1").classList.remove("active")
document.querySelector(".player-0").classList.add("active")
}