// Yael
const form = document.querySelector('#chat-form');
const status = document.querySelector('#status');
const field = document.querySelector('#message');
const suggestions = document.querySelector('#suggestions');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Interface prête.';
});

suggestions.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) {
    return;
  }
  field.value = button.textContent;
  field.focus();
  status.textContent = 'Question copiée : modifiez-la ou envoyez-la.';
  
  // Nicolas
const form = document.querySelector("#chat-form");
const status = document.querySelector("#status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Interface prête.";
});
