const header = document.querySelector('.header')
const navItem = document.querySelectorAll('.nav__list-item')
const navLink = document.querySelectorAll('.nav__item-link')
const headerIcon = document.querySelectorAll('.header__box-icon')
const catalog = document.querySelector('.catalog')
const clients = document.querySelector('.nav__clients-list')
const headerLogo = document.querySelector('.header__logo > img')

// Собитія для кнопки 'Каталог'
navItem[0].addEventListener('mouseenter', () => {
  // поява блоку каталог на екрані
  catalog.style.display = 'block'

  // заміна фону для header
  header.style.backgroundColor = 'white'

  // функція для додавання класу кожному елементу
  addClass(navLink, 'text--black')
  addClass(headerIcon, 'text--black')

  // стилі кнопки каталога коли вона активна
  navLink[0].classList.add('button--active')

  // заміна лого на темне
  headerLogo.setAttribute('src', './img/header/logoBlack.svg')
})

navItem[0].addEventListener('mouseleave', () => {
  catalog.style.display = 'none'
  header.style.backgroundColor = 'transparent'
  removedClass(navLink, 'text--black')
  removedClass(headerIcon, 'text--black')
  navLink[0].classList.remove('button--active')
  headerLogo.setAttribute('src', './img/header/logoWhite.svg')
})

// функція для додавання класу
function addClass(block, property) {
  for(let i = 0; i < block.length; i++){
    block[i].classList.add(property)
  }
}

// функція для видалення класу
function removedClass(block, property) {
  for (let i = 0; i < block.length; i++) {
    block[i].classList.remove(property)
  }
}

// собитія для кнопки 'клієнтам'
navItem[1].addEventListener('mouseenter', () => {
  // поява блоку
  clients.style.display = 'flex'

  // стилі кнопки 'клієнтам' коли вона активна
  navLink[1].classList.add('button--active')
})

navItem[1].addEventListener('mouseleave', () => {
  clients.style.display = 'none'
  navLink[1].classList.remove('button--active')
})

//-------------CATALOG-------------

const catalogMenuBtn = document.querySelectorAll('.catalog__menu-link')
const catalogBox = document.querySelectorAll('.catalog__body-box')

// наклаю собитія на кожну кнопку
catalogMenuBtn.forEach((button, index) => {
  button.addEventListener('mouseenter', (e) => {
    if (!e.target.classList.contains('active-catalog__menu')) {
      // прохожусь по всих елементам і удаляю їх
      catalogMenuBtn.forEach((el, indexEl) => {
        el.classList.remove('active-catalog__menu')
        catalogBox[indexEl].style.display = 'none'
      })

      // для потрібних елементів додаю клас/стиль
      e.target.classList.add('active-catalog__menu')
      catalogBox[index].style.display = 'flex'
    }
  })
})

//-----------------MODAL-USER----------

const userBtn = document.querySelectorAll('.header__list-item')[2]
const modalWindow = document.querySelector('.modalUser')
const modalClosed = document.querySelector('.modalUser__closed')
const modalBox = document.querySelector('.modalUser__box')
const modalButtons = document.querySelectorAll('.modalUser__box-btn')
const formLogin = document.querySelector('.form-login')
const formRegistration = document.querySelector('.form-registration')
const modalRestoration = document.querySelector('.modal__restoration')
const formLink = document.querySelector('.form__link')



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
// const sliderNumber = document.querySelectorAll('.slider__list-number')
// const sliderImg = document.querySelector('.slider-img')

// let indexSlider = 1
// setInterval(function () {
//   sliderNumber.forEach((el) => {
//     if (el.classList.contains('number-active')) {
//       el.classList.remove('number-active')
//     }
//   })
  
//   if (sliderNumber.length <= indexSlider) {
//     indexSlider = 0
//     sliderImg.setAttribute('src', `./img/top/slider-0${indexSlider + 1}.png`)
//     sliderNumber[indexSlider].classList.add('number-active')
//   } else {
//     sliderNumber[indexSlider].classList.add('number-active')
//     sliderImg.setAttribute('src', `./img/top/slider-0${indexSlider + 1}.png`)
//     indexSlider++
//   }
// }, 5000)
