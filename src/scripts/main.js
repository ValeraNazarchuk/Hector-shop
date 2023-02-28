const btnCatalog = document.querySelectorAll('.nav__list-item')
const linkCatalog = document.querySelector('.nav__item-link')
const catalog = document.querySelector('.catalog')
const arrowCatalog = document.querySelector('.nav__item-arrow')

btnCatalog.forEach(button => [
  button.addEventListener('click', (e) => {
    if (e.target.textContent !== 'КАТАЛОГ' ) {
      return
    }
    
    if (!e.target.classList.contains('.link--active')) {
      catalog.classList.toggle('catalog--active')
      linkCatalog.classList.toggle('link--active')
      arrowCatalog.classList.toggle('arrow--active')
    }
  })
])