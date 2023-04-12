var randomNumber1 = Math.floor(Math.random()*6 + 1);
    // console.log(randomNumber1);
    var  randomDice = "dice"+randomNumber1+".png";
    document.querySelector(".dice1").setAttribute("src",randomDice);
var randomNumber2 =Math.floor(Math.random()*6 +1);
    var  randomDice1 = "dice"+randomNumber2+".png";
    document.querySelector(".dice2").setAttribute("src",randomDice1);


    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 Wins"; 
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 Wins";
    }else if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="DRAW";
    }

// if (randomNumber1 ===1){
//     document.querySelector(".dice1").setAttribute("src","images/dice1.png");
//     document.querySelector("h1").innerHTML="Player 1 wins";
// }else if(randomNumber1 ===2){
//     document.querySelector(".dice1").setAttribute("src","images/dice2.png");
//     document.querySelector("h1").innerHTML="Player 2 wins";
// }else if(randomNumber1 ===3){
//     document.querySelector(".dice2").setAttribute("src","images/dice3.png");
//     document.querySelector("h1").innerHTML="Player 1 wins";
// }else if(randomNumber1 ===4){
//     document.querySelector(".dice").setAttribute("src","images/dice4.png");
//     document.querySelector("h1").innerHTML="Player 2 wins";
// }else if(randomNumber1 ===5){
//     document.querySelector(".dice2").setAttribute("src","images/dice5.png");
//     document.querySelector("h1").innerHTML="Player 1 wins";
// }



