//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
const array = [9,2,7,6,5,4,3]

const map = (array, iteratee) => {
    const mappedArr = [];
    for (let i = 0; i < array.length; i++){
        mappedArr.push(iteratee(array[i]));
    }
    return mappedArr;
};
map (array, iteratee=>iteratee*2);

/*---------------------------------------------*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
const filter = (array, iteratee) => {
    const myNewArray = [];
    for (let i = 0; i < array.length; i++){
        if(iteratee(array[i])){
            myNewArray.push(array[i])
        }
    } 
    return myNewArray;
};
filter (array, item => item % 2 === 0);

/*---------------------------------------------*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `arr` and `fnc`
//loop arr and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
const find = (array, fnc) => {
    for (let i = 0; i < array.length; i++){
        if (fnc(array[i])){
            return(array[i]) //return exits the loop
        }
    }   
    return null; //if no matches
}
find(array); 

/*---------------------------------------------*/
//return the last item in arr
const findLast = (array) => {
    return array[array.length-1];
}
findLast(array);

/*---------------------------------------------*/
//return the first element of the array
const findFirst = (array) => {
    return array[0];
}
findFirst(array);

/*---------------------------------------------*/
//create a new array
//loop arr in reverse order
//add the item from each loop to the new array
//return the new array
const reverseArray = (array) => {
    const newArr = [];
    for(let i = array.length-1; i >= 0; i--){
      newArr.push(array[i])
    } return newArr;
}
reverseArray(array); 

/*---------------------------------------------*/
//create a new array
//loop arr
//add the item from each loop to the new array except the first item
//return the new array
const addItem = (array) => {
    const newArr = [];
    for(let i = 1; i < array.length; i++) {
        newArr.push(array[i])
    } return newArr;
}
addItem(array); 

/*---------------------------------------------*/
//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop arr until it is sorted
//use a for loop to loop arr
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return arr
const sortIt = (array) => {
    let sorted = false;
      while(!swapped) {
        swapped = true;
            for(let i = 0; x < array.length-1; i++) {
              if(array[i] > array[i+1]){
                  let holdValue = array[i]; //stores this value so it is not lost when array[i+1] is in place
                  array[i] = array[i+1];
                  array[i+1] = holdValue;
                  swapped = false;
              }
            } 
      } return sorted; 
}
sortIt(array);

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;