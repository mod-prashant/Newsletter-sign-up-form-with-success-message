const form = document.getElementById('form');
const Dismiss = document.getElementById('Dismiss');
const form_popup = document.querySelector('.form-popup');
const success_popup = document.querySelector('.success-popup');

// prevent the default behaviour and retrieve data
function handleSubmit(e) {
  e.preventDefault();

  const data = {};
  const fields = e.target.querySelectorAll("input, select, textarea");

  for (const field of fields) {
    data[field.name] = field.value.trim();
  }

  subscribe(data);
}

// check input Switch popups
function subscribe(data) {
  const email = data.email;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    console.log("❌ Invalid email:", email);
    error_message();
    return;
  }
  else{
    console.log("✅ Valid email:", email);
    Assign_Email(email);
    switch_popup();
  }
}

function Assign_Email(email){
  const userEmail = success_popup.querySelector('.userEmail');
  userEmail.innerHTML=email;
}

function error_message(){
  const emailInput = form.querySelector('[name="email"]');
  const wrong = form.querySelector('.wrong');
  emailInput.focus();
  emailInput.classList.add('error');
  wrong.classList.add('show');
}

// switch popups
function switch_popup(){
    form_popup.classList.toggle('hide');
    success_popup.classList.toggle('show');
}

// Event Listeners
form.addEventListener('submit', handleSubmit);
Dismiss.addEventListener('click', switch_popup);