// Initialize count (from localStorage if available) and orders
var count = parseInt(localStorage.getItem("count")) || 0; 
var orders = JSON.parse(localStorage.getItem("order")) || []; 

$(".cart-installment input").click(function() {
  count++; 

  // Cập nhật số lượng trong thẻ <b> hiện có
  $("#cart b").text('Giỏ hàng (' + count + ')');

  // Gắn lại sự kiện click cho #cart (nếu cần)
  $("#cart a").off('click').on('click', function(event) { 
      event.preventDefault();
      window.location.href = "Giohang.html";
    });

  var price = $(this).closest(".purchase-options").find(".price").text();
  var name = $(this).closest("#product-info").find(".product-code").text();
  var photo = $("#main-image").attr("src");
  var item = {
    "name": name,
    "price": price,
    "photo": photo
  };

  orders.push(item); 
  localStorage.setItem("order", JSON.stringify(orders));
  localStorage.setItem("count", count); // Save updated count to localStorage 
});

// Update cart display on page load 
$("#cart b").text('Giỏ hàng (' + count + ')'); // Cập nhật số lượng ban đầu

// Gắn sự kiện click cho #cart (nếu cần)
$("#cart a").off('click').on('click', function(event) { 
      event.preventDefault();
      window.location.href = "Giohang.html";
    });
