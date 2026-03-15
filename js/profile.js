const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const kid = kids.find(k => k.id == id);

const container = document.getElementById("profileContainer");

container.innerHTML = `

<div class="profile-card">

<img src="${kid.img}" class="profile-img">

<h1>${kid.name}</h1>

<p class="country">${kid.flag} ${kid.country}</p>

<p class="bio">${kid.bio}</p>

<div class="profile-stats">

<span>Age: ${kid.age}</span>
<span>Projects: ${kid.projects}</span>
<span>⭐ ${kid.rating}</span>

</div>

<h3>Skills</h3>

<div class="skills">

${kid.skills.map(skill=>`<span>${skill}</span>`).join("")}

</div>

<h3>Interests</h3>

<ul>

${kid.interests.map(i=>`<li>${i}</li>`).join("")}

</ul>

<h3>Achievements</h3>

<ul>

${kid.achievements.map(a=>`<li>${a}</li>`).join("")}

</ul>

<a href="kids.html" class="btn-primary">Back to Tech Kids</a>

</div>

`