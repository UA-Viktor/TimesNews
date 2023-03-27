const menuBtn = document.querySelector('.button-menu');
const menuModal = document.querySelector('.modal');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-open');
  menuModal.classList.toggle('is-hidden');
});
