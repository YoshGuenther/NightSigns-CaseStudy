/*Node js script to generate a list of image names*/

var fileNames = [];

const fs = require('fs');

fs.readdir('./../images/small/', function(err, data){
  if(err) throw err;
  var length = data.length;
  for(var i = 0; i < length; i++){
    fileNames.push('"'+data[i].replace('.png', '')+'"');
  }
  console.log("filename: "+fileNames);
});
