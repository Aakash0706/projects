let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerX, playerO
const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7], 
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ]; 
  
  const resetButn = () =>{
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
  }
  
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turnO){
        box.innerText = "X";
        box.style.color = "black";
        turnO = false;
      }
      else{
        box.innerText = "O";
        box.style.color = "#b0413e";
        turnO = true;
      }
      box.disabled = true;
      checkWinner(); 
    });
  });
  const disableBtn = () =>{
    for(let box of boxes){
    box.disabled = true;  
    }
  }
  const enableBtn = () =>{
    for(let box of boxes){
    box.disabled = false; 
    box.innerText = "";
    }
  }
  //displays winner
  const showWinner = (winner) =>{
     msg.innerText = `Congrats, Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBtn();
  }
  //displays draw
  const showDraw = () =>{
     msg.innerText = 'Its a Draw';
     msgContainer.classList.remove("hide");
     disableBtn();
  }

  const checkWinner = () =>{
    for(let pattern of winPatterns){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      
      if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
          showWinner(pos1val);
          return;
        }
      }
    }
    checkDraw();
  };
  
  //check Draw
  const checkDraw = () =>{
    let count = 0;
    for(let box of boxes){
      if(box.innerText !==""){
        count++;
      }
    }
      if(count===9){
      showDraw();
    }
  };
  
  newBtn.addEventListener("click", resetButn);
  resetBtn.addEventListener("click", resetButn);
  
