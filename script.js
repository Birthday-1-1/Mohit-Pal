const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.toggle('active',s.id===id||(id==='hero'&&s.classList.contains('hero'))));scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>show(b.dataset.next));
document.querySelectorAll('.reason').forEach(b=>b.onclick=()=>document.getElementById('reasonText').textContent=b.dataset.text);
document.getElementById('replay').onclick=()=>show('hero');
const box=document.getElementById('lightbox'),zoom=document.getElementById('zoom');
document.querySelectorAll('.gallery img').forEach(i=>i.onclick=()=>{zoom.src=i.src;box.classList.add('show')});
document.querySelector('.close').onclick=()=>box.classList.remove('show');
box.onclick=e=>{if(e.target===box)box.classList.remove('show')};
const h=document.querySelector('.hearts');for(let i=0;i<12;i++){let s=document.createElement('span');s.textContent='♥';s.style.cssText=`position:fixed;left:${Math.random()*100}%;bottom:-30px;color:#f0b6c8;opacity:.25;animation:float ${7+Math.random()*6}s linear ${Math.random()*8}s infinite;pointer-events:none`;h.appendChild(s)}
const st=document.createElement('style');st.textContent='@keyframes float{to{transform:translateY(-115vh) rotate(20deg);opacity:0}}';document.head.appendChild(st);