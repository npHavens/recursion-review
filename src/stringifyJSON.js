// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj)  {
//if the obj is falsey
if(obj === null){
  return 'null';
}

else if (typeof obj === 'boolean'|| typeof obj === 'number'){
  return obj.toString();
}

else if (typeof obj === 'string'){
  return ()
}

//deals with array cases
else if(Array.isArray(obj)){
  var arrayString = '[';
  for( var i = 0; i < obj.length; i++){
    if( i > 0){
      arrayString+= ',';
    }
    arrayString += stringifyJSON(obj[i]);
  }
  arrayString+= ']';
  return arrayString;
}












};