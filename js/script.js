$(".shop").click(function() {
  $('html, body').animate({
  scrollTop: $("#feature").offset().top
}, 2000);
});

$(".tips").insertAfter("#loadMore");
$(".container").insertAfter(".tips");
$(".share").insertAfter(".articles-container");
$("footer").insertAfter(".images_gallery");
$("hr").insertBefore("footer");
$(".nav_products").on("click", function(){
  console.log("click products");
});
$(".nav_rooms").on("click", function(){
  console.log("click rooms");
});
$(".nav_inspirations").on("click", function(){
  console.log("click inspirations");
});
$("#heart").on("click", function(){
  console.log("click favourite");
});
$("#cart").on("click", function(){
  console.log("click cart");
});
$("#logo").on("click", function(){
  console.log("click logo");
});
function share(){
  console.log("share item");
};
function like(){
  console.log("add item to favourite");
};
function Buy(){
  console.log("add item to cart");
};



$(document).ready(function(){
$(".card").slice(0, 8).show();
$("#loadMore").click( function (e) {
  e.preventDefault();
  $(".card:hidden").slice(0, 8).slideDown();
  if ($(".card:hidden").length == 0) {
    $("#loadMore").fadeOut('slow');
      }
  });
});

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    for (const product of json) {
      const card = `
        <div class="card">
          <img src=${product.image}>
          <div class="shadow"></div>
          <div class="product-buttons">
            <button class="button" onclick="Buy()">Add to card</button>
          </div>
          <span class="share-item">
            <p class="share-button" onclick="share()"><i class="fas fa-share-alt"></i>Share</p>
            <p class="share-button" onclick="like()"><i class="far fa-heart"></i>Like</p>
          </span>
          <div class="card-desc">
          <h5>${product.title}</h5>
          <p>${product.description}</p>
          <h2>${product.price}</h2>
          </div>
        </div>
      `;
      document.getElementById("products").innerHTML += card;
    }
  });

  var $button = $("#button");

  $(".card").on("mouseover", function() {
    $button.show();
  }).on("mouseout", function() {
    $button.hide();
  });

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
    slidesToShow:3,
    slidesToScroll: 1,
    infinite: false,
    
    		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
