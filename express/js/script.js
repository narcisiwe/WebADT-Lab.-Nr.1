// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
var x = document.getElementById("navDemo");
if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
} else { 
    x.className = x.className.replace(" w3-show", "");
}
}

// // When the user clicks anywhere outside of the modal, close it
// var modal = document.getElementById('ticketModal');
// window.onclick = function(event) {
// if (event.target == modal) {
//     modal.style.display = "none";
// }
// }


var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
if (event.target == modal) {
    // Add the animation class to the modal
    modal.classList.add("modal-close");

    // Remove the animation class from the modal after 1 second
    setTimeout(function() {
        modal.classList.remove("modal-close");
        modal.style.display = "none";
    }, 1000);
}
}

//Audio BUBLE button
const audio = document.querySelector("audio");
    const input = document.querySelector("input.bubble");
    const label = document.querySelector("label");

    input.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });

// // Get the background image element
// const backgroundImage = document.querySelector('.background-image');

// // Get the height of the window
// const windowHeight = window.innerHeight;

// // Add a scroll event listener to the window
// window.addEventListener('scroll', function() {
//   // Calculate the scroll position of the window
//   const scrollPosition = window.scrollY;

//   // Update the position of the background image based on the scroll position
//   backgroundImage.style.transform = `translateY(${scrollPosition / 2}px)`;
// });

// Get the element that you want to rotate
const element = document.querySelector('.element');
const element1 = document.querySelector('.element1');
const element2 = document.querySelector('.element2');


// Add a rotation animation to the element
element.animate({
  transform: 'rotate(360deg)',
}, {
  duration: 1000,
  easing: 'linear'
});

element1.animate({
  transform: 'rotate(360deg)',
}, {
  duration: 1500,
  easing: 'linear'
});

element2.animate({
  transform: 'rotate(360deg)',
}, {
  duration: 2000,
  easing: 'linear'
});


// Get the element that you want to scale
const macro = document.querySelector('.macro');

// Add a scale animation to the element
macro.animate({
  scale: 3
}, {
  duration: 1000,
  easing: 'ease-in-out'
});