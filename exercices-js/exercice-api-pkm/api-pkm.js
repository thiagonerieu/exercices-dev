// const input = document.querySelector('input');

// input.addEventListener('focus', () => {
//     input.style.backgroundColor = '#10b981';
//     input.style.color = 'white';
// });

// input.addEventListener('blur', () => {
//     input.style.backgroundColor = '';
// });

const apiDiv = document.querySelector('.apiPkm');
async function pkmApi(){
    const data = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(data);
    console.log(data.ok);
    console.log(data.status);
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    console.log(dataTransformed.results);
    console.log(dataTransformed.results[0]);
    console.log(dataTransformed.results[0].name);

    for (let i = 0; i < dataTransformed.results.length; i++) {
        console.log(dataTransformed.results[i].name);
        let newp=document.createElement("p");
        newp.innerText=dataTransformed.results[i].name;
        apiDiv.append(newp);
    }

};
pkmApi();


