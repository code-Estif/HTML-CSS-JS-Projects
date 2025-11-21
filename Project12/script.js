const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollBtn = document.getElementById("rollBtn");
const result = document.getElementById("result");

function rollDice(){
  const d1 = Math.floor(Math.random()*6)+1;
  const d2 = Math.floor(Math.random()*6)+1;

  dice1.src = `dice${d1}.png`;
  dice2.src = `dice${d2}.png`;

  if(d1 > d2) result.textContent = `Dice 1 Wins! (${d1} vs ${d2})`;
  else if(d2 > d1) result.textContent = `Dice 2 Wins! (${d1} vs ${d2})`;
  else result.textContent = `It's a Tie! (${d1} vs ${d2})`;
}

rollBtn.addEventListener("click", rollDice);
