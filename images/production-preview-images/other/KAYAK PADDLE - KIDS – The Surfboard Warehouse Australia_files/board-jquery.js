$(document).ready(function(){$(".board-types-list").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:'<span id="prev-cus" class="slick-prev slick-arrow" aria-label="Previous"><img src="https://cdn.shopify.com/s/files/1/0107/1615/1871/files/arr-left.png?v=1695096101"></span>',nextArrow:'<span id="next-cus" class="slick-next slick-arrow" aria-label="Next"><img src="https://cdn.shopify.com/s/files/1/0107/1615/1871/files/arr-right.png?v=1695096102"></span>'}),$(".board-construction-list").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:'<span id="prev-cus" class="slick-prev slick-arrow" aria-label="Previous"><img src="https://cdn.shopify.com/s/files/1/0107/1615/1871/files/arr-left.png?v=1695096101"></span>',nextArrow:'<span id="next-cus" class="slick-next slick-arrow" aria-label="Next"><img src="https://cdn.shopify.com/s/files/1/0107/1615/1871/files/arr-right.png?v=1695096102"></span>'})}),$(function(){$(".accordion-content").css("display","none"),$(".js-accordion-title").click(function(){$(".open").not(this).removeClass("open").next().slideUp(300),$(this).toggleClass("open").next().slideToggle(300)})});
//# sourceMappingURL=/cdn/shop/t/179/assets/board-jquery.js.map?v=131377772441959804111734559793
