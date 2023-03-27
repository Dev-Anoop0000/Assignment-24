let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let messege = "Your cursore is on my pic....";

function mouse_over(){
    card2.innerHTML=`<h2>Mouse Over My Pic.</h2>`
    
}

card1.addEventListener("mouseover", mouse_over);

function mouse_out(){
    card2.innerHTML=`<h2>Mouse Out From My Pic.</h2>`
}

card1.addEventListener("mouseout", mouse_out);
