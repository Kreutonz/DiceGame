var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//************************
// FUNCTIONS
//************************

function getRoll1(){
  if(randomNumber1 === 1){
    document.querySelector(".img1").src="images/dice1.png";        //dice1.png
  }else if(randomNumber1 === 2){
    document.querySelector(".img1").src="images/dice2.png";        //dice2.png
  }else if(randomNumber1 === 3){
    document.querySelector(".img1").src="images/dice3.png";        //dice3.png
  }else if(randomNumber1 === 4){
    document.querySelector(".img1").src="images/dice4.png";        //dice4.png
  }else if(randomNumber1 === 5){
    document.querySelector(".img1").src="images/dice5.png";        //dice5.png
  }else{
    document.querySelector(".img1").src="images/dice6.png";        //dice6.png
  }
}//getRoll1()


function getRoll2(){
  if(randomNumber2 === 1){
    document.querySelector(".img2").src="images/dice1.png";        //dice1.png
  }else if(randomNumber2 === 2){
    document.querySelector(".img2").src="images/dice2.png";        //dice2.png
  }else if(randomNumber2 === 3){
    document.querySelector(".img2").src="images/dice3.png";        //dice3.png
  }else if(randomNumber2 === 4){
    document.querySelector(".img2").src="images/dice4.png";        //dice4.png
  }else if(randomNumber2 === 5){
    document.querySelector(".img2").src="images/dice5.png";        //dice5.png
  }else{
    document.querySelector(".img2").src="images/dice6.png";        //dice6.png
  }
}//getRoll2()

function determineWinner(){
  if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML="🚩 Player 1 wins!";   //player 1 wins
  }else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML="Player 2 wins! 🚩";   //player 2 wins
  }else{
    document.querySelector(".container h1").innerHTML="Draw!";            //draw
  }
}//determineWinner()

getRoll1();
getRoll2();
determineWinner();
