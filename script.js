const games = [
  {
    title:"HITMAN 1",
    series:"HITMAN",
    genre:"Action / Stealth",
    image:"images/hitman-1.svg",
    min:"Windows 10 64-bit • Core i5-2500K / Phenom II X4 940 • 8 GB RAM • GTX 660 / Radeon HD 7870 • 60 GB",
    rec:"Windows 10 64-bit • Core i7-4790 • 16 GB RAM • GTX 1070 / RX Vega 56 8GB • 60 GB"
  },
  {
    title:"HITMAN 2",
    series:"HITMAN",
    genre:"Action / Stealth",
    image:"images/hitman-2.svg",
    min:"Windows 10 64-bit • Core i5-2500K / Phenom II X4 940 • 8 GB RAM • GTX 660 / Radeon HD 7870 • 60 GB",
    rec:"Windows 10 64-bit • Core i7-4790 • 16 GB RAM • GTX 1070 / RX Vega 56 8GB • 60 GB"
  },
  {
    title:"HITMAN 3",
    series:"HITMAN",
    genre:"Action / Stealth",
    image:"images/hitman-3.svg",
    min:"Windows 10 64-bit • Core i5-2500K / Phenom II X4 940 • 8 GB RAM • GTX 660 / Radeon HD 7870 • 60 GB",
    rec:"Windows 10 64-bit • Core i7-4790 • 16 GB RAM • GTX 1070 / RX Vega 56 8GB • 60 GB"
  },
  {
    title:"GTA V",
    series:"Grand Theft Auto",
    genre:"Open World / Action",
    image:"images/gta-v.svg",
    min:"Windows 10 64-bit • Core i7-4770 / FX-9590 • 8 GB RAM • GTX 1630 4GB / RX 6400 4GB • 105 GB SSD",
    rec:"Windows 11 • Core i5-9600K / Ryzen 5 3600 • 16 GB RAM • RTX 3060 8GB / RX 6600 XT 8GB • 105 GB"
  },
  {
    title:"Need for Speed Heat",
    series:"Need for Speed",
    genre:"Racing",
    image:"images/nfs-heat.svg",
    min:"Windows 10 • Core i5-3570 / FX-6350 • 8 GB RAM • GTX 760 / R9 280X • 50 GB",
    rec:"Windows 10 • Core i7-4790 / Ryzen 3 1300X • 16 GB RAM • GTX 1060 / RX 480 • 50 GB"
  },
  {
    title:"Assassin's Creed Origins",
    series:"Assassin's Creed",
    genre:"Action / Adventure",
    image:"images/ac-origins.svg",
    min:"Windows 10 64-bit • Core i5-2400S / FX-6350 • 6 GB RAM • GTX 660 2GB / R9 270 2GB • 42 GB",
    rec:"Windows 10 64-bit • Core i7-3770 / FX-8350 • 8 GB RAM • GTX 760 4GB / R9 280X 3GB • 42 GB"
  },
  {
    title:"Red Dead Redemption 2",
    series:"Red Dead",
    genre:"Open World / Action",
    image:"images/rdr2.svg",
    min:"Windows 10 64-bit • Core i5-2500K / FX-6300 • 8 GB RAM • GTX 770 2GB / R9 280 3GB • 150 GB",
    rec:"Windows 10 64-bit • Core i7-4770K / Ryzen 5 1500X • 12 GB RAM • GTX 1060 6GB / RX 480 4GB • 150 GB"
  },
  {
    title:"Cyberpunk 2077",
    series:"Cyberpunk",
    genre:"RPG / Open World",
    image:"images/cyberpunk-2077.svg",
    min:"Windows 10 64-bit • Core i7-6700 / Ryzen 5 1600 • 12 GB RAM • GTX 1060 6GB / RX 580 8GB / Arc A380 • 70 GB SSD",
    rec:"Windows 10 64-bit • Core i7-12700 / Ryzen 7 7800X3D • 16 GB RAM • RTX 2060 Super / RX 5700 XT / Arc A770 • 70 GB SSD"
  },
  {
    title:"Far Cry 5",
    series:"Far Cry",
    genre:"Action / Open World",
    image:"images/far-cry-5.svg",
    min:"Windows 10 64-bit • Core i5-2400 / FX-6300 • 8 GB RAM • GTX 670 2GB / R9 270 2GB • 40 GB",
    rec:"Windows 10 64-bit • Core i7-4770 / Ryzen 5 1600 • 8 GB RAM • GTX 970 4GB / R9 290X 4GB • 40 GB"
  },
  {
    title:"Watch Dogs 2",
    series:"Watch Dogs",
    genre:"Action / Open World",
    image:"images/watch-dogs-2.svg",
    min:"Windows 7/8.1/10 64-bit • Core i5-2400S / FX-6120 • 6 GB RAM • GTX 660 2GB / HD 7870 2GB • 50 GB",
    rec:"Windows 7/8.1/10 64-bit • Core i5-3470 / FX-8120 • 8 GB RAM • GTX 780/970/1060 or R9 290 • 50 GB"
  }
];

const grid=document.getElementById("gameGrid");
const search=document.getElementById("search");
const empty=document.getElementById("empty");
let active="All";

function render(){
  const q=search.value.toLowerCase().trim();
  const list=games.filter(g=>
    (active==="All"||g.series===active) &&
    (g.title+" "+g.series+" "+g.genre).toLowerCase().includes(q)
  );
  grid.innerHTML=list.map((g,i)=>`
    <article class="game-card game-item">
      <div class="game-cover"><img src="${g.image}" alt="${g.title}"></div>
      <div class="game-info">
        <div class="game-series">${g.series}</div>
        <h3>${g.title}</h3>
        <div class="meta">${g.genre}</div>
        <button class="requirements" onclick="openRequirements(${i})">System Requirements</button>
      </div>
    </article>`).join("");
  empty.style.display=list.length?"none":"block";
}

function openRequirements(i){
  const g=games[i];
  document.getElementById("reqTitle").textContent=g.title;
  document.getElementById("reqGenre").textContent=g.genre;
  document.getElementById("reqMin").textContent=g.min;
  document.getElementById("reqRec").textContent=g.rec;
  document.getElementById("requirementsModal").style.display="flex";
}
function closeRequirements(){
  document.getElementById("requirementsModal").style.display="none";
}

document.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  active=b.dataset.category;
  render();
}));
search.addEventListener("input",render);
window.addEventListener("click",e=>{
  if(e.target===document.getElementById("requirementsModal")) closeRequirements();
});
document.getElementById("year").textContent=new Date().getFullYear();
render();
