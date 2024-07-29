// Select all elements with the class 'scrolling-text-item'
let items = document.querySelectorAll('.scrolling-text-item');

// Loop through each element and clone it
items.forEach(item => {
    let copy = item.cloneNode(true); // Clone the element
    document.querySelector('.scrolling-text').appendChild(copy); // Append the cloned element
});

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function changeSlide(direction) {
    const currentSlide = slides.children[currentIndex];
    currentSlide.querySelector('img').style.animation = 'disintegrate 0.5s forwards';

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const nextSlide = slides.children[currentIndex];

    setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease';
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        nextSlide.querySelector('img').style.animation = 'stabilize 0.5s forwards';
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});