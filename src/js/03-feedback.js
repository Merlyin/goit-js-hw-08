import throttle from 'lodash.throttle';

const feedbackFormVal = document.querySelector('.feedback-form');
const emailInput = feedbackFormVal.querySelector('input[name="email"]');
const msgInput = feedbackFormVal.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  emailInput.value = savedData.email;
  msgInput.value = savedData.message;
}

const saveForm = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: msgInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}, 500);

feedbackFormVal.addEventListener('input', saveForm);

feedbackFormVal.addEventListener('submit', event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: msgInput.value,
  };
  console.log(state);
  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  msgInput.value = '';
});