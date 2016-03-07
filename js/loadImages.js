images = ["7Eleven","AllState","AmericanCampus","AustinDentalWorks","Avella","BarberShop","BBVCompass","BestLittlePawnShop","Bfree","Binger","BrakeCheck","Bucks","BurgerTexII","CafeExpress","CafeMenet","CentralChiropractic","Changos","ChangosMonkey","ChangosTaqueria","CutiePis","DiabloRojoTatooCross","DiatoJapaneseRestraunt","EcoClean","ElectricAvenue","EnhancedViewingExperience","EVOEntertainment","Ferrari","FerrariHorse","FerrariOFAustin","Flowerland","FrozenCave","GalaxyCafe","GreenGos","HeartHospitalOfAustin","HoundsToothCoffe","IHeartVideo","IndependentBank","InStep","JerseyMike'sSubs","Julians","LaCabana","MamaFu'sAsianHouse","MaozVegetarian","MattressFirm","Maudie'sTex-Mex","medspringurgentcare","MossyGeneral&CosmeticDentistry","P","PieSociety","PTerry's","Reid's","SaltGrass","SetonMarbleFalls","SmoothieKing","SnapKitchen","Tacodeli","Tacos","TheGallery","WeBuyGold","WEST","YogurtPlanet"
];
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
loadedImages = 0;
function loadImage(imageNames, size, divSelector){
  imageNames.forEach(function(entry){
    var div = document.createElement('div');
    div.className = "grid-item";

    img = new Image();
    var url = "images/"+size+"/"+entry+".png";
    img.src = url;
    img.width = 286;
    img.onload = function(){loadedImages++};

    div.appendChild(img);
    divSelector.appendChild(div);
  });
}

window.onload = function (){
  images = shuffle(images)
  var elem = document.querySelector('#grid');
  loadImage(images, "small", elem);

  //http://stackoverflow.com/questions/5706757/is-there-a-way-to-check-document-ready-if-jquery-is-not-available
  var interval = 100;
  var deltaTime = 0;
  var tid = setInterval(function (){
    if(document.readyState !== 'complete'){
      return;
    }
    else if(loadedImages == images.length || deltaTime >= 50000){
      clearInterval(tid);
      var msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        singleMode: true,
      });
    }
    deltaTime += interval;
  }, interval );





}


//EXpand box to show a larger view: http://masonry.desandro.com/extras.html. Scroll to "Animating item size"
