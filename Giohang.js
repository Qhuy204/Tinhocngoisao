// Trong header.html
document.addEventListener('DOMContentLoaded', updateCartCount);

function updateCartCount() {
    var productOrders = JSON.parse(localStorage.getItem("productOrders")) || [];
    var cartCount = productOrders.length; // Đếm số lượng phần tử trong mảng

    // Lưu số lượng sản phẩm vào localStorage
    localStorage.setItem('cartCount', cartCount);

    // Hiển thị số lượng sản phẩm trong giỏ hàng
    var cartElement = document.getElementById('cart');
    if (cartElement) {
      var cartLink = cartElement.querySelector('a');
      if (cartLink) {
        cartLink.innerHTML = '<b>Giỏ hàng (' + cartCount + ')</b>';
      }
    }
  }

$(document).ready(function() {
    $("#add-to-cart").click(function() { // Lắng nghe sự kiện click trên nút "THÊM VÀO GIỎ HÀNG"
        // Lấy thông tin sản phẩm
        var productName = $("#product-name h2").text();
        var productPrice = $("#product-info .price").text();
        var mainImageSrc = $("#main-image").attr("src");
        // Tạo đối tượng sản phẩm
        var productItem = {
            name: productName,
            price: productPrice,
            photo: mainImageSrc,
            quantity: 1
      };
  
      // Lấy mảng sản phẩm từ localStorage (hoặc tạo mảng rỗng nếu chưa có)
      var productOrders = JSON.parse(localStorage.getItem("productOrders")) || [];
  
      // Thêm sản phẩm mới vào mảng
      productOrders.push(productItem);
  
      // Lưu mảng sản phẩm cập nhật vào localStorage
      localStorage.setItem("productOrders", JSON.stringify(productOrders));
  
      console.log("Sản phẩm đã được thêm vào giỏ hàng:", productItem);
  
      // (Tùy chọn) Hiển thị thông báo hoặc cập nhật giao diện giỏ hàng
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
      updateCartCount();
    });
  });
  

$(document).ready(function() {
    $("#header").load("header.html", function() {
        updateCartCount(); // Gọi hàm sau khi header.html được tải
        });
    });
