const modal = document.querySelector('.modal')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const modalClose = document.querySelector('.modal__content--close')

let mostrarModal = () => {
  modal.classList.remove('hidden')
  modal.classList.add('visible')
}
let ocultarModal = () => {
  modal.classList.add('hidden')
  modal.classList.remove('visible')
}

button1.addEventListener('click', mostrarModal)

button2.addEventListener('click', mostrarModal)

button3.addEventListener('click', mostrarModal)

modalClose.addEventListener('click', ocultarModal)