let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(!started){
        console.log("game is started")
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}

  function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random buttom choose
  let randIdx=Math.floor(Math.random()*4);
  let randColor=btns[randIdx];
  let randBtn=document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
    gameFlash(randBtn); 
  }
  function checkAns(idx){
    // console.log("curr level :",level);
    // let idx=userSeq.length - 1;
    if(userSeq[idx]===gameSeq[idx]){
      // console.log("same value");
      if(userSeq.length===gameSeq.length){
         setTimeout(levelUp,1000);
      }

    }
    else{
      h2.innerHTML=`Game Over! Your Score Was <b>${level}</b> <br> press any key to start.`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
    }
  }
  function btnPress(){
    // console.log(this);
    let btn=this;

    userFlash(btn);
   let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
  }
  let allBtns=document.querySelectorAll(".btn");
  for(let btn of allBtns){
btn.addEventListener("click",btnPress);
  }
  function reset(){
started=false;
gameSeq=[];
userSeq=[];
level=0;
  }