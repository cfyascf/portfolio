let navbuttons = document.querySelectorAll('.navbtn');
let sections = document.querySelectorAll('section'); 

navbuttons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        sections[index].scrollIntoView({behavior: 'smooth'});
    })
})
