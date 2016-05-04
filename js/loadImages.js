images = ["7Eleven","AllState","AmericanCampus","ATMCash","AustinDentalWorks","Avella","BarberShop","BBVCompass","BeautiyRest","BestLittlePawnShop","Bfree","Binger","BodyBrite","BrakeCheck","Bucks","BurgerTexII","CafeExpress","CafeMenet","CallaFlorist","CashAmericaPawn","CashAmericaPawnCasaDeEmpeno","CentralChiropractic","Changos","ChangosMonkey","ChangosTaqueria","CutiePis","DiabloRojoTatooCross","DiatoJapaneseRestraunt","EcoClean","ElectricAvenue","EnhancedViewingExperience","EVOEntertainment","EyeJoy","Ferrari","FerrariHorse","FerrariOFAustin","FlamingoAutomative","Flowerland","Francesco'sItalianRestaurant","FrozenCave","GalaxyCafe","Gatti'sPizza","GoodLuckFoodMart","GreenGos","GuzuGallery","HappyHour","HeartHospitalOfAustin","HoundsToothCoffe","IHeartVideo","IndependentBank","InStep","JerseyMike'sSubs","Julians","K-Nails","LaCabana","MamaFu'sAsianHouse","MaozVegetarian","MattressFirm","Maudie'sTex-Mex","medspringurgentcare","metroPCSAuthorizedDealer","MossyGeneral&CosmeticDentistry","P","PapaMurphy'sPizza","PieSociety","PlanetKGifts","PTerry's","RedStella","Reid's","SaltGrass","SetonMarbleFalls","SleepShop","SmoothieKing","SnapKitchen","SouthernHippie","SpicewoodSmokeShop","StarbucksCoffee","StJohnCatholicChurch","Tacodeli","Tacos","Tatoo","TheGallery","WeBuyGold","WEST","YogurtPlanet","ZenJapenseFoodFast"
];

var imageData = {"images":[
  {fileName:"7Eleven.png", company: "7 Eleven", tags: ["Gas Station", "Convience Store", "Back Lit"]},
  {fileName:"AllState.png", company:"All State", tags:["Insurance", "Back Lit"]},
  {fileName:"AmericanCampus.png", company:"American Campus Communities", tags:["Student Housing", "Back Lit"]},
  {fileName:"ATMCash.png", company:null, tags:["ATM", "Back Lit"]},
  {fileName:"AustinDentalWorks.png", "company":"Austin Dental Works", tags:["Dentist", "Teeth", "Oral Hygiene"]},
  {fileName:"Avella.png", company:"Avella Specialty Pharmacy", tags:["Pharmacy", "Back Lit"]},
  {fileName:"BarberShop.png", company:"Barber Shop", tags:["Barber Shop", "Hair Cut"]},
  {fileName:"BBVACompass.png", company:"BBVA Compass", tags:["Banking", "Credit Cards", "Mortgages", "Loans"]},
  {fileName:"Beautyrest.png", company:"Beautyrest", tags:["Mattresses", "Sleep", "Neon Lights"]},
  {fileName:"BestLittlePawnShop.png", company:"Best Little Pawn Shop", tags:["Pawn Shop", "Resale", "Second Hand", "Back Lit"]},
  {fileName:"Bfree.png", company:"BFree Yoga", tags:["Yoga Classes"]},
  {fileName:"BodyBrite.png", company:"BodyBrite Austin", tags:["Laser Hair Removal", "Back Lit"]},
  {fileName:"BrakeCheck.png", company:"Brake Check", tags:["Auto Repair", "Auto Maintenance", "Neon Lights", "Back Lit"]},
  {fileName:"Bucks.png", company:"Bucks Food and Fuel", tags:["Gas Station", "Convience Store", "Back Lit"]},
  {fileName:"BurgerTexII.png", company:"Burger Tex 2", tags:["Burgers", "Restaurant", "Back Lit"]},
  {fileName:"CafeExpress.png", company:"Cafe Express", tags:["Cafe", "Fresh Food", "Neon Lights"]},
  {fileName:"CafeMonet.png", company:"Cafe Monet", tags:["Painting", "Pottery", "Neon Lights"]},
  {fileName:"CallaFlorist.png", company:"Calla Florist", tags:["Florist", "Flowers", "Back Lit"]},
  {fileName:"CashAmericaPawn.png", company:"Cash America International", tags:["Pawn Shop", "Resale", "Second Hand", "Back Lit"]},
  {fileName:"CashAmericaPawnCasaDeEmpeno.png", company:"Cash America International", tags:["Pawn Shop", "Resale", "Second Hand", "Back Lit"]},
  {fileName:"Zinger.png", company:"Zinger Hardware & General Merchant", tags:["Hardware Store", "Furniture", "Household Goods", "Garden Items", "Toys"]}
]}

window.onload = function(){
  listOfImages = shuffle(imageData.images)
  setup(listOfImages);
  var button = document.getElementById("searchButton");
  button.onlick = searchAndFilter();
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

function setup(imageArray){
  loadImage(imageArray);
  console.log("loaded images:")
  initializeGrid(imageArray);
}

var loadedImages;
function loadImage(){
  loadedImages = 0;
  console.log("in load image")
  var divSelector = document.getElementById("grid");
  divSelector.innerHTML = "";
  for(var i = 0; i < imageData.images.length; i++){
    var div = document.createElement('div');
    div.className = "grid-item";
      var selectImage = imageData.images[i];
      var img = new Image();
      img.src = "./images/small/"+selectImage.fileName;
      img.title = selectImage.company;
      img.width = 286;
      img.onload = function(){loadedImages++};
    div.appendChild(img);
    divSelector.appendChild(div);
  }
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
    else if(loadedImages == imageArray.length || deltaTime >= 5000){
      clearInterval(tid);
      var msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        singleMode: true,
      });
    }
    deltaTime += interval;
  }, interval );
}

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
