const btnCatalog = document.querySelectorAll('.nav__list-item')
const catalog = document.querySelector('.catalog')
const catalogBack = document.querySelector('.catalog__btn-back')

btnCatalog[0].onclick = () => catalog.classList.add('catalog--active')

catalogBack.onclick = () => catalog.classList.remove('catalog--active')

//----------------------------

const icons = document.querySelectorAll('.header__box-img')
const modalWindow = document.querySelector('.modal')
const modalClosed = document.querySelector('.modal__closed')
const modalBox = document.querySelector('.modal__box')
const modalButtons = document.querySelectorAll('.modal__box-btn')
const formLogin = document.querySelector('.form-login')
const formRegistration = document.querySelector('.form-registration')
const modalRestoration = document.querySelector('.modal__restoration')
const formLink = document.querySelector('.form__link')

icons[2].addEventListener('click', () => {
  modalWindow.style.display = 'flex'
  document.body.style.overflow = 'hidden'
})

modalClosed.addEventListener('click', () => {
  modalWindow.style.display = 'none'
  document.body.style.overflow = 'auto'
  modalRestoration.style.display = 'none'
  modalBox.style.display = 'block'
})

modalButtons[0].addEventListener('click', () => {
  modalButtons[0].classList.add('button-active')
  modalButtons[1].classList.remove('button-active')
  formRegistration.style.display = 'none'
  formLogin.style.display = 'flex'
})

modalButtons[1].addEventListener('click', () => {
  modalButtons[0].classList.remove('button-active')
  modalButtons[1].classList.add('button-active')
  formLogin.style.display = 'none'
  formRegistration.style.display = 'flex'
})

formLink.addEventListener('click', () => {
  modalBox.style.display = 'none'
  modalRestoration.style.display = 'block'
})

// --------------Slider-----------------
const sliderNumber = document.querySelectorAll('.slider__list-number')
const sliderImg = document.querySelector('.slider-img')

let indexSlider = 1
setInterval(function () {
  sliderNumber.forEach((el) => {
    if (el.classList.contains('number-active')) {
      el.classList.remove('number-active')
    }
  })
  
  if (sliderNumber.length <= indexSlider) {
    indexSlider = 0
    sliderImg.setAttribute('src', `./img/top/slider-0${indexSlider + 1}.png`)
    sliderNumber[indexSlider].classList.add('number-active')
  } else {
    sliderNumber[indexSlider].classList.add('number-active')
    sliderImg.setAttribute('src', `./img/top/slider-0${indexSlider + 1}.png`)
    indexSlider++
  }
}, 5000)
