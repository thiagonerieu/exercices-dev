//! Exercice au click sur des buttons on applique une classe CSS sur un titre
// ? On récupère dans des variables les élements sur lesquels on va travailler.
const secondTitle = document.querySelector('h1');
// console.log(secondTitle);

const allBtn = document.querySelectorAll('.btn-exo-classList');
// console.log(allBtn);
// console.log(allBtn[0]);
// console.log(allBtn[1]);
// console.log(allBtn[2]);

allBtn[0].addEventListener('click', () => {
    console.log('Click sur ADD');
    secondTitle.classList.add('especial')
});
allBtn[1].addEventListener('click', () => {
    console.log('Click sur REMOVE');
    secondTitle.classList.remove('especial')

});
allBtn[2].addEventListener('click', () => {
    console.log('Click sur TOGGLE');
    secondTitle.classList.toggle('especial')
});

//? Exemple ou l'on veut CAPTER un event
document.addEventListener('click', (clickEvent) => {
    console.log('coord X',clickEvent.pageX);
    console.log('coord Y',clickEvent.pageY);
    console.log('coord X',clickEvent.x);
    console.log('coord Y',clickEvent.y);
});





// const titre = document.querySelector('.titre');

// function ajouter() {
//     titre.classList.add('especial');
// }

// function supprimer() {
//     titre.classList.remove('especial');
// }

// function toggle() {
//     titre.classList.toggle('especial');
// }