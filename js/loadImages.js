images = ["7Eleven","AllState","AmericanCampus","AustinDentalWorks","Avella","BarberShop","BBVCompass","BeautiyRest","BestLittlePawnShop","Bfree","Binger","BrakeCheck","Bucks","BurgerTexII","CafeExpress","CafeMenet","CentralChiropractic","Changos","ChangosMonkey","ChangosTaqueria","CutiePis","DiabloRojoTatooCross","DiatoJapaneseRestraunt","EcoClean","ElectricAvenue","EnhancedViewingExperience","EVOEntertainment","EyeJoy","Ferrari","FerrariHorse","FerrariOFAustin","Flowerland","Francesco'sItalianRestaurant","FrozenCave","GalaxyCafe","GreenGos","GuzuGallery","HappyHour","HeartHospitalOfAustin","HoundsToothCoffe","IHeartVideo","IndependentBank","InStep","JerseyMike'sSubs","Julians","K-Nails","LaCabana","MamaFu'sAsianHouse","MaozVegetarian","MattressFirm","Maudie'sTex-Mex","medspringurgentcare","metroPCSAuthorizedDealer","MossyGeneral&CosmeticDentistry","P","PapaMurphy'sPizza","PieSociety","PTerry's","RedStella","Reid's","SaltGrass","SetonMarbleFalls","SleepShop","SmoothieKing","SnapKitchen","SpicewoodSmokeShop","StJohnCatholicChurch","Tacodeli","Tacos","Tatoo","TheGallery","WeBuyGold","WEST","YogurtPlanet"  
];

function setup(imageArray){
  loadImage(imageArray);
  console.log("loaded images:")
  initializeGrid(imageArray);
}

window.onload = function(){
  listOfImages = images
  listOfImages = shuffle(listOfImages)
  setup(listOfImages);
  var button = document.getElementById("searchButton");
  button.onlick = searchAndFilter();
}




  function initializeGrid(imageArray){
    //http://stackoverflow.com/questions/5706757/is-there-a-way-to-check-document-ready-if-jquery-is-not-available
    console.log("initializing grid");
    var interval = 100;
    var deltaTime = 0;
    var elem = document.querySelector('#grid');
    var tid = setInterval(function (){
      if(document.readyState !== 'complete'){
        return;
      }
      else if(loadedImages == imageArray.length || deltaTime >= 500){
        clearInterval(tid);
        var msnry = new Masonry(elem, {
          itemSelector: '.grid-item',
          singleMode: true,
        });
      }
      deltaTime += interval;
    }, interval );
  }



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

var loadedImages;
function loadImage(imageNames){
  loadedImages = 0;
  console.log("in load image")
  console.log(imageNames)
  var divSelector = document.getElementById("grid");
  divSelector.innerHTML = "";
  for(var i = 0; i < imageNames.length; i++){
    var div = document.createElement('div');
    div.className = "grid-item";

    img = new Image();
    var url = "./images/small/"+imageNames[i]+".png";
    img.src = url;
    img.width = 286;
    img.onload = function(){loadedImages++};

    div.appendChild(img);
    divSelector.appendChild(div);
  }
}

console.log("about to onload")


var searchAndFilter = function(){
  console.log("called")
  var searchBox = document.getElementById("search")
  var searchTerm = searchBox.value;
  if(searchTerm != undefined){
    var duplicateArray = images.slice();
    for(var i = 0; i < duplicateArray.length; i++){
      if(duplicateArray[i].indexOf(searchTerm) < 0){ //Doesn't contain term
        duplicateArray.splice(i, 1)
      }
    }
  console.log(duplicateArray)
  setup(duplicateArray);
  }
}




/*
var button = document.getElementById("searchButton");
var searchBox = document.getElementById("search")
console.log(searchBox.value);
//button.onlick = searchAndFilter(searchBox.value)
var form = document.getElementById("searchForm");
form.submit(function(e){

  e.preventDefault();
  return false;*/












//EXpand box to show a larger view: http://masonry.desandro.com/extras.html. Scroll to "Animating item size"
