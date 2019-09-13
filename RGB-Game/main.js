var colors;
var pColor;
var numSquares = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var nGame = document.querySelector("#nGame");
var stripe = document.querySelector("#stripe");
var modeB = document.querySelectorAll(".mode");

init();

function init(){
    initialize();
    mainframe();
}

function initialize(){
    for(var i = 0; i < modeB.length; i++){
        modeB[i].addEventListener("click", function(){
            modeB[0].classList.remove("selected");
            modeB[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "easy" ? numSquares = 3: numSquares = 6;
            reset ();
        });
    }
}

function mainframe(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var cColor = this.style.backgroundColor;
            if(cColor === pColor){
                message.textContent = "Congrats";
                nGame.textContent = "Try Again?"
                colorMatch(cColor);
                stripe.style.background = cColor;
                colorDisplay.style.color = cColor;

            } else {
                this.style.backgroundColor = "#666666";
                message.textContent = "TryAgain";
            }
        });
    } 
    reset();
}

function reset(){
    colors = generateRandomColors(numSquares);
    pColor = ptColor()
    colorDisplay.style.color = "white";
    stripe.style.backgroundColor = "white";
    colorDisplay.textContent = pColor;
    nGame.textContent = "New Colors"
    message.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }  
    } 
    h1.style.background = "steeleblue";
}


nGame.addEventListener("click", function(){
    reset();
});


function colorMatch(color){
    for(i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}

function ptColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}