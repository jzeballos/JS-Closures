/******************************************************************************\
	#PROBLEM-01
\******************************************************************************/

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};

/****** INSTRUCTIONS PROBLEM 1 ******/
/* Above you're given a function that returns another function which has a
closure over the name variable. Invoke outer saving the return value into
another variable called 'inner'. */

var inner = outer;

//Once you do that, invoke inner.

inner;


/******************************************************************************\
	#PROBLEM-02
\******************************************************************************/


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

/****** INSTRUCTIONS PROBLEM 2 ******/
/* Above you're given a callFriend function that returns another function.
Create a makeCall function that when invoked logs 'Calling Jake at 435-215-9248'
in your console. */

function makeCall() {
  var number='435-215-9248';
  return callFriend;
}

/******************************************************************************\
	#PROBLEM-03
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Write a function called makeCounter that makes the following code work
properly. */

//Code Here

//Uncomment this once you make your function


function makeCounter() {
  var i=0;
  return function() {
    i++;
    return i;
  }
}


var count = makeCounter;
count; // 1
count; // 2
count; // 3
count; // 4


/******************************************************************************\
	#PROBLEM-04
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Inside the function called counterFactory return two functions that implement
up/down counter. The first function is called inc, this function is responsible
for incrementing the value once. The second function is called dec, this
function is responsible for decrementing the value by one. You will need to use
the module pattern to achieve this. */

function counterFactory(value) {
  var counter=0;
  function inc() {
    value++;
  }
  function dec() {
    value--;
  }

  return {
    inc: function() {
      inc(value)
      return value;
    },
    dec: function() {
      dec(value);
      return value;
    }
  };
}



counter = counterFactory(10);



/******************************************************************************\
	#PROBLEM-05
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

function motivation(firstname, lastname){

  var welcomeText = 'You\'re doing awesome, keep it up ';

  // return {
    function message() {
      return welcomeText + firstname + ' ' + lastname + '.';
    }
  // }
  // code message function here.


  //Uncommment this to return the value of your invoked message function
  return message();

}

motivation('Billy', 'Bob'); // 'Your doing awesome keep it up Billy Bob


/******************************************************************************\
	#PROBLEM-06
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 6 ******/
/* Inside the return create a publicMethod property that is a function that
invokes privateMethod. After you create the privateMethod. Invoke it by calling
module.publicMethod(); outside the module scope */

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: 'Utah'
  };

  var privateMethod = function(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  };

  // Anything that is being returned is made public and can be invoked from
	// outside our lexical scope

  return {
    publicMethod: function() {
      return privateMethod();
    }
  };

})();

// Uncomment this after you create your public method
  module.publicMethod();


/******************************************************************************\
	#PROBLEM-07
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs ( 0 then 1 then 2
then 3, etc). Run this code in your console to see what the output is. */

// To make this code work you will need to create a new scope for every iteration.



function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    newScope(i);
  }

  function newScope(i) {
    return setTimeout(function() {
      return console.log(i);
    }, i * 1000);
  }
}

timeOutCounter();

/******************************************************************************\
	#PROBLEM-08
\******************************************************************************/

var funcArray = [];

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

// function abc() {
//   for (var i = 0; i < 6; i++) {
//       funcArray[i] = createfunc(i);
//       // console.log(funcArray[i]);
//   }
//   function createfunc(i) {
//       return function() {
//         funcArray[i]=i;
//       }
//     }
//   }
//
//



function abc() {

  for (var i = 0; i < 6; i++) {
      createfunc(i);
  }
  
  function createfunc(i) {
    funcArray[i]= function() {
      return i;
    }
  }
}

abc();





// funcArray[0]() //0
// funcArray[1]() //1
// funcArray[2]() //2
// funcArray[3]() //3
// funcArray[4]() //4
// funcArray[5]() //5
