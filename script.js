function switchForm(targetForm) {
  const forms = document.querySelectorAll('.form-box');
  forms.forEach(form => form.classList.remove('active'));

  const selectedForm = document.getElementById(`${targetForm}-form`);
  if (selectedForm) {
    selectedForm.classList.add('active');
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function handleFormSubmit(event, successMessage) {
  event.preventDefault();
  showToast(successMessage);
  event.target.reset();
}