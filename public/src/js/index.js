'use strict';

// Function to hide the spinner when the page is fully loaded and stop the animation
window.addEventListener("load", function () {
  const spinnerOverlay = document.querySelector(".spinner__overlay");
  
  // Stop the spinner's animation by removing the animation property
  const spinnerElements = spinnerOverlay.querySelectorAll("div");
  spinnerElements.forEach(function (element) {
      element.style.animation = "none";
  });
  
  // Hide the spinner
  spinnerOverlay.style.display = "none";

  const heroImg = document.querySelector('.hero--effect');
  heroImg.style.transform = 'scale(1)';
});


const txts = document.querySelector(".animate-text").children;
const txtsLen = txts.length;
let index = 0;
const textInTimer = 3000;
const textOutTimer = 2800;

function animateText() {
    for(let i=0; i<txtsLen; i++){
        txts[i].classList.remove("text-in","text-out");  
    }
    txts[index].classList.add("text-in");

    setTimeout(function(){
        txts[index].classList.add("text-out");              
    },textOutTimer)

    setTimeout(function(){

        if(index == txtsLen-1){
            index=0;
        }
        else{
            index++;
            }
        animateText();
    },textInTimer); 
}

window.onload=animateText;




// const Swal = require('sweetalert2')
// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )

// document.addEventListener("DOMContentLoaded", function() {
//   const menuInput = document.querySelector(".menu-input");

//   document.body.addEventListener("click", function(event) {
//       // Check if the click target is not the menu input itself and the menu input is checked
//       if (menuInput.checked && event.target !== menuInput) {
//           // Prevent the default behavior of the menu input (e.g., opening the menu)
//           event.preventDefault();

//           // Uncheck the menu input without interfering with its normal behavior
//           menuInput.checked = false;
//       }
//   });
// });
