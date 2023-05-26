const form = document.querySelector('#form');
const feedBack = document.querySelector('.feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // validation
  const fullName = form.fullname.value;
  const fullNamePattern = /^[A-Za-z]{6,20}$/;
  if (fullNamePattern.test(fullName)) {
    feedBack.textContent = `${fullName} is  valid`;
    feedBack.style.color = '#fff';
  } else {
    feedBack.textContent = `${fullName} is  inValid`;
    form.fullname.style.border = '1px solid red';
    feedBack.style.color = 'red';
  }
});

// Local Storage
const inputs = form.querySelectorAll('input, textarea');
const storageKey = 'contactForm';

let formData = {
  name: '',
  email: '',
  message: '',
};

// form input localStorage
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    formData[input.name] = input.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
  });
});

// Load formData
const storedData = JSON.parse(localStorage.getItem(storageKey));

if (storedData) {
  formData = storedData;
  inputs.forEach((input) => {
    input.value = formData[input.name] || '';
  });
}