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

const modal2 = document.querySelector('.container_modal');

const support2 = document.querySelector('.two');
console.log(support2);

// const active2 = document.querySelector('.active2')
support2.addEventListener('click' , function() {
    modal2.classList.add('active')
})