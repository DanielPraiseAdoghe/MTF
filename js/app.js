const grid = document.getElementById("kidsGrid");

if(grid){

kids.forEach(kid=>{

grid.innerHTML += `

<a href="profile.html?id=${kid.id}" class="card">

<img src="${kid.img}">

<div class="card-body">

<h3>${kid.name}</h3>

<p>${kid.flag} ${kid.country}</p>

<p>Age: ${kid.age}</p>

<div class="skills">

${kid.skills.map(skill=>`<span>${skill}</span>`).join("")}

</div>

</div>

</a>

`

});

}



/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if(menuBtn){

menuBtn.onclick=()=>{

nav.classList.toggle("active");

};

}



/* SEARCH */

const search = document.getElementById("search");

if(search){

search.addEventListener("input",()=>{

const value = search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const name = card.innerText.toLowerCase();

card.style.display = name.includes(value) ? "block":"none";

});

});

}
/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);



const buttons = document.querySelectorAll("button, .btn-primary");

buttons.forEach(btn => {

btn.addEventListener("click", function(e){

const circle = document.createElement("span");

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});