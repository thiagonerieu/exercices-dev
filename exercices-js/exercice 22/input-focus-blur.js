const input = document.querySelector('input');

input.addEventListener('focus', () => {
    input.style.backgroundColor = '#10b981';
    input.style.color = 'white';
});

input.addEventListener('blur', () => {
    input.style.backgroundColor = '';
});