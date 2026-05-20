// const paragraphs = document.querySelectorAll("p");

// Array.from(paragraphs).map(p => {
//   p.textContent = "modif!";
// });

const userData = {
  name: 'John delavega',
  email: 'john.doe@example.com',
  age: 25,
  dob: '08/02/1989',
  active: true,
  img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const userProfile = document.querySelector('.userProfile');
userProfile.style.background = 'linear-gradient(45deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)';
userProfile.style.width = '500px';
userProfile.style.margin = 'auto';
userProfile.style.color = 'white';
userProfile.style.padding = '10px';
userProfile.style.fontSize = '1.4rem';

const img = document.createElement('img'); 
img.style.width = '480px';

img.style.padding = '10px';

const name = document.createElement('h2');
const email = document.createElement('p');
const age = document.createElement('p');
const dob = document.createElement('p');
const status = document.createElement('p');

img.src = userData.img;
img.alt = userData.name;

name.textContent = userData.name;
email.textContent = `Email : ${userData.email}`;
age.textContent = `Âge : ${userData.age}`;
dob.textContent = `Date de naissance : ${userData.dob}`;
status.textContent = `Statut : ${userData ? '🟢Actif' : '🔴Inactif'}`;

userProfile.append(img, name, email, age, dob, status);

