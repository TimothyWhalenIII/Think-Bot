let number=Math.floor((Math.random()*18)+1)+41;
let numbermin=0;
let numbermax=100;
let numberloose=0;
const button=document.getElementById("less");
const button2=document.getElementById("more");
const button3=document.getElementById("yes");
const endgame="I Give Up";
const endgame2="I Win"
let guess=true;
let guess2=false;
let clickcount=0;




function showNumber() {
    document.getElementById("number").textContent=number;
}
function gameover() {
    document.getElementById("guess").textContent=endgame;
}
function gameover2() {
    document.getElementById("guess").textContent=endgame2;
}
function calculation() {
    numberloose=numbermax-numbermin;
    numberloose=numberloose/2;
    numberloose=Math.round(numberloose);
    if (guess===true) {//throws in some random numbers first click
        numberloose=numberloose+Math.floor((Math.random()*8)+1)-4;
        guess2=true;
        guess=false;
    }
    if (guess2===true){//trows in some random numbers second click
        numberloose=numberloose+Math.floor((Math.random()*2)+1)-1;
        guess2=false
    }
    number=numberloose+numbermin;
    showNumber(number);
    if (clickcount>=6){//game timer
        gameover(endgame);
        showNumber("");
        document.getElementById("less").disabled=true;
        document.getElementById("yes").disabled=true;
        document.getElementById("more").disabled=true;
        clickcount++;
    }
    else {//usual output
        clickcount++;
    }
}
function data(){
    document.getElementById("screen").style.backgroundColor = "lightblue";
}
function data2(){
    document.getElementById("screen").style.backgroundColor = "lightgreen";
}
function data3(){
    if (clickcount<7) {
    document.getElementById("screen").style.backgroundColor = "lightgray";
    }
    else {
        document.getElementById("screen").style.backgroundColor = "lightpink";
    } 
}


button.addEventListener("click", function(){
    numbermax=number;
    calculation()
});
button2.addEventListener("click", function(){
    numbermin=number;
    calculation()
});
button3.addEventListener("click", function(){
    gameover2(endgame2);
    showNumber("");
    document.getElementById("less").disabled=true;
    document.getElementById("yes").disabled=true;
    document.getElementById("more").disabled=true;
});
showNumber(number);



