(function() {
  'use strict';
  // YOUR CODE HERE
  var getStopButton = document.getElementById('stopButton');
  var getSlowButton = document.getElementById('slowButton');
  var getGoButton = document.getElementById('goButton')

  var getStopBulb = document.getElementById('stopLight');
  var getSlowBulb = document.getElementById('slowLight')
  var getGoBulb = document.getElementById('goLight')
  
  
  getStopButton.addEventListener('click', function() {
    if (getStopBulb.style.backgroundColor === 'red') {
        getStopBulb.style.backgroundColor = 'black';
    } else {
        getStopBulb.style.backgroundColor = 'red';
    }
  })

// 2nd way: use Classlist.
// getStopBulb.classList.contains('stop') {
// getStopBulb.classList.remove('stop')

  getSlowButton.addEventListener('click', function() {
    if (getSlowBulb.classList.contains('slow')) {
        getSlowBulb.classList.remove('slow')
    } else {
        getSlowBulb.classList.add('slow')
    }
  })

  getGoButton.addEventListener('click', function() {
    if (getGoBulb.style.backgroundColor === 'green') {
        getGoBulb.style.backgroundColor = 'black';
    } else {
        getGoBulb.style.backgroundColor = 'green';
    }
  })

/*
When a user's mouse enters a button, log "Entered <textContent> button" to the console.
//When a user's mouse leaves a button, log "Left <textContent> button" to the console.
*/

getStopButton.addEventListener('mouseenter', function() {
  console.log(`Entered ${getStopButton.textContent} button`)
})
getStopButton.addEventListener('mouseleave', function() {
  console.log(`Left ${getStopButton.textContent} button`)
})

getSlowButton.addEventListener('mouseenter', function() {
  console.log(`Entered ${getSlowButton.textContent} button`)
})
getSlowButton.addEventListener('mouseleave', function() {
  console.log(`Left ${getSlowButton.textContent} button`)
})

getGoButton.addEventListener('mouseenter', function() {
  console.log(`Entered ${getGoButton.textContent} button`)
})
getGoButton.addEventListener('mouseleave', function() {
  console.log(`Left ${getGoButton.textContent} button`)
})


/*
Add **one** DOM event listener and **one** handler to log the state of each bulb.

- When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
- When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.
*/

var getControls = document.getElementById('controls') // get div id controls
var k = 1 // check variable; like a toggle

getControls.addEventListener('click', function (e) {
  if ((e.target.id === 'stopButton' || e.target.id === 'slowButton' || e.target.id === 'goButton') && k === 1) {
    console.log(`${e.target.textContent} bulb on`);
    k = 0;
  } else if ((e.target.id === 'stopButton' || e.target.id === 'slowButton' || e.target.id === 'goButton') && k === 0){
    console.log(`${e.target.textContent} bulb off`)
    k = 1;
  }
})

})();
