const steps = Array.from(document.querySelectorAll('.step'));
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;

function updateUI(){
  steps.forEach((s, i) => {
    s.classList.remove('completed','current');
    s.setAttribute('aria-current','false');
    if(i < current) {
      s.classList.add('completed');
    } else if(i === current) {
      s.classList.add('current');
      s.setAttribute('aria-current','step');
    }
  });

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === steps.length - 1;
}

nextBtn.addEventListener('click', () => {
  if(current < steps.length - 1){
    current++;
    updateUI();
  }
});

prevBtn.addEventListener('click', () => {
  if(current > 0){
    current--;
    updateUI();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight') nextBtn.click();
  if(e.key === 'ArrowLeft') prevBtn.click();
});

updateUI();
