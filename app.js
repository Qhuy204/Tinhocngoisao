$(document).ready(function(){
  // Slide show
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
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
  }

  $('.prev').click(function(){
      plusSlides(-1);
  });

  $('.next').click(function(){
      plusSlides(1);
  });

  $('.dot').click(function(){
      var index = $(this).index();
      currentSlide(index + 1);
  });

  // Header scroll event
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
          $('header').addClass('header-scroll');
      } else {
          $('header').removeClass('header-scroll');
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const flashSaleContent = document.getElementById('flash-sale-content');
  const products = flashSaleContent.children;
  const productsPerRow = 7;
  const totalProducts = products.length;
  let currentIndex = 0;

  function updateView() {
      const maxIndex = Math.max(0, totalProducts - productsPerRow);
      currentIndex = Math.min(maxIndex, Math.max(0, currentIndex));
      flashSaleContent.style.transform = `translateX(-${currentIndex * 100 / productsPerRow}%)`;
  }

  prevButton.addEventListener('click', function () {
      currentIndex -= productsPerRow;
      updateView();
  });

  nextButton.addEventListener('click', function () {
      currentIndex += productsPerRow;
      updateView();
  });

  updateView(); // Initialize the view
});



function openFacebookLoginPopup() {
    const facebookLoginUrl = 'https://www.facebook.com/privacy/consent/gdp/?params%5Bapp_id%5D=840539422652232&params%5Bdisplay%5D=%22popup%22&params%5Bkid_directed_site%5D=false&params%5Blogger_id%5D=%22d450c381-6576-4a65-bcf4-d590e6883d63%22&params%5Bnext%5D=%22read%22&params%5Bredirect_uri%5D=%22https%3A%5C%2F%5C%2Fsocialloginplus-apps.haravan.com%5C%2Fsocialloginplus%5C%2Fapi%5C%2Fzauth%5C%2Ffacebook%5C%2Fcallback%22&params%5Bresponse_type%5D=%22code%22&params%5Breturn_scopes%5D=false&params%5Bscope%5D=%5B%22email%22%5D&params%5Bstate%5D=%22DF5ux7aG_CZ-OQSxoBQ9n9xmXQKbD7U9%22&params%5Bsteps%5D=%7B%22read%22%3A%5B%22email%22%2C%22baseline%22%2C%22public_profile%22%5D%7D&params%5Btp%5D=%22unspecified%22&params%5Bcui_gk%5D=%22%5BPASS%5D%3Alogin_platformization_read%22&params%5Bis_limited_login_shim%5D=false&source=gdp_delegated';
    const width = 600; // Chiều rộng của popup
    const height = 400; // Chiều cao của popup
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    window.open(facebookLoginUrl, '_blank', windowFeatures);
}


function openGoogleLoginPopup() {
    const GoogleLoginUrl = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=online&scope=profile%20openid%20email&state=DF5ux7aG_CZ-OQSxoBQ9n9xmXQKbD7U9&response_type=code&client_id=3371183033-dcda1sl1an7h46p6qapglonr245r8ccl.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsocialloginplus-apps.haravan.com%2Fsocialloginplus%2Fapi%2Fzauth%2Fgoogle%2Fcallback&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow';
    const width = 600; // Chiều rộng của popup
    const height = 400; // Chiều cao của popup
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    window.open(GoogleLoginUrl, '_blank', windowFeatures);
}

// Di chuyển hàm showLoginPopup ra ngoài callback DOMContentLoaded
function showLoginPopup(event) {
    event.preventDefault();
    document.getElementById('login-popup').style.visibility = 'visible';
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang web
  }
  
  function closeLoginPopup() {
    document.getElementById('login-popup').style.visibility= 'hidden';
    document.body.style.overflow = 'auto'; // Cho phép cuộn trang web trở lại
  }
  
  // Sự kiện DOMContentLoaded chỉ được sử dụng để ẩn popup khi trang được tải và thiết lập các event listener
  document.addEventListener('DOMContentLoaded', function () {
    // Ẩn popup khi trang được tải (quan trọng!)
    document.getElementById('login-popup').style.visibility = 'hidden';
  
    // Đóng popup khi nhấn nút "Đóng"
    document.querySelector('#login-popup .close').addEventListener('click', closeLoginPopup); 
  
    // Đóng popup khi click bên ngoài popup (lưu ý: id thay đổi do chỉ lấy button Đóng)
    document.getElementById('login-popup').addEventListener('click', function(event) {
      if (event.target === this) { // Kiểm tra xem click có trực tiếp vào popup không
        closeLoginPopup();
      }
    });
  });
  
  // Gắn sự kiện onclick cho liên kết "Đăng nhập" (bên ngoài sự kiện DOMContentLoaded)
  document.querySelector('#login-menu a[href="#"]').addEventListener('click', showLoginPopup); 
  



//Button prev-next chi tiết SP
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'Image/Chitietsp/m1.png',
        'Image/Chitietsp/m2.png',
        'Image/Chitietsp/m3.png',
        'Image/Chitietsp/m4.png',
        'Image/Chitietsp/m5.png',
        'Image/Chitietsp/m6.png',
        'Image/Chitietsp/m7.png'
    ];

    let currentIndex = 0;
    const mainImage = document.getElementById('main-image');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        mainImage.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        mainImage.src = images[currentIndex];
    });
});



// Share

function fbshareurlPopup() {
    const fbShareurl = 'https://www.facebook.com/sharer/sharer.php?u=';
    const width = 600; // Chiều rộng của popup
    const height = 400; // Chiều cao của popup
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    window.open(fbShareurl, '_blank', windowFeatures);
}


// document.getElementById("show-details-button").addEventListener("click", function() {
//     var popup = document.getElementById("more-product-specs");
//     if (popup.style.display === "none") {
//         popup.style.display = "block";
//     } else {
//         popup.style.display = "none";
//     }
// });


// document.querySelector("#show-details-button").addEventListener("click", function(){
//     document.querySelector(".more-product-specs").classList.add("active");
// });
