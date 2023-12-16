const smallcups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const reamained = document.getElementById('reamained')


smallcups.forEach((cup , idx) => {

    cup.addEventListener('click' , () => highlightcups(idx))
});

function highlightcups(idx) {
   
    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full') ) {
    idx--
   }


    smallcups.forEach((cup , idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })


    updatebigcup()
}


function updatebigcup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallcups.length

    if(fullCups === 0 ) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0

    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups * 330}px`

    }

    percentage.innerText = `${fullCups/totalCups * 100} %`
   
    if(fullCups == totalCups) {
        reamained.style.visibility ='hidden'
        reamained.style.height = 0
    } else {
        reamained.style.visibility = 'visible'
        liters.innerText = `${2 - 250 * fullCups / 1000} L`
    } 
     
}