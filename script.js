const panels = document.querySelectorAll('.pannel')
console.log(panels);

panels.forEach((panels) => {
  panels.addEventListener('click', () => {
    removeActiveClases()
    panels.classList.add('active')

  })
})

function removeActiveClases() {
    panels.forEach(panels => {
        panels.classList.remove('active')
    })
}

