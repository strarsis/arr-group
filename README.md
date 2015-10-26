# arr-group
Helper function to group array elements by a criteria callback function.

Usage
-----
````
npm install arr-group
````

The passed array has to be sorted reflecting the order the single items has to be checked for.
See code of [group-numbers](https://github.com/strarsis/group-numbers/blob/master/index.js) about how arr-group is used.


Arguments
---------
### arr
The array to be grouped.
It has to be sorted reflecting the order the single has to be checked for.

### isNextFunction
Callback that should return true if the passed current element is following the passed previous element.
````
function(currentItem, previousItem) {
  [...]
  return true;  // current item is the following the previous item
  [...]
  return false; // current item is not following the previous item
}
````

### returnSingleElements
Whether to return single elements in the array as single elements or in an array (of a single element).
Defaults to true.
