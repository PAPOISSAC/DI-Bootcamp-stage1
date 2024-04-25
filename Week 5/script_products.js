var myElement = document.getElementById('order-btn');
if (myElement) {
    myElement.addEventListener('click', function() {
        window.location.href = 'order.html';
    });
} else {
    console.error('Element not found');
}

var search_element = document.getElementById('search-btn');
document.getElementById('search-btn').addEventListener('click', function() {
    performSearch();
});

function performSearch() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var images = document.querySelectorAll('.product-image');
    var h1Element = document.querySelector('#introduction h1');
    var pElement = document.querySelector('#introduction p');

    images.forEach(function(image) {
        var imageName = image.alt.toLowerCase();
        console.log(imageName)
        console.log(searchInput)
        if (imageName.includes(searchInput)) {
            image.style.display = 'block'; // Show image
            image.style.marginLeft = 'auto';
            image.style.marginRight = 'auto';
            if (searchInput.includes("table")){
                h1Element.textContent = 'Arabia Table';
                pElement.textContent = 'Solid wood table available individually or in sets at package prices';
            }
            else if (searchInput.includes("chair")){
                h1Element.textContent = 'Rustic Chair';
                pElement.textContent = 'Solid wood chair available individually or in sets at package prices';
            }
            else if (searchInput.includes("shoe")){
                h1Element.textContent = 'Rustic Shoe Rack';
                pElement.textContent = 'Solid wood shoe rack available individually only';
            }
        } else {
            image.style.display = 'none'; // Hide image
        }
    });
}
