// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
var matches = [];
var body  = document.body;
  function match(element){
    if(element.classList !== undefined && element.classList.contains(className)){
      matches.push(element);
    }
//traverses each node and if node has a child, searches that node for class name
    for(var i = 0; i < element.childNodes.length; i++){
      match(element.childNodes[i])
    }
  }

match(body);

return matches;
};
