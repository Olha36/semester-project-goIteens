const modal = document.querySelector('.model');

const support = document.querySelector('.one');
console.log(support);

const active = document.querySelector('.active')
support.addEventListener('click', function() {
    modal.classList.add('active')
})

const modal2 = document.querySelector('.container');
console.log(modal2);

const support2 = document.querySelector('.two');
console.log(support2);

support2.addEventListener('click', function() {
    modal2.classList.add('active')
})

// const actives = document.querySelector('.actives')
// support2.addEventListener('click', function() {
//     modal2.classList.add('actives')
// })