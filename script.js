const modal = document.querySelector('.model');

const support = document.querySelector('.one');
console.log(support);

const active = document.querySelector('.active')
support.addEventListener('click', function() {
    modal.classList.add('active')
})

const modal2 = document.querySelector('.container');

const support2 = document.querySelector('.two');

const cross = document.querySelector('.container_cross')

support2.addEventListener('click', function() {
    modal2.classList.add('active')
})

cross.addEventListener('click', function() {
    modal2.classList.remove('active')
})

