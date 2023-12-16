const counter = document.querySelectorAll('.counter')

counter.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText 

        const increament = target / 200

        console.log(increament)

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increament)}`
           setTimeout(updateCounter , 1)
    } else {
        counter.innerText = target;
    }

}


updateCounter()
})