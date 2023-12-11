const jockEl = document.getElementById('joke')
const jockBtn = document.getElementById('jokebtn')

jockBtn.addEventListener('click' , genrateJoke)

async function genrateJoke() {
     const consfig =   {
         headers : {
        'Accept' : 'application/json'
    }
}

   const res =  await fetch('https://icanhazdadjoke.com' , consfig)
    
  const data = await res.json();
  
  jockEl.innerHTML = data.joke
    
    
}

