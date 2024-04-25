// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Image Slider - Simple Example
let slideIndex = 0;
showSlides();


function showSlides() {
    let slides = document.querySelectorAll('.slider');
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// function handleButtonClick() {
//     var buttonId;
//     if (document.getElementById("orderButton")) {
//         buttonId = "orderButton";
//     } else if (document.getElementById("serviceButton")) {
//         buttonId = "serviceButton";
//     }

//     var button = document.getElementById(buttonId);
//     if (button) {
//         // Your code here
//         alert("Button with id " + buttonId + " clicked!");
//     }

// }

// var myElement = document.getElementById('order');
// if (myElement) {
//     myElement.addEventListener('click', function() {
//         window.location.href = 'order.html';
//     });
// } else {
//     console.error('Element not found');
// }
// document.getElementById('order-btn').addEventListener('click', function() {
//     // Redirect to the order form page or perform any other action
//     window.location.href = 'order.html';
// });


document.getElementById('search-btn').addEventListener('click', function() {
    performSearch();
});

function performSearch() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var images = document.querySelectorAll('.product-image');

    images.forEach(function(image) {
        var imageName = image.alt.toLowerCase();
        if (imageName.includes(searchInput)) {
            image.style.display = 'block'; // Show image
        } else {
            image.style.display = 'none'; // Hide image
        }
    });
}
