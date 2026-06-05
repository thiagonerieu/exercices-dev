const input = document.querySelector('input');

input.addEventListener('focus', () => {
    input.style.backgroundColor = '#10b981';
    input.style.color = 'white';
});

input.addEventListener('blur', () => {
    input.style.backgroundColor = '';
});

//! Exercice DOM Events (mouseleave)
const h1Title = document.querySelector('#mouseEscroc');
// const mainContainer = document.querySelector('#mainContainer');
// let lesImagesFirst = document.querySelectorAll(`img`)[0];
// console.log(h3Title);

document.addEventListener('mouseleave',()=>{
    //? Comme vu pour les objets on peux accéder aux propriétés dans l'objet style de l'element 
    h1Title.style.display = 'block';
    h1Title.style.color = 'red';
    h1Title.style.backgroundColor = 'chartreuse';
    h1Title.innerText = 'Tu as gagné 1 millions de Dollars';
    h1Title.style.textAlign = 'center';
});

//!Exercice DOM Events (keyup)
const myInput = document.querySelector("#input-exercice-keyup");
const paragraphRender = document.querySelector('#renderKeyboard');
myInput.addEventListener('keypress',()=>{
    paragraphRender.innerText = myInput.value;
});

//!Exercice DOM Events (keyup pour bloquer un button)
const inputBlockButton = document.querySelector('#input-exercice-keyup-block-button');
const buttonBlockButton = document.querySelector('#button-exercice-keyup-block-button');

inputBlockButton.addEventListener('keyup',()=>{

    // ? Mode cond ternaires
    buttonBlockButton.disabled = inputBlockButton.value.length>=5 ? true : false;
    // ? Mode IF classique 
    // if(inputBlockButton.value.length>=5){
    //    buttonBlockButton.disabled = true;
    // }
    // else{
    //     buttonBlockButton.disabled = false
    // }
});

//!Exercice Modif DOM + setTimeout
setTimeout(()=>{
    document.body.style.backgroundColor = 'PaleTurquoise';
},3000);

//!Exercice setInterval
const buttonSetInterval = document.querySelector('#button-exercice-setInterval');
const timerTitle = document.querySelector('#timer-title');

buttonSetInterval.addEventListener('click',()=>{
    //Pour quand on reclick le bouton on remet le titre du timer à TIMER
    timerTitle.innerText = 'TIMER';
    let counter = 3;
    console.log('On démarre le Timer');
    const intervalID = setInterval(() => {
        
        if (counter > 0) {
            timerTitle.innerText = counter;
        }
        else{
            console.log('On arrête le Timer');
            timerTitle.innerText = "GO !";
            clearInterval(intervalID);
        }
        counter--;
    }, 1000);
});