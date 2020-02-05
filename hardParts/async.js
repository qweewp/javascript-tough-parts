//https://jsbin.com/hijijag/1/edit?js,console,output
// Asynchronicity
// These challenges will build your understanding of asynchronous events, such as timers, event listeners, and AJAX calls.

// You will need to remove comments at the beginning of each challenge to work on them, and then comment them out again before moving on.

// Important: Create a clone of this challenge (File>Clone) to keep track of your changes. Create a JSBin account to come back to it later - or write down the new URL.


/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////
// Write code that will log to the console, 'I am at the beginning of the code'.

// Beneath that console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout callback function' after 3 seconds (3000 ms)

// Next, add code to the end of the challenge to log 'I am at the end of the code'. Now re-run the code.

// Make sure the 'console' and 'output' panes are showing (click the tabs above if not) and then run your code with the 'Run with JS' button.

// Clear the console. Change the delay time in the time from 3000 ms to 0. Think hard about how the order should change and then run the code again.
/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below

console.log('I am at the beginning of the code');

setTimeout(function() { 
console.log('I am in the setTimeout callback function');
}, 0)

console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////
// Write code that will log to the console "Interval Hello!" every 2 seconds (see setInterval).
// Use the given clearAllIntervals function to clear all the messages when you have this functionality working.

// Next, modify your code so that the "Interval Hello!" messages will automatically stop after 10 seconds.

// Then, modify your code again so that the "Interval Hello!" messages will automatically stop after 10 seconds without use of the clearAllIntervals function,
// and using clearInterval only once. Perform research if you are unsure how to do this.

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

const interval = setInterval(function() { console.log('Interval Hello!'); }, 2000);

setTimeout(function() {
  console.log('clearInterval: ', interval);
  clearInterval(interval);
}, 10000)

// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////
// Write a function everyXsecsForYsecs that will accept three arguments: a function, an interval time in seconds, and a total time in seconds.
// everyXsecsForYsecs should invoke the given function every X times 1000 milliseconds, but then stop invoking the function after Y times 1000 milliseconds.

// Write function sayHowdy that will log "Howdy" to the console. Then test your everyXsecsForYsecs function by using it to invoke sayHowdy every 1 second for 5 seconds.

// Now, modify your everyXsecsForYsecs function so it does not use setInterval, but still keeps the same functionality.

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

const everyXsecsForYsecs = function(aFunction, intervalTime, totalTimeSecs) {
  let now = Date.now();
  const total = now + totalTimeSecs;

  (function inner() {
    now += intervalTime
    if(now <= total) {
      setTimeout(() => {
        aFunction();
        inner();
      }, intervalTime)
    }
  })()
}

const sayHowdy = () => { console.log('Howdy'); }

everyXsecsForYsecs(sayHowdy, 1000, 5000);

console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////
// Recreate the built in array method, forEach: Write a function that takes as parameters an array, arr, and a callback function, cb.
// The forEach function will iterate through arr passing each element and its index as arguments to cb.

// Create a variable named delays and assign to it an array with the numbers 2000, 5000, 0, and 3500 (in that order).

// Write a function, delayLog, that takes as input a delayTime and an index, i.
// When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).

// Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

const delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i) {
  setTimeout(() => { console.log(`printing element ${i}`); }, delayTime)
}

forEach(delays, delayLog);  // Start of Challenge 4
                            // End of Challenge 4
                            // printing element 2
                            // printing element 0
                            // printing element 3
                            // printing element 1


console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////
// Write a function changeColor that when invoked will first check if the current page background color is "rgb(221, 238, 255)".
// If it is, it changes the color to "rgb(255, 238, 221)". If it isn't, it sets the color to "rgb(221, 238, 255)".

// Add a click event listener to button #1 above (it has an id of "activate"). On click, the button should log to the console "clicked #1".
// It should also set up a click event listener on button #2 (id of "color"). That listener should log to console "clicked #2" and then call the changeColor function you just created.

// Clear the console and hit the 'Run with JS' button. Look at what code has run by analyzing the console. Then try to change the background color by clicking button #2.
// What needs to happen for the button to work?

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

function changeColor() {
  var rgbBackgroundColor = document.body.style.background
  if (rgbBackgroundColor === 'rgb(221, 238, 255)') {
    document.body.style.background = 'rgb(255, 238, 221)';
  } else {
    document.body.style.background = 'rgb(221, 238, 255)';
  }
}
// add listener each time if click one time everything works if click second time everything breaks etc.
function activateBtnCallBack() {
  console.log('clicked #1');
  document.getElementById('color')
    .addEventListener('click', function () {
      console.log('clicked #2');
      changeColor();
    });
}
document.getElementById('activate')
  .addEventListener('click', activateBtnCallBack);

// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////
// In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar.

// Modify the function ajaxSimulate to take an id and a callback function as input.
// After the database array, set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

// Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

// Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback.
// Immediately after, log to the console the value of dataReceived. What do you expect it to be?

// Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.

///* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(() => callback(database[id]), 0);
}
// ...your code below

function storeData(data) {
  dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log('dataReceived', dataReceived);

console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////
// Perform a GET request to the Bandsintown API (hosted by swaggerhub)
// https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0
// (follow this link and then make sure 'UI' is sellected at the upper left, to read how to use their API) to search for your favorite band.
// For the 'app_id', use the string 'jshp'.

// Then in the returned JSON, find the URL for the image associated with the band and display it in the DOM.

// Make sure to use 'https' for JSBIN to allow the request. There is a div with the ID 'ch2' for you to target.
// If you want, you can view this div by opening the HTML pane, by clicking the HTML button at the top.

///* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below

fetch('https://rest.bandsintown.com/artists/50cent?app_id=jshp')
  .then(function (response) {
    return response.json()
  }).then(function (data) {
    document.getElementById('ch2').innerHTML = data.image_url;
  })

console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////
// Perform a GET request to the Bandsintown API (found here) to search and find all events associated with your favorite artist. For the 'app_id', use the string 'jshp'.

// Then use the returned JSON object to display all the names of the venues hosting the events in a list in the DOM.

// Make sure to use 'https' for JSBIN to allow the request. There is a div with the ID 'ch3' for you to target.

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below






console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////
// Perform a GET request to the Bandsintown API (found here) to search and find all events associated with your favorite artist. For the 'app_id', use the string 'jshp'.

// This time, use the returned JSON object to select ONLY the events that will happen within the United States, and render them to the DOM.

// Make sure to use 'https' for JSBIN to allow the request. There is a div with the ID 'ch4' for you to target.

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below







console.log('End of Challenge 9');
// */// (do not alter this line)


