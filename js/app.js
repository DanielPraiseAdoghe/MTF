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