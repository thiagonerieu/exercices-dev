console.log("Hello World dans la console");

/**
 * **************************************  * 3-CALCULS
 * **************************************  */
console.log(42*675);

let unChiffre = 9;
let unNombre = 33; 
console.log(unChiffre*unNombre); 
console.log(2,9+1,3); 
console.log(2.9+1.3);
console.log((1+1)-(2*3)/2); 
console.log(10%2);

let unCompteur = 0; 
console.log(unCompteur+1); 
unCompteur = 0;
unCompteur = unCompteur+1; 
console.log(unCompteur); 
unCompteur = 0;
//* unCompteur = unCompteur + 1 unCompteur +=1; console.log(unCompteur); unCompteur = 0;
//* unCompteur + 1
unCompteur ++; console.log(unCompteur);
//* unCompteur - 1
unCompteur --; console.log(unCompteur);
//* unCompteur = unCompteur + 10 unCompteur +=10; console.log(unCompteur);
//* unCompteur = unCompteur x 10 unCompteur *=10; console.log(unCompteur);
//* unCompteur = unCompteur / 10 unCompteur /=10; console.log(unCompteur);
//* unChiffre puissance 9 console.log(unChiffre**9);

/**
 * **************************************
 * 4-STRINGS
 * **************************************
 */
let bonjour = 'Bonjour';
let unMessage = "Bienvenue";
let welcome = `Bienvenue`;
console.log(bonjour,unMessage);
let unTexte = "Bonjour \"MR Gingle\"";
let unTxt = 'aujourd\'hui';
console.log(unTexte,unTxt);
let concatenation = bonjour + " et " + unMessage +', il fait beau temps ' + unTxt; console.log(concatenation);
let uneTemplateString = `Hello ! ${bonjour} et ${unMessage} on retourne à la "ligne" plus besoin des 'antislash'`; 
console.log(uneTemplateString);

/**
 * **************************************
 * 5-ARRAYS
 * **************************************
 */
let prenom = 'JoSé';
let age = 45;
//! On déclare un tableau avec cette syntaxe : [] //! On peut placer ce que l'on veut dans un tableau 
let unTableau = [12,'Salut ca va bien?',prenom,age]; 
console.log(unTableau);
console.log(unTableau[2]);
//! Exemple avec un tableau dans un tableau 
let mesPassions = ["Boxe","Jonquilles"];
let monPerso = [prenom, age, mesPassions];
//! Avec le système d'index / indice on peut accéder //! au contenu d'une case du tableau.
//! La 1ère case du tableau est à l'indice 0. console.log(monPerso[2]);
console.log(monPerso[2][1]);
monPerso[0] = 23;
monPerso[1] = 'YOLO';
monPerso[2][1] = 'COOL';
console.log(monPerso);
//! On peut utiliser la propriété length, //! .length sur le tableau en lui même 
//! nous renvoi le nombre de case du tableau console.log(monPerso.length);
//! .length sur une case précise du tableau console.log(monPerso[2].length);
let mesNombres = [100,200,300];

let testTabAjout = [10,10,10];
console.log('Avant Ajout :',testTabAjout);
testTabAjout.push('Cortex',92,'Les Pyramides');
console.log('Après Ajout : ',testTabAjout);

// pop pour suppr le dernier element du tableau testTabAjout.pop();
console.log('suppression : ',testTabAjout);

let leNom = 'Garcia';
let lePrenom = 'José';
let initiales = lePrenom[0] + leNom[0]; let laPhrase = [];
laPhrase.push(leNom,lePrenom,initiales)
console.log(laPhrase);

function maSuperFonction(){ 
    console.log('Hello World'); 
    console.log(22+33);
}

//! Détailler la fonction OK, mais ne pas oublier
//! d'exécuter au moins une fois dans le programme cette fonction 
maSuperFonction();

//! Certaines fonction ont besoin de prendre un paramètre ici num
//! Pas besoin de déclarer le paramètre, il sera défini à l'utilisation de //! la fonction
function fonctionAvecParametre(num){
    console.log('Hello World');
    console.log(22+num);
}

//! Ici notre paramètre num aura pour valeur 9 
fonctionAvecParametre(9);

function fonctionUn(unTruc){
    console.log(33+unTruc); 
}
fonctionUn(7);

function fonctionDeux(unTruc,unBidule){
    console.log(unBidule+unTruc);
}
fonctionDeux(10,88);

//! Dans certains cas une fonction doit pouvoir retourner quelquechose
//! le résultat d'un calcul par exemple
//! Ci-dessous on fait une fonction de calcul, notre fonction ne fait que ca //! Elle se charge JUSTE de faire un calcul
//! L'affichage du résultat se fera en dehors de la fonction 
function calculReturn(unNombre, unAutreNombre){
return unNombre + unAutreNombre
}

