const input = document.querySelector('input');
const btn = document.querySelector('.btn')
const output = document.querySelector('.output')
console.log(output);
var city;

btn.addEventListener('click' , () => {
  city = input.value 
   fetchData()
   
})


function fetchData() {
    fetch('cities.json')
    .then(response => response.json())
    .then(data => {
     //   console.log(data)
      data.forEach(data => {
        const cityData = data.data
        cityData.forEach(id => {
        //    console.log(id.name);
            if(id.id === city) {
             output.innerHTML = `<ul> 
                <li> Name : ${id.name}  
                <li> state id : ${id.stateId}  
                </ul>`               
            }
        })

        })
    })

}