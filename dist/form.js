const form = document.querySelector('#form');
const feedBack = document.querySelector('.feedback');



form.addEventListener('submit', e => {
  e.preventDefault();
  
  // validation
  const fullName = form.fullname.value
  const text = form.message.value
  const fullNamePattern = /^[A-Za-z]{6,20}$/;  
  if(fullNamePattern.test(fullName)){
    feedBack.textContent = `${fullName} is  valid`;
    feedBack.style.color = '#fff';
  } else {
    feedBack.textContent = `${fullName} is  inValid`
    feedBack.style.borderColor = '#fc0b03';
  }

    // set local storage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('text', text);
})

