// Get the slideshow container and all its slides
const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('.slide');

// Set the index of the current slide
let currentSlide = 0;

// Define a function to show the next slide
function showNextSlide() {
  // Hide the current slide
  slides[currentSlide].classList.remove('active');
  // Increment the current slide index
  currentSlide = (currentSlide + 1) % slides.length;
  // Show the next slide
  slides[currentSlide].classList.add('active');
}

// Set an interval to automatically show the next slide every 5 seconds
setInterval(showNextSlide, 5000);
