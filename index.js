const url = 'https://acnhapi.com/v1a/villagers/'
const btn = document.querySelector('#btn')
const villagerImg = document.querySelector('#villagerImg')
const villagerName = document.querySelector('#villagerName')
const villagerSpecies = document.querySelector('#species')
const villagerPersonality = document.querySelector('#personality')
const villagerSaying = document.querySelector('#saying')
const villagerBirthday = document.querySelector('#birthday')
//count to keep track of how many times button has been clicked
let count = 0;
let dataObj
if(count === 0){
    btn.addEventListener('click', getCharacterFirst)
}else {
    btn.addEventListener('click', changeCardInfo)
}

function getCharacterFirst(){
        fetch(url)
        .then(res => res.json())
        .then( data => {
                btn.classList.remove('fixed')
                dataObj = data
                changeCardInfo()
        })
    }   
function changeCardInfo(){
    let random = Math.floor(Math.random() * 391)
    document.querySelector('#card').classList.remove('hidden')
        if (document.querySelector('span')){
            document.querySelector('.spec').remove()
            document.querySelector('.pers').remove()
        } 
        villagerImg.src = dataObj[random].image_uri
        villagerName.innerText = dataObj[random].name['name-USen']
        let span1 = document.createElement('span')
        span1.classList.add('spec')
        villagerSpecies.appendChild(span1)
        span1.innerHTML = dataObj[random].species 
        let span2 = document.createElement('span')
        span2.classList.add('pers')
        villagerPersonality.appendChild(span2)
        span2.innerHTML = dataObj[random].personality 
        villagerSaying.innerText =  dataObj[random].saying
        villagerBirthday.innerText =  dataObj[random]['birthday-string']
        count++    
}
