var num = 0;
var back = document.getElementById("color");

// Change Background color...
function backgroundColor(){
    let val = "0123456789ABCDEF";
    let hash = "#";

    for (let i = 0; i < 6; i++) {
        hash = (hash + val[Math.floor(Math.random() * 16)])
    }
    console.log(hash);
    back.style.backgroundColor=hash;
}

// Decreament.....
function Decreament(){
    num--;
    document.getElementById("result").innerHTML=`${num}`;
    console.log(num);
    backgroundColor();
}

// Increament......
var b;
function Increament(){
    num ++;
    document.getElementById("result").innerHTML=`${num}`;
    backgroundColor();
}

// Reset.......
function Reset(){
    console.log("Call ho rha h")
    num = 0;
    document.getElementById("result").innerHTML=`${num}`;
    back.style.backgroundColor="#ffffff";
}