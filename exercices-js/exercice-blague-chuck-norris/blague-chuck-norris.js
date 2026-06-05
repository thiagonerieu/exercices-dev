// const apiDiv = document.querySelector('.b-blague');

const pBlague = document.querySelector('.p-blague');

async function afficherBlague(){
    const data = await fetch('https://api.chucknorris.io/jokes/random');
    console.log(data);
    console.log(data.ok);
    console.log(data.status);
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    console.log(dataTransformed.value);
    console.log(dataTransformed.icon_url);

    // Mostra apenas uma frase sobrepondo a anterior
    // pBlague.innerText=dataTransformed.value; 

    //Mostra imagem do Chuck Norris
    let newimg=document.createElement("img");
        newimg.src = dataTransformed.icon_url;
        pBlague.append(newimg);
    // Mostra uma frase abaixo da outra
    let newp=document.createElement("p");
        newp.innerText=dataTransformed.value;
        pBlague.append(newp);
};

    const buttonBlague = document.querySelector('.b-blague');
        buttonBlague.addEventListener('click', afficherBlague);


