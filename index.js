var arrGroup = function(arr, isNextFunction, returnSingleElements) {
  if(typeof returnSingleElements == 'undefined') { // optional argument
    returnSingleElements = true;
  }

  var rangeGroups  = []
    , checkBuffer  = []
    , previousItem
    , isLastItem   = false;

  arr.forEach(function(currentItem, index) {

    var flushBuffer = function() {
      rangeGroups.push(checkBuffer.map(singleRecordToElement));
      checkBuffer = [];
    }

    if(!isNextFunction(currentItem, previousItem)
       && previousItem) {
      flushBuffer();
    }

    checkBuffer.push(currentItem);

    isLastItem = (index == (arr.length-1));
    if(isLastItem) {
      flushBuffer();
    }

    previousItem = currentItem;
    return;
  });

  var rangeGroupsTrans = rangeGroups;
  if(returnSingleElements) {
    rangeGroupsTrans = rangeGroups.map(singleRecordToElement);
  }

  return rangeGroupsTrans;
};
var singleRecordToElement = function(element) {
  if(element.length == 1) {
    return element[0];
  }
  return element;
};

module.exports  = arrGroup;
