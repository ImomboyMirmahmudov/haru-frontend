var over = document.querySelector('.div')
var body = document.querySelector('.body')
let s = document.querySelector('#soma').addEventListener('click', function(){
    setTimeout(() => {
        over.style.display = 'block'
    }, 400);
    over.style.position = 'fixed'
    body.style.position = 'relative'
})

let line = document.querySelector('#none').addEventListener('click', function() {
    setTimeout(() => {
        over.style.display = 'none'
    }, 400);
})

var likeBtn = document.querySelector('.like-btn')
var likeIcon = document.querySelector('#icon')
var likeCount = document.querySelector('#count')

let clikced = false
likeBtn.addEventListener('click', ()=>{
    if (!clikced){
        clikced = true
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`
        likeCount.textContent++
    }
    else{
        clikced = false
        likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`
        likeCount.textContent--
    }
})
