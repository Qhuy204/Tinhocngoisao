document.addEventListener('DOMContentLoaded', function() {
    const showDetailsButton = document.getElementById('show-details-button');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    showDetailsButton.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling of the webpage
    });

    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Allow scrolling of the webpage again
    });

    // Close the popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto'; // Allow scrolling of the webpage again
        }
    });
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("product-images");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Đặt width = 100% cho bức ảnh đầu tiên
  let firstImage = slides[0].getElementsByTagName("img")[0];
  if (firstImage) {
    firstImage.style.width = "100%";
  }
}

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', (event) => {
  showSlides(slideIndex);
});