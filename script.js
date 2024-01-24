const modal = document.querySelector('.model');

const support = document.querySelector('.one');
console.log(support);

const active = document.querySelector('.active')
support.addEventListener('click', function() {
    modal.classList.add('active')
})

const modal2 = document.querySelector('.container_modal');

const support2 = document.querySelector('.button');
console.log(support2);

const actives = document.querySelector('.actives')
support2.addEventListener('click', function() {
    modal2.classList.add('actives')
})