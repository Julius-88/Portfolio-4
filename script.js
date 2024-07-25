// Select all elements with the class 'scrolling-text-item'
let items = document.querySelectorAll('.scrolling-text-item');

// Loop through each element and clone it
items.forEach(item => {
    let copy = item.cloneNode(true); // Clone the element
    document.querySelector('.scrolling-text').appendChild(copy); // Append the cloned element
});
