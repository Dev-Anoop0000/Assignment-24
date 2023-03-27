let card2 = document.getElementById("card-2");


let inputBox = document.getElementById('input-box');
let display = document.getElementById('display');


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress',function(e){
        card2.style.display="flex";
        display.innerHTML ="You have pressed " +`<span>${e.key}</span>` + " wrong key and now, you are about to be arrested.";
        console.log(e.key);
        console.log(display);
} );