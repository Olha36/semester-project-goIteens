const modal = document.querySelector('.model');

const support = document.querySelector('.one');
console.log(support);

const active = document.querySelector('.active')
support.addEventListener('click', function() {
    modal.classList.add('active')
})

const closeDagger = document.querySelector('.dagger');
console.log(support);

closeDagger.addEventListener('click', function() {
    modal.classList.remove('active')
})