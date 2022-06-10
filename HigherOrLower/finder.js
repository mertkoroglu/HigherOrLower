
var startIdx = 0;
var endIdx = 100;

let lower = document.getElementById("lower");
let higher = document.getElementById("higher");
let right = document.getElementById("right");
let g1 = document.getElementById("g1");
let label = document.getElementById("label");

var num = Math.floor(Math.random() * (endIdx - startIdx)) + startIdx;
g1.innerHTML = num;

function checkEnd(){
    if(startIdx == endIdx - 1 || startIdx - 1 == endIdx || startIdx == endIdx ){
        end();

    }
}

function end(){
    lower.style.display = "none";
        higher.style.display = "none";
        right.style.display = "none";
        label.style.display = "none";
        g1.innerHTML = "Your Guess is " + num;
}

lower.addEventListener("click", function(){
    if(startIdx + 1 != num){
        endIdx = num;
    do{
        guessNum = Math.floor(Math.random() * (endIdx - startIdx - 1)) + startIdx + 1;
    }while(guessNum == num);
    num = guessNum;
    g1.innerHTML = num;
    console.log(startIdx, endIdx);
    checkEnd();
    }
    else{
        end();
    }

});

higher.addEventListener("click", function(){
    if(endIdx - 1 != num){
        startIdx = num;
        do{
            guessNum = Math.floor(Math.random() * (endIdx - startIdx - 1)) + startIdx + 1;
        }while(guessNum == num);
        num = guessNum;
        g1.innerHTML = num;
        console.log(startIdx, endIdx);
        checkEnd();
    }
    else{
        end();
    }
    

});

right.addEventListener("click", function(){
    end();
});

console.log(startIdx, endIdx);
