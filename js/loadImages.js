images = ["AllState","AmericanCampus","AustinDentalWorks","BarberShop","BBVCompass","BestLittlePawnShop","Binger","Ferrari",
"EcoClean","Bucks","CafeMenet","CutiePis","ElectricAvenue","EnhancedViewingExperience","EVOEntertainment","FerrariHorse","BrakeCheck",
"FerrariOFAustin","Flowerland","FrozenCave","GalaxyCafe","LaCabana","PieSociety","SaltGrass","SetonMarbleFalls","Tacos","TheGallery",
"WeBuyGold"];
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
