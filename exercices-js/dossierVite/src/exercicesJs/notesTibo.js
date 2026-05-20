const notesTibo = [0, 3, 4, 6, 18, 19, 4];

// FONCTION CALCULER MOYENNE
function calculerMoyenne(notes) {
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
    // somme = somme + notes[i];
    somme += notes[i];//une manière plus concise d'effectuer le même calcul
    }
    return somme / notes.length;
    
}

// AFFICHAGE
const resultat = calculerMoyenne(notesTibo).toFixed(2);
console.log(`La moyenne des notes de Tibo est : ${resultat}`);
// La moyenne des notes de Tibo est : 7.71




//! EXO 7 - IF ELSE
// TODO: Créer une fonction reçoit un tableau de notes et qui calcule une moyenne de ces notes
// TODO: Dans cette ƒ°, SI la moyenne est suppérieur ou égale à 15 on renvoi une string (très Bien) 
// TODO: Dans cette ƒ°, SINON SI la moyenne est suppérieur ou égale à 10 on renvoi une string (assez Bien) 
// TODO: Dans cette ƒ°, SINON renvoi une string (refus)