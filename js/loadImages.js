images = ["AllState","AmericanCampus","AustinDentalWorks","BarberShop","BBVCompass","BestLittlePawnShop","Binger","Bucks","CutiePis","EnhancedViewingExperience","EVOEntertainment","Flowerland","FrozenCave","LaCabana","PieSociety","SaltGrass","SetonMarbleFalls","Tacos","TheGallery","WeBuyGold"];



function loadImage(imageNames, size, divSelector){
  imageNames.forEach(function(entry){
    img = new Image();
    img.src = "images/"+size+"/"+entry+".png";
    img.className = "images"
    divSelector.appendChild(img);
    console.log(entry);
  });
}

window.onload = function () {

 loadImage(images, "small", document.getElementById("backgroundImages"));

}
