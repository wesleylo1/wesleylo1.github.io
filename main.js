myButton = document.querySelector('#myBtn')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block"
    } else {
        myButton.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// footer = document.querySelector('.footer')
// contact = document.querySelector('#contact')

// window.onscroll = function() {displayFunction()}

// function displayFunction() {
//     if (contact.scrollIntoView()) {
//         footer.style.display = "block"
//     } else {
//         footer.style.display = "none"
//     }
// }