// ÉTAPE 1 : Sélection des éléments
const textarea  = document.querySelector('#note-textarea');
const textRender = document.querySelector('.textRender');

// ÉTAPE 2 : Chargement initial
const saved = localStorage.getItem('monSuperTexte');
textarea.value = saved ?? '';
if (textarea.value) {
    // textRender.textContent = textarea.value; //funciona também.
    textRender.innerText = localStorage.getItem('monSuperTexte');
}

// ÉTAPE 3 : Écoute + sauvegarde
textarea.addEventListener('keyup', () => {
    localStorage.setItem('monSuperTexte', textarea.value);
    // textRender.textContent = textarea.value; //funciona também.
    textRender.innerText = textarea.value;
});