const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const submitButton = document.querySelector('.btn-submit');
const streamCount = document.getElementById('streamCount')
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');
console.log(steps.length);
let active = 4;

streamCount.addEventListener('click', () => {
  console.log("hello");
})
nextButton.addEventListener('click', () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
})

prevButton.addEventListener('click', () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
})
submitButton.addEventListener('click', () =>{
  print();
})

const updateProgress = () => {
  console.log('steps.length =>' + steps.length);
  console.log('active =>' + active);
  for (let i = 0; i < active; i++){
    steps[i].classList.add('behindactive');
    form_steps[i].classList.add('behindactive')
  }
  for(let i = active; i < steps.length; i++){
    steps[i].classList.remove('behindactive');
    form_steps[i].classList.remove('behindactive')
  }

  //toggle active class for each list item
  steps.forEach((steps, i) => {

    if (i == (active - 1)) {
      steps.classList.add('active');
      form_steps[i].classList.add('active');
      console.log('i =>' + i);
    } else {
      steps.classList.remove('active');
     
      form_steps[i].classList.remove('active');
      
      console.log('i =>' + i);
    }
  });
  console.log('active for buttons' + active);
  //enable or disable prev and next buttons
  if (active === 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  }

  if (active === steps.length) {
    nextButton.disabled = true;
    prevButton.disabled = false;
  }
  else {
    console.log("all buttons are enabled")
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
updateProgress();