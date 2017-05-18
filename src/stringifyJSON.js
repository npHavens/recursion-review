// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj)  {
//if the obj is falsey
if(obj === null){
  return 'null';
}

if (typeof obj === 'boolean'|| typeof obj === 'number'){
  return obj.toString();
}

if (typeof obj === 'string'){
  return ('"' + obj + '"');
}

//deals with array cases
if(Array.isArray(obj)){
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

else if (typeof obj === 'object'){
  var objectString = '{';
  var commaCounter = 0;

  for( var key in obj){
    if(typeof stringifyJSON(obj[key]) === 'undefined'){
      continue;
    }
    else {
       if (commaCounter > 0 ){
        objectString+= ',';
      }
      objectString+= '"' + key + '"' + ':' + stringifyJSON(obj[key]);
      commaCounter++;
    }
  }
  objectString+= '}';
  return objectString;
}

};



