// Exercice 2 - opérateurs de base
let a = 10;
let b = 3;

console.log("Addition      :", a + b);   // 13
console.log("Soustraction  :", a - b);   // 7
console.log("Multiplication:", a * b);   // 30
console.log("Division      :", a / b);   // 3.333...
console.log("Reste(modulo) :", a % b);   // 1
console.log("Puissance     :", a ** b);  // 1000

// Exercice 2 - nombres à virgule
let prix = 19.99;
let tva = 0.20;

console.log("Prix HT  :", prix);
console.log("TVA      :", prix * tva);          // 3.998
console.log("Prix TTC :", prix + prix * tva);   // 23.988

// Exercice 2 - calcul ultra complèxe
let x = 5;
let y = 3.14;
let z = 2;

let resultat = ((x ** z + y * 10) / (x - z)) * (y + z) - Math.sqrt(81);

console.log("Calcul complexe :", resultat);
// ((5² + 3.14 * 10) / (5 - 2)) * (3.14 + 2) - √81
// ((25 + 31.4) / 3) * 5.14 - 9
// (56.4 / 3) * 5.14 - 9
// 18.8 * 5.14 - 9
// 96.632 - 9 = 87.632

//Exercice 2 - variable compteur
let compteur = 10;
console.log("Départ        :", compteur); // 10

compteur += 5;
console.log("Après +=5     :", compteur); // 15

compteur -= 3;
console.log("Après -=3     :", compteur); // 12

compteur *= 2;
console.log("Après *=2     :", compteur); // 24

compteur /= 4;
console.log("Après /=4     :", compteur); // 6

compteur %= 4;
console.log("Après %=4     :", compteur); // 2

compteur **= 3;
console.log("Après **=3    :", compteur); // 8


// Exercice 1
let text = "Salut"; // String
console.log("text");

let numero = 43;    // Number
console.log("numero");

let pi = 3.14;  // Number
console.log("pi");

let vrai = true;    // Boolean
console.log("vrai");

let rien = null;    // Null
console.log("rien");

let pasdetout = undefined; // Undefined
console.log("pasdetout");

let liste = [1, 2, 3];      // Array
console.log("liste");
console.log(liste[0]);  // 1 (premier élément)
        
let personne = {
    prenom: "Thiago",
    age: 43,
    ville: "Toulouse"
};
console.log(personne);        // { prenom: "Thiago", age: 43, ville: "Toulouse" }
console.log(personne.prenom);    // Thiago
console.log(personne.age);    // 43
console.log(personne.ville);    // Toulouse

// BONUS — variable contenant une fonction
const direBonjour = function() {
    console.log("Hello World");
};

direBonjour(); // Hello World