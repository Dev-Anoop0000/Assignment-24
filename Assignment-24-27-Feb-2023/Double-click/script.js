let btn = document.getElementsByTagName("button")[0];
let result = document.getElementById("result");
let card1 = document.getElementById("div1");

// ----- Reload Function----- 
function reload(){
    location.reload();
}

// ------ double click function ------- 
function doubleclick(){
    card1.style.transform= "translateY(-102px)";
    card1.style.transition= "all 3s";

    result.style.display= "flex";
    result.style.transform= "translateY(102px)";
    result.style.transition= "all 3s";
    result.innerHTML=`<h1>You clicked two time..</h1>`;
    setInterval(reload, 10000);
}

btn.addEventListener("dblclick", doubleclick);