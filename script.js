const form = document.querySelector('#search')
const list = [...document.querySelector('article').querySelectorAll('p')]

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const arr = list.filter((el) => {
    if (el.innerText.toLowerCase().includes(form.q.value.toLowerCase())) {
      return el
    }
  })

  if (arr) {
    arr[0].scrollIntoView({ behavior: 'smooth' })
    arr[0].style.background = 'yellow'
    setTimeout(() => {
      arr[0].style.background = 'none'
    }, 1000)
  }
})