//! Ici le calcul qui est return par la fonction est stocké dans une variable //! resultat
let resultat = calculReturn(22,99); console.log(resultat);
// ou executer la fonction quand on a besoin console.log('Le résultat : ', calculReturn(22,99));

//** Bonne Pratique : paramètre par défaut 
function fonctionAvecParametre(num=0){
console.log(22+num); 
}

let testScope1 = 99;
function maFonctionTestScope(){
let testScope1 = 12;
console.log('scope de la fonction :',testScope1); };
maFonctionTestScope();
console.log('scope hors de la fonction :',testScope1);

//TODO : Pourquoi ca beug ?
// function buggyFunction() {
//     let wtf = 9;
//     console.log(wtf);
// }

// buggyFunction(); 
// console.log(wtf);


//TODO : Pourquoi ca beug / Pourquoi ca marche pas ? let something = 44;
// function functionBugParent() {
//     let something = 9; 
//     console.log(something); 
//     console.log(lesNews);
//     function functionBugEnfant() { 
//         let lesNews = `il est 99h67`;
//     }
// };
// functionBugParent(); 
// console.log(something);

let noteSport = 8;
let notePhilo = 2;
let laMoyenne = moyenne2notes(notePhilo,noteSport);
// On peut executer la ƒ° AVANT de la définir (pas d'ordre pour décrire les fonctions)
function moyenne2notes(a,b){
    return (a+b)/2;
};
console.log('La moyenne des 2 notes : ',laMoyenne);

/**
 * **************************************
 * 7- Les opérateurs
 * **************************************
 */
//! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
let a = 11;
let b = 99;
console.log("variable a:",a);
console.log("variable b:",b);
//! avec == on demande si a est égal à b
console.log("c'est égal ? :",a == b);
//!pour vérifier si a est différent de b on utilise !=
console.log("C'est inégal ? :",a != b);
//! Ensuite on retrouve les même opérateurs qu'en Mathématique
//! ici on demande si a est strictement suppérieur à b
console.log("Strictement suppérieur ? :",a > b);
//! ici on demande si a est strictement inférieur à b
console.log("Strictement inférieur ? :",a < b);
//! ici on demande si a est inférieur ou égal à b
console.log("Inférieur ou égal ? :",a <= b);
//! ici on demande si a est suppérieur ou égal à b
console.log("suppérieur ou égal ?:",a >= b);
//? Attention : de base JS ne prend pas en compte le typage des variables : 
//? ci dessous le nombre 2 est égal au caractère "2" %
console.log("le chiffre 2 = \"2\"?:",2 == "2");
//! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
//! c'est l'égalité stricte
console.log("égalité stricte ?:",2 === "2");
//! il y a aussi l'inégalité stricte avec l'opérateur !== console.log("inégalité stricte ?:",2 !== "2");

//!-------CONDITIONS TERNAIRES-------
// ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
let whatIsYourAge = 6;
console.log(whatIsYourAge > 18 ? 'Yes':'No');
// Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)
let userPremium;
// On check si une variable est définie la condition c'est juste uneVariable ? 
console.log(userPremium?'OK':'Not OK');
// ↑ c'est l'équivalent de ↓
console.log(userPremium ==true?'OK':'Not OK'); // on doit lui assigner QQCHOSE
userPremium = 'YES';
console.log(userPremium?'OK':'Not OK');

// ? On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
console.log(3==3&&3<4);
let typeUtilisateur = 'Extra';
console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');

//!-------CONDITION avec IF ELSE-------
// ? Avec if on va pouvoir créer un bloc de code qui s'exécute si une condition est remplie
function calculTableResto(nombreDeReservation) {    
    if (nombreDeReservation>=30){
        return 'il nous reste pas beaucoup de tables, ça serait pour combien de personnes ?';
    }
    else if(nombreDeReservation<10){ 
        return 'Il nous reste une table'
    }

    else{
        return 'On est fermé !'     }
};
console.log(calculTableResto(50));

function msgMentionBacOfficiel(tabNotes) {
    let moyenneCalc = (tabNotes[0]+tabNotes[1]+tabNotes[2])/tabNotes.length; 
    console.log('la Moyenne au Bac : ',moyenneCalc);
    if (moyenneCalc>=16) { 
        return "Tu as Gagné !"
    } else if (moyenneCalc >=10 && moyenneCalc<16) {
        return 'Assez Bien'
    } else {
        return 'YO T NUL GRO'
    }
};
console.log(msgMentionBacOfficiel([13,6,3]));

