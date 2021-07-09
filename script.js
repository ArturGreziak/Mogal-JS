const buton = document.querySelector('.buton');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', () => {
  modal.classList.add('show')
})

buton.addEventListener('click', () => {
  modal.classList.remove('show')
})