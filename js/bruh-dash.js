var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
    return  array[0];
  },

  // returns the last element of an array
  last: function (array) {
    return array[array.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, val) {
    for (var i = 0; i<arr.length; i++){
      if(arr[i] === val){
        return i;
          }
        }
        return -1;
  },

  // returns the index of te first matching element from right to left
  lastIndexOf: function (array,value) {
    for(var i = array.length -1; i >= 0; i--){
      if(array[i] === value){
        return i;
      }
    }return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    var x = array.pop();
    return array;
  },

  // returns an array with all falsey values removed
  compact: function fal(array){
var result = [];
var none = [false, null, NaN, 0, ""];
  for(var i = 0; i < array.length; i++){
    if(!none.includes(array[i])){
      result.push(array[i]);
    }
  }return result;
},

  // creates a slice of an array from the start index up to but not including the end index
  slice: function slicee(array,start,end){
  var result = [];
  for(var i = start; i < end; i++){
    result.push(array[i]);
  }return result;
},

  // returns a slice of array with n elements dropped from the beignning
  drop: function dropUm(array, number){

  if(number === undefined){
    var noInput = array.slice(1);
    return noInput;
  }
  if(number === 0){
    var resultZero = array.slice(number);
    return resultZero;
  }if(number > 0){
    var result = array.slice(number);
    return result;
  }
},

  // returns a slice of array with n elements dropped from the end
  dropRight: function dropUm(array, number){

  var arrReverse = array.reverse();

  if(number === undefined){
    var noInput = arrReverse.slice(1);
    var revert1 = noInput.reverse();
    return noInput;
  }
  if(number === 0){
    var resultZero = arrReverse.slice(number);
    var rever2 = resultZero.reverse();
    return resultZero;
  }if(number > 0){
    var result = arrReverse.slice(number);
    var revert2 = result.reverse();
    return result;
  }
},

  // creates a slice of an array with n elements taken from the beginning
  take: function takeUm(array,number){

    if(number > array.length){
      //console.log(array)
      return array;
    }if(number === undefined){
      array.splice(1);
      //console.log(array)
      return array;
    }else{
      array.splice(number);
      //console.log(array)
      return array;
    }
},

  // creates a slice of an array with n elements taken from the end
  takeRight: function takeRightt(array,number){

  if(number > 0){
    var newArr = array.splice(number - 1);
    return newArr;
  }if(number === undefined){
    var noInput = array.slice(array.length - 1);
    return noInput;
  }if(number === 0){
    var emptySet = [];
    return emptySet;
  }
},

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function fill (array, filler, start, end) {
    if (start === undefined) {
        start = 0;
        end = array.length;
    } else {
        start = start;
        end = end;
    }
    for(var i = start; i < end; i++){
        array[i] = filler;
      }
      return array;
  },

  // removes all given values from an array
  pull: function pullMe(array,value1,value2){

  for(var i = 0; i < array.length; i++){
    if(array[i] === value1){
      array.splice([i],1);
    }if(array[i] === value2){
      array.splice([i],1);
    }
  }
  return array;
},

  // removes elements of an array corresponding to the given indices
  pullAt: function pullAt(arr,ind){

  for(var i = ind.length-1; i>=0; i--){
      arr.splice(ind[i], 1);
    }
    return arr;
},

  // creates an array excluding all the specified values
  without: function withOut(array,value){

  var newArr = [];

  for(var i = 0; i < array.length; i++){
    if(value.indexOf(array[i])=== -1){
      newArr.push(array[i]);
    }
  }return newArr;
},

  // returns an array with specified values excluded
  difference: function(arr,arr2) {
    var newArr = [];
    for(var i = 0; i < arr2.length; i++){
      if(arr.indexOf(arr2[i]) === -1){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};