// ? syntaxe  { uneProprieté:uneValeur } 
// ? dans un objet on assigne avec : plutot qu'avec = 
let user = {
    id:3657826,
    'name':'Seagal',
    firstName:'Steven',
    badges:['Fx1','Fx2','Fx3','Fx4','Fx5']
};
console.log(user);
console.log(user.name);
console.log(user.id);
console.log(user['id']);

// ? On peut supprimer une propriété delete user.badges;
// ? On peut ajouter simplement des propriétés dans un objet avec une assignation de valeur
// ? Si on assigne à une propriété déjà existante cela écrase la valeur
// ? Mais Si on assigne à une propriété non existante cela créee la propriété
user.dps = 9999;

// ? une ƒ° native de JS poour connaitre les propriétés d'un objet, hasOwnProperty() 
let menuDuJour={
    entree:"Bassine d'Aioli",
    plat:"Rat Adulte",
    dessert:'île Fidji'
};
console.log(menuDuJour);
console.log(menuDuJour.hasOwnProperty('entree'));

// TODO : Faire l'exo avec les passions en mode objet
let nameUser = 'Dong Rodrigue';
let ageUser = 65;
let objetUser = {
    'nom' : nameUser,
    'age' : ageUser,
    'passions': {
        'passion1':'Le Drift',
        'passion2':'Jonquilles'
    }
};
console.log('objet de utilisateur : ',objetUser); 
console.log(objetUser.nom);
console.log(objetUser['passions']);// c le taleau passions 
console.log(objetUser.passions.passion2);

objetUser.name = 111;
objetUser.age = 'DonDiegoDelavega'; 
objetUser.passions.passion2 = 'Le Cinéma';

// prenom;
// alert('Ce message ne s\'affichera pas’);

// try{
//     prenom
//     alert('Bonjour');  
// }catch(err){
//     alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
//         -----------
//         Le Nom de l'erreur 
//         ${err.name}
//         -----------
//         Le Message de l'erreur  :
//         ${err.message}
//         ----------
//         L'emplacement de l'erreur:
//         ${err.stack}`);
// }
// alert(`Ce message s'affiche correctement`);

// function division(){
//     let x = prompt('Entrez un premier nombre (numérateur)'); 
//     let y = prompt('Entrez un deuxième nombre (dénominateur)'); 
    
//     if(isNaN(x) || isNaN(y) || x == '' || y == ''){
//         throw new Error('Merci de rentrer deux nombres');     
//     }else if(y == 0){
//         throw new Error('Division par 0 impossible')     
//     }else{
//         alert(x / y);     
//     }
// }

// division()

// function division(){
//     let x = prompt('Entrez un premier nombre (numérateur)'); 
//     let y = prompt('Entrez un deuxième nombre (dénominateur)'); 
    
//     if(isNaN(x) || isNaN(y) || x == '' || y == ''){
//         throw new Error('Merci de rentrer deux nombres');     
//     }else if(y == 0){
//         throw new Error('Division par 0 impossible')     
//     }else{
//         alert(x / y);
//     }
// }

// division();
// try{
//     division();
// }catch(err){
//     alert(err.message);
// }finally{
//     alert(`Ce message s'affichera quoiqu'il arrive`); 
// }

//? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
let tousLesP = document.getElementsByTagName('p');
console.log('La HTMLCollection',tousLesP);
//? Quand on a une HTMLCollection on peut accéder à un certains éléments 
console.log('le 3e <p> dans la HTMLCollection : ',tousLesP[2]);
//? Une fonction type getElement pour récupérer tous les élément selon une certaine class dans une HTMLCollection
let tousLesSuper = document.getElementsByClassName('super');
console.log(tousLesSuper);

//? Une fonction type getElement pour récupérer UN élément par son ID 
let specialP = document.getElementById('special');
console.log(specialP);

//? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé) 
let lePremierP = document.querySelector('p');
console.log('lePremierP via querySelector : ',lePremierP);

//? Une fonction type querySelector pour récupérer UN élément par son ID 
let pSpecial = document.querySelector('#special');
console.log('pSpecial querySelector + ID',pSpecial);

//? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé) par sa classe
let pSuper = document.querySelector('.super'); 
console.log('pSuper querySelector + class',pSpecial);

//? Une fonction type querySelector pour récupérer TOUS les élément dans une NodeList 
let allParagraphes = document.querySelectorAll('p');
console.log('allParagraphes querySelector + balise',allParagraphes); 
let allSuper = document.querySelectorAll('.super');
console.log('allSuper querySelector + class',allSuper);
console.log('allParagraphes mais on prend le 2e',allParagraphes[1]);

// Seguir do PDF 13 settimeout