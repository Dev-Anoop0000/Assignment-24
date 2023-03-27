let btn1 = document.getElementsByTagName("button")[0];
btn1.style.color = "red";
function Onclick(){
    btn1.style.color="green";
    alert("You used an onclick event")
}
btn1.addEventListener("click", Onclick)