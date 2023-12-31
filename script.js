let slide=document.querySelector('.slide');
let upBtn=document.querySelector('.upBtn');
let downBtn=document.querySelector('.downBtn');

let x=0;
upBtn.onclick=()=>{
  if(x>"-780"){
   x=x-195;
   slide.style.top=x+"px";
  }

};
downBtn.onclick=()=>{
  if(x<"0"){
   x=x+195;
   slide.style.top=x+"px";
  }
}