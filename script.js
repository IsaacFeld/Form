const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const submitButton = document.querySelector('.btn-submit');
const streamCount = document.getElementById('streamCount')
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');
const forgot = document.getElementById('forgot');
const stepbtns = document.querySelectorAll('.btn-steps');
maxStreams = 0;
maxStreamsInt = 0;
let active = 4;
for(let i = 0; i < 7; i++){
  stepbtns[i].addEventListener('click', () => {
    updateProgress();
    if(i == 6 && noAccessToStream == true){
      console.log("hello i got here");
    }
    else{
      active = i+1;
      updateProgress();
    }
    
  })
}

streamCount.addEventListener('click', () => {
  
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
function isNumber(value){
  return typeof value === 'number';
  
}
function checkSubmit(){
  if(submitButton.disabled == true){
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
  else{
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  }
}
const updateProgress = () => {
  forgot.style.display = "none";
  maxStreamsInt = parseInt(streamCount.value)
  if(isNaN(maxStreamsInt)){
    console.log("noaccess");
    maxStreamsInt = 0;
    noAccessToStream = true;
  }
  else{
    noAccessToStream = false;
  }
  

  
 // console.log('steps.length =>' + steps.length);
  //console.log('active => ' + active);
  if(active == 6){
      maxStreams = 6 + maxStreamsInt;
  }
  if(active == 7){
    maxStreams = 6 + maxStreamsInt;
  }
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
      //console.log('i =>' + i);
    } else {
      steps.classList.remove('active');
     
      form_steps[i].classList.remove('active');
      
     // console.log('i =>' + i);
    }
  });
  //enable or disable prev and next buttons
  if (active === 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
    submitButton.disabled = true;
    
  }

  if (active === maxStreams) {
    if(active == 6){
      forgot.style.display = "inline-block";
    }
    
    nextButton.disabled = true;
    prevButton.disabled = false;
    submitButton.disabled = false;
  }
  else {
    submitButton.disabled = true;
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
  checkSubmit();
}
updateProgress();