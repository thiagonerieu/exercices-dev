// VARIABLES DE LA COMMANDE
const restaurantName = "La Pizzeria Raffinata";
let clientName = "Jean Dupont";
let clientAddress = "12 Rue de la Paix, Paris";
let pizzaRef = "Margherita";
let pizzaSize = "Grande";
let pizzaQuantite = 2;
let pizzaPrix = 12.99;
let totalPrix = pizzaQuantite * pizzaPrix;
let tempsLivraison = 30; // en minutes
let orderNumber = 1042;

// BLAGUES (message du client)
let blague1 = `Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre ?
"Arrête de me trancher la route !"`;

let blague2 = `Pourquoi les pizzas ne vont-elles jamais à la plage ? Parce qu'elles détestent le sable-witch !"`;

let blague3 = `Comment appelle-t-on une pizza qui se prend pour un chien ? Une pizzanichien !"`;

let blague4 = `Pourquoi les pizzas sont-elles de si bons détectives ? Parce qu'elles ont toujours une bonne olfaction !"`;

let blague5 = `Quelle est la danse préférée des pizza ? La pizzacarena !"`;

let blague6 = `Pourquoi les pizzas sont-elles toujours bien entourées ? Parce qu'elles ont une bonnne croûte sociale !"`;

let blague7 = `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ?
"Suis ta pâte et tout ira bien !"`;

// SumUpOrderPhrase
let SumUpOrderPhrase = `Merci d'avoir commandé chez "${restaurantName}" !

Récapitulatif de votre commande :
- Client        : ${clientName}
- Adresse       : ${clientAddress}
- Commande n°   : ${orderNumber}
- Pizza         : ${pizzaRef} (${pizzaSize})
- Quantité      : ${pizzaQuantite}
- Prix unitaire : ${pizzaPrix}€
- Total         : ${totalPrix}€
- Livraison     : environ ${tempsLivraison} minutes

${blague1}

Merci d'avoir commandé chez "${restaurantName}"`;

console.log(SumUpOrderPhrase);

//CORRECTION JEFF
console.log("-------------------Exercices Strings / CORRECTION JEFF-------------------");

let userName = 'Toto';
let pizzaName = 'Calzone';
let date = new Date().toLocaleDateString('fr-FR');
let adress = '11 avenue de l\'europe';

let pizzaPrice = 10.50;
let pizzaQuantity = 2;
let totalPrice = pizzaPrice * pizzaQuantity;
let pizzaIngredients = ["Tomate", "Mozzarella", "Olives", "Anchois"];
let deliveryTime = 30;

let sumUpPhrase = `Le ${date} : 

Bonjour Mr ${userName}, votre commande (${pizzaPrice}€) : 
${pizzaName} 
Avec ces ingrédients : (${pizzaIngredients[1]}, ${pizzaIngredients[2]}, ${pizzaIngredients[3]}) 

est en cours de préparation.
Elle vous sera livrée d'ici ${deliveryTime} minutes au ${adress}
Merci d'avoir commandé chez la pizerria "Rafinata".
---
Qu'est-cequ'une pizza a dit à une autre pizza qui lui demandait des conseils ?
"Suis ta pâte et tout ira bien."
`

console.log(sumUpPhrase);