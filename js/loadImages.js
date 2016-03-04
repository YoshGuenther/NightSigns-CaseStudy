images = ["AllState","AmericanCampus","AustinDentalWorks","BarberShop","BBVCompass","BestLittlePawnShop","Bfree","Binger","BrakeCheck","Bucks","CafeMenet","CutiePis","EcoClean","ElectricAvenue","EnhancedViewingExperience","EVOEntertainment","Ferrari","FerrariHorse","FerrariOFAustin","Flowerland","FrozenCave","GalaxyCafe","IndependentBank","InStep","JerseyMike'sSubs","LaCabana","MamaFu'sAsianHouse","MaozVegetarian","MattressFirm","Maudie'sTex-Mex","medspringurgentcare","MossyGeneral&CosmeticDentistry","P","PieSociety","PTerry's","Reid's","SaltGrass","SetonMarbleFalls","SmoothieKing","SnapKitchen","Tacodeli","Tacos","TheGallery","WeBuyGold","YogurtPlanet"];

//http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function loadImage(imageNames, size, divSelector){
  imageNames.forEach(function(entry){
    img = new Image();
    img.src = "images/"+size+"/"+entry+".png";
    img.width = 286
    img.className = "grid-item"
    divSelector.appendChild(img);
  });
}

window.onload = function () {
  images = shuffle(images)
  var elem = document.querySelector('.grid');
 loadImage(images, "small", elem);


 console.log(elem);
 var msnry = new Masonry( elem, {
    itemSelector: '.grid-item',
    columnWidth: 286,
  });

}
