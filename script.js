document.addEventListener("DOMContentLoaded", () => {


const envelope = 
document.querySelector(".envelope-container");


const letter =
document.querySelector(".letter");


const scene =
document.querySelector(".scene");


const close =
document.querySelector("#close");


let heartInterval;
let opened = false;




envelope.addEventListener("click", () => {


if(opened) return;


opened = true;



// esconde envelope

envelope.classList.add("hide");



// começa mudança do fundo

setTimeout(()=>{


scene.classList.add("open");


},300);




// abre carta

setTimeout(()=>{


letter.classList.add("show");


createHearts();


},800);



});






close.addEventListener("click",()=>{

clearInterval(heartInterval);
letter.classList.remove("show");
scene.classList.remove("open");

setTimeout(()=>{


envelope.classList.remove("hide");


opened=false;


},700);



});


});

// função para criar corações animados

let heartInterval;

function createHearts(){


heartInterval =
setInterval(()=>{


const area =
document.getElementById("particles");


const heart =
document.createElement("div");



heart.className="heart";


heart.innerHTML="♥";



heart.style.left =
Math.random()*100+"%";



heart.style.fontSize =
(15 + Math.random()*35)+"px";



heart.style.setProperty(
"--x",
(Math.random()*200-100)+"px"
);



area.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



},250);



}

twemoji.parse(document.body);