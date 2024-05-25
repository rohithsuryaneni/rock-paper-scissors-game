
let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
}; 
updateScoreElement();

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('Scissors');
});

function playGame(playerMove)
{
computerMove= pinkComputerMove();
let result='';
if(playerMove==='Scissors')
{
  if(computerMove==='Rock')
  {
    result=' You lose.';
  }
  else if(computerMove==='Paper')
  {
    result=' You win.';
  }
  else if(computerMove==='Scissors')
  {
    result=' Tie.';
  }
}

else if(playerMove==='Paper')
{
  if(computerMove==='Rock')
  {
    result=' You win.';
  }
  else if(computerMove==='Paper')
  {
    result=' Tie.';
  }
  else if(computerMove==='Scissors')
  {
    result=' You lose.';
  }
}

else if(playerMove==='Rock')
{
  if(computerMove==='Rock')
  {
    result=' Tie.';
  }
  else if(computerMove==='Paper')
  {
    result=' You lose.';
  }
  else if(computerMove==='Scissors')
  {
    result=' You win.';
  }
}

if(result===' You win.')
{
  score.wins+=1;
}
else if(result===' You lose.')
{
  score.losses+=1;
}
else if(result===' Tie.')
{
  score.ties+=1;
}
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-move').innerHTML=`Your Move
  <img src="images/${playerMove}-emoji.png" class="move-icon">
     Computer Move 
  <img src="images/${computerMove}-emoji.png" class="move-icon">`;
}



function updateScoreElement()
{
document.querySelector('.js-score')
 .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}



function pinkComputerMove()
{
let computerMove='';
const rn=Math.random();
if(rn<1/3)
{
  computerMove='Rock';
}
else if(rn>=1/3 && rn<2/3)
{
  computerMove='Paper';
}
else if(rn>=2/3)
{
  computerMove='Scissors';
}
return computerMove
}

let isAutoPlaying=false;
let intervalID;


function autoPlay()
{
  if(!isAutoPlaying)
  {
    intervalID=setInterval(()=>{
      const playerMove=pinkComputerMove();
      playGame(playerMove);
    },2000);
    isAutoPlaying=true;
  }       
  else
  {
    clearInterval(intervalID);
    isAutoPlaying=false;
  }
}

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r')
  {
    playGame('Rock');
  }
  else if(event.key==='p')
  {
    playGame('Paper');
  }
  else if(event.key==='s')
  {
    playGame('Scissors');
  }
});