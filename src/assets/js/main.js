
$('.advantage-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });
  document.getElementById("showhidebtn").addEventListener("click", function() {
    var showhide1 = document.getElementById("moreinfo-showhide")
    if(showhide1.style.display == "none")
    {
        showhide1.style.display = "block"
    }
})


document.getElementById("hide-button").addEventListener("click", function() {
  var hide1 = document.getElementById("moreinfo-showhide")
  if(hide1.style.display == "block")
  {
      hide1.style.display = "none"
  }
})
