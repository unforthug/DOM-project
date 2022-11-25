

let newHeart = document.querySelectorAll(".heart");
let removeItem = document.querySelectorAll(".div1");
let close = document.querySelectorAll(".close");
let counter = document.querySelectorAll(".counter1")
let total = document.querySelector(".Totals")


function sum(){
     
    let sum = +document.querySelector(`.total0`).innerHTML + +document.querySelector(`.total1`).innerHTML + +document.querySelector(`.total2`).innerHTML;
    total.innerHTML = sum.toString()
    
}


function removeit(x){
document.body.removeChild(removeItem[x])}


function changeHeart(x){
    switch(x){
case 0 : if(newHeart[0].getAttribute("src")===('./img/like.png')){
         newHeart[0].setAttribute("src",'./img/heart.png');
         }else if(newHeart[0].getAttribute("src")===('./img/heart.png')){
    newHeart[0].setAttribute("src",'./img/like.png');
         }; break;
case 1 : if(newHeart[1].getAttribute("src")===('./img/like.png')){
                newHeart[1].setAttribute("src",'./img/heart.png');
        }else if(newHeart[1].getAttribute("src")===('./img/heart.png')){
        newHeart[1].setAttribute("src",'./img/like.png'); 
        }; break;
case 2 : if(newHeart[2].getAttribute("src")===('./img/like.png')){
         newHeart[2].setAttribute("src",'./img/heart.png');
         }else if(newHeart[2].getAttribute("src")===('./img/heart.png')){
         newHeart[2].setAttribute("src",'./img/like.png');}
         break;
default : break ;
}
}


function add(x){
    counter[x].innerHTML = +counter[x].innerHTML + 1
    d = +counter[x].innerHTML
    document.querySelector(`.total${x}`).innerHTML = d * 100;
}

function Minus(x){
    if(+counter[x].innerHTML>0){
    counter[x].innerHTML = +counter[x].innerHTML - 1;
    }
    f = +counter[x].innerHTML;
    document.querySelector(`.total${x}`).innerHTML = f * 100;
}

