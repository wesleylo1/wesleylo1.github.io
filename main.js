// back to top button
const myButton = document.querySelector('#myBtn')

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

// scroll to view for heading


// scroll to view for contact button


// scroll to view for 