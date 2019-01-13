var myFn = function() {
    console.log("I am function.");
  }
  
  myFn.someAttribute = 42;
  console.log(myFn.someAttribute);
  
  function runner(f) {
    f();
  }
  
  runner(myFn);

// The second argument/parameter is expected to be a function
//  Modify the callback function in the previous example so that logs the index of the array where Waldo is found, 
//  ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)
function actionWhenFound(index) {
    console.log("Found Waldo at index " + index) + " !";
  }

function findWaldo(arr, found) {
arr.forEach((val, i)=> {
    val === "Waldo" ? found(i) : null
})
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);