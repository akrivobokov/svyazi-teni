
function show(id){
  document.querySelectorAll('section.landing').forEach(s=>s.classList.add('hidden'));
  const el=document.getElementById(id);
  if(el){el.classList.remove('hidden');window.scrollTo(0,0);}
}
function init(){
  let id=location.hash?location.hash.substring(1):'chapter1';
  show(id);
  document.querySelectorAll('.choice').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const tgt=e.target.dataset.target;
      if(tgt){
        history.replaceState(null,'','#'+tgt);
        show(tgt);
      }
    })
  });
}
window.addEventListener('DOMContentLoaded',init);
