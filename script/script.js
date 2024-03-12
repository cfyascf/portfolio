// ------ * SCROLL * ------

let navbuttons = document.querySelectorAll('.navbtn');
let sections = document.querySelectorAll('section'); 

navbuttons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        sections[index].scrollIntoView({behavior: 'smooth'});
        this.classList.add('active');
    });
});

// ------ * HOMEBTN * ------

let button = document.querySelector('.homebtn');
let contact_section = document.querySelector('.contact-section');

button.addEventListener('click', () => {
    contact_section.scrollIntoView({behavior: 'smooth'})
});


