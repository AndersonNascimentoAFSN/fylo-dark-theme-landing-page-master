const buttonSignUp = document.querySelector('.button-email-sign-up');
const inputSignUp = document.querySelector('#email').value;
const element = document.querySelector('.SignUpError');

const handleBtn = (e) => {
  const  er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
  if(inputSignUp === '' || !er.test(inputSignUp)){
    element.classList.add('error');
    e.preventDefault();
  }
  e.preventDefault();
}
buttonSignUp.addEventListener('click', handleBtn);