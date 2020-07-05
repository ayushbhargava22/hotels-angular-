
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


function initMap() {
  var options = {
    zoom: 8,
    center: { lat:26.9124, lng:75.7873}
  }

  var map = new google.maps.Map(document.getElementById('map'), options);
  /*
  var marker = new google.maps.Marker({
    position:{lat:26.8549, lng:75.8243},
    map:map
  })*/
  
  addMarker({lat:26.8549, lng:75.8243})
  addMarker({lat:26.9306, lng:75.7936})

  function addMarker(coords) {
    var marker = new google.maps.Marker({
      position:coords,
      map:map
    })
  }
}



