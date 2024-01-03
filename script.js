// Navbar Toggle
const toggleButton = document.getElementById('toggleButton');
const iconToggle = document.getElementById('iconToggle');

toggleButton.addEventListener('click', function () {
    // Toggle between navbar-toggler-icon and close-icon
    iconToggle.classList.toggle('navbar-toggler-icon');
    iconToggle.innerHTML = iconToggle.classList.contains('navbar-toggler-icon') ? '' : '<img src="asset/header/close-square-logo.png" alt="Close Icon" class="close-icon">';
});

// For Carousel Function
document.addEventListener("DOMContentLoaded", function () {
    // Get carousel instance and initialize
    var carouselInstance = new bootstrap.Carousel(document.getElementById('carouselExampleInterval'));

    // Get active image items
    var imgActiveItems = document.querySelectorAll('.img-active div');

    // Update active class on slide change
    carouselInstance.addEventListener('slid.bs.carousel', function (event) {
        imgActiveItems.forEach(function (item) {
            item.classList.remove('active');
        });
        imgActiveItems[event.to].classList.add('active');
    });

    // Handle click on individual images
    imgActiveItems.forEach(function (img, index) {
        img.addEventListener('click', function () {
            carouselInstance.to(index);
            imgActiveItems.forEach(function (item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// Article Button Function
var buttons = document.querySelectorAll('.btn-artikel button');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var links = document.querySelectorAll('.btn-artikel a');
        links.forEach(function (link) {
            link.classList.remove('active');
        });
        this.parentElement.classList.add('active');
    });
});

// For Toggle Function
function toggle() {
    var fotoElements = document.querySelectorAll('.foto');
    var videoElements = document.querySelectorAll('.video');
    var artikelButton = document.querySelector('.btn-artikel .active');
    var isFoto = artikelButton.innerText.toLowerCase() === 'foto';

    fotoElements.forEach(function (foto) {
        foto.style.display = isFoto ? 'flex' : 'none';
    });

    videoElements.forEach(function (video) {
        video.style.display = isFoto ? 'none' : 'flex';
    });
}


