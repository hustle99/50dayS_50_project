const tagsEl   = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup' , (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter' ) {
     setTimeout(() => {
        e.target.value = ''
     },10)

        randomSelect()
    }
})


function createTags(input) {
   const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
   tagsEl.innerHTML=''
   tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerHTML = tag
    tagsEl.appendChild(tagEl)
    
   });
}


function randomSelect() {
    const times = 30 

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
     //   console.log(randomTag)
        highlight(randomTag)
    
     setTimeout(() =>{
        unhighligh(randomTag)
    },100)  

    }, 100);

    setTimeout(() => {
       clearInterval(interval)
       setTimeout(() => {
        const randomTag = pickRandomTag()
        highlight(randomTag)
       }, 100);
    },times * 100)
    
}


function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    const randomIndex = Math.floor(Math.random() * tags.length);
    const randomTag = tags[randomIndex];
   // console.log(randomTag);
    return randomTag;
}


function highlight(tag) {
    tag.classList.add('hightlight')
}


function unhighligh(tag) {
    tag.classList.remove('hightlight')
}