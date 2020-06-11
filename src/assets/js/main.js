
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
    var btn1 = document.getElementById("showhidebtn")
    if(showhide1.style.display == "none")
    {
        showhide1.style.display = "block"
        btn1.style.display = "none"
    }
})


document.getElementById("hide-button").addEventListener("click", function() {
  var hide1 = document.getElementById("moreinfo-showhide")
  var btn1 = document.getElementById("showhidebtn")
  if(hide1.style.display == "block" && btn1.style.display == "none")
  {
      hide1.style.display = "none"
      btn1.style.display = "flex"
  }
})


new Glide('.glide').mount() 

new Glide('.facility-glide').mount() 


new Glide('.offer').mount()