// Function constructor practice


var con = {

    name: 'Con',
    yearOfBirth: 1988,
    job: 'developer'


};

// capital letter for a functon constructor creates an object

var Person =  function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    }

    Person.prototype.calculateAge = function(){

            console.log( 2018 - this.yearOfBirth);
    }


var con = new Person('con', 1988, 'developer');

con.calculateAge();
console.log(con);



//////////////////////// 2 ///////////////////////

var Lad = function( name, yearOfBirth, drink){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.drink = drink;

}

// this is an example of inheritance using the prototype chain
// attaching methods to the prototype
Lad.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Lad.prototype.lastName = 'smith';



var ron = new Lad('ron',1999, 'guinness');
var jane = new Lad ('jane', 1980,'designer');

console.log(ron.lastName);
console.log(jane.lastName);





//////////// 3  creating an object /////////////////////

var Friend = function (name,yearOfBirth, job){

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2018 - this.yearOfBirth);
    }
}

Friend.prototype.lastName = 'allen';

var con = new Friend("con",1988,'developer');
var jane = new Friend("jane",1996,'designer');

con.calculateAge();
jane.calculateAge();

console.log(jane.lastName,jane.name);


 ////// adding inheritance ////






///  Object.create



var personProto = {

    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

var con = Object.create(personProto);

con.name = 'con';
con.yearOfBirth = 1988;
con.job = "developer";

var jane = Object.create(personProto,
  {
    name: {value: 'jane'},
    yearOfBirth: {value:1999},
    job: {value: 'designer'}
  });






/*

  //////////////// Primitives vs Objects //////////////


  /// primitives
var a = 23;
var b = a;


a = 46;

console.log(a);
console.log(b);



/// objects
var obj1 = {

    name: 'con',
    age: 29
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age); //30
console.log(obj2.age); //30
 // object 2 is just a reference for object 1, not a new object so shares same answer


 //// Functions ////


 var age = 29;

 var obj = {

    name: 'Con',
    city: 'Dub'
 };

function change (a, b) {
    a = 30;
    b.city = 'san fran'
};

change(age, obj);

console.log(age); // 29
console.log(obj.city); // san fran



// when you pass a primitive it makes a simple copy of the result. no matter how many time you  chanage
// when you pass a obj you only pass a reference that points to the obj.


*/

/*

//////// Lecture: Passing functions as arguments/ callback functions   ///


var years = [1990, 1964, 1988, 2005, 1999];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++ ) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;

}

function calculateAge(el) {
    return 2018 - el;
}


function isFullAge(el) {
    return el >= 18;
}


function maxHeartRate(el) {

    if(el >= 18 && el <= 81){
    return Math.round(206.9 -
        (0.67 * el));
    } else {

        return -1;
    }
}




var ages = arrayCalc(years, calculateAge);

var fullAge = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAge);
console.log(rates);

*/

/*

///////////////Lecture: Functions returning First Class Functions /////


function interviewQuestion(job){

    if (job === 'designer'){
        return function(name){
            console.log( name + " , can you tell me what ux design is"+ "?");
        }
    } else if ( job === 'developer'){

        return function(name) {
            console.log(name + " , can you tell me what an opperator is" + " ?");
        }
    } else {
        return function(name){
            console.log( name + " , can you tell me what you do ?");
        }
    }
 }

var developerQuestion = interviewQuestion('developer');

var designerQuestion = interviewQuestion('designer');

var nameQuestion = interviewQuestion(name);

developerQuestion('con');
designerQuestion('lyn');

nameQuestion('roy');
interviewQuestion('developer')('con');
*/


/*

///////////////Lecture: IIFE (Imediately invoked Fuction Expresions) /////


// very handy tool for data privacy and data modularity

function game() {

    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function game() {

    var score = Math.random() * 10;
    console.log(score >= 5);
})();



(function game(goodLuck) {

    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/

/*
/////////////////////// CLOSURES ///////////////////////////


function retirement(retirementAge) {

    var a = " years untill retirement";

    return function(yearOfBirth) {

        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age)+ a);

    }
}

var retirementUS = retirement(66);




var retirementGermany =  retirement(65);

var retirementIceland =  retirement(67);

retirementUS(1988);
retirementGermany(1988);
retirementIceland(1988);


//////////////////// closures //////////////////////////

function careerBegin(careerStartAge) {

    var a = ' years till starts work '


    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;

        console.log((careerStartAge - age) + a);
    }
}

var careerBeginEU = careerBegin(16);

careerBeginEU(2010);

careerBegin(18)(2000);



/*

function interviewQuestion(job){

    if (job === 'designer'){
        return function(name){
            console.log( name + " , can you tell me what ux design is"+ "?");
        }
    } else if ( job === 'developer'){

        return function(name) {
            console.log(name + " , can you tell me what an opperator is" + " ?");
        }
    } else {
        return function(name){
            console.log( name + " , can you tell me what you do ?");
        }
    }
 }



 function interviewQuestion(job) {

    return function(name) {

        if (job === 'designer') {
            console.log( name + " , can you tell me what ux design is"+ "?");
        } else if ( job === 'developer') {
            console.log(name + " , can you tell me what an opperator is" + " ?");

        } else {
            console.log( name + " , can you tell me what you do ?");

        }
    }
 }



 interviewQuestion('developer')('con');


 function whatForDinner(country) {

    return function(meal) {

        if( country === 'italian'){

            console.log(  "tonight we will eat " + country  + " " + meal);
        }else if (country === 'france') {

            console.log(  "tonight we will eat "+ country  + " " + meal);
        }else if (country === 'ireland'){

            console.log(  'tonight we will have '+ country  + " " + meal);
        }else {

            console.log('what would you like for dinner?');
        }
    }

 }

 whatForDinner('italian')('pizza');
 whatForDinner('france')('snails');
 whatForDinner('ireland')('spuds');




 */

 /*


////////////       Lecture: Bind, Call, Apply /////////////


    var con = {

        name: 'con',
        age: 29,
        job: 'developer',

        presentation: function(style,timeOfDay) {
                if (style=== 'formal'){
                    console.log( 'Good ' + timeOfDay + ', Ladies and Gents! I\'m ' + this.name + ' and I\'m a ' + this.job + ',' + ' I\'m ' + this.age + " years old" + ' have a great ' + timeOfDay + '.' );
                } else if (style ==='friendly'){
                    console.log(' Hey whats going on?  I\'m ' + this.name + ' I\'m a ' + this.job + ' have a great ' + timeOfDay + '.' );
                }
        }


    }


    var jane = {

        name: 'jane',
        age: 22,
        job: 'designer'
    };

    con.presentation.call(jane, 'friendly', 'afternoon'); //method borrowing. set the 'this variable' to emilly

    con.presentation('formal', 'morning');

   // con.presentation.apply(jane, ['friendly', 'afternoon'];)


   var conFriendly = con.presentation.bind(con, 'friendly');

   conFriendly('morning');
   conFriendly('night');


   var janeFormal = con.presentation.bind(jane, 'formal');

   janeFormal('afternoon');





   ///////////////////// Quizz /////////////////////


   function Question (question,answers,correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;

    }

var q1 = new Question('Is javaScript the coolest?', ['yes','no'], 0 );

var q2 = new Question('Who is taking this challenge?', ['jane','jim','con'],2);

var q3 = new Question('what best describes coding?', ['difficult','fun', 'fun & difficult'], 3);


var arrQuestions = [q1, q2, q3];






function print_me(el, el2){

    return el;
    return el2;
}

print_me('foo','bar');

*/






var johnAge = 123;
var johnHeight = 126;

var conAge = 123;
var conHeight = 126;

var janeAge = 124;
var janeHeight = 126;


scoreJohn = johnHeight * johnAge;
scoreCon = conHeight * conAge;

scoreJane = janeHeight * janeAge;

if (scoreJohn > scoreCon){

    console.log( 'john is the winner with ' + scoreJohn);
}else if (scoreCon > scoreJohn) {

    console.log( 'con is the winner with ' + scoreCon )
} else if (scoreJane > scoreJohn && scoreJane > scoreCon) {
    console.log('jane is the winner with ' + scoreJane + ' points')
}else {
    console.log('its a draw');
}






// very cool


var years = [ 1999, 2001, 1988, 2017];


function arrayCalc(arr, fn) {

   var arrRes =  [];
   for(var i = 0; i < arr.length; i++) {
         arrRes.push(fn(arr[i]));
    }
     return arrRes;
}

function calculateAge(el) {

    return 2018 - el;
}

function isFullAge(el){

    return el >= 18;
}


var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(years, isFullAge);

console.log(fullAges.join('\n'));




function print_me(separator) {
    var args = Array.prototype.slice.call(arguments, 1);
    return args.join( '\n' );
  }

 var print = print_me(', ','foo',' bar');


 console.log(myStr.replace());




 var person = ['con',29,'developer', 'male',]

 console.log(person[0]);

 person.pop();


 var lastName = prompt("last name is?");

 console.log(lastName);





 var myName = 'con';

 function sayName(){

    console.log(myName);
 }

 sayName(
)


var con = {

        name: ['con'],
        age: 29,
        job: ' dev',

        sayName: function(){
            console.log(this.name);
        },

        addSecond: function(second){
           this.name.push(second);
           this.sayName();


        }


}

con.addSecond('allen');



function incrementNumber(){

    var currentNumber = 0;

    for(var i = 0;i < 4; i++){

        currentNumber++;
    }
}

incrementNumber();



for(var i = 0; i <=4; i++){

    console.log(i);
}








var years = [1988, 2010, 1992,2016];


function printFullAge(years) {
    var arr = [];
    var fullAges = [];


    for( var i = 0; i < years.length; i++) {
       arr[i] = 2018 - years[i];
    }

    for (var i = 0; i < arr.length; i++){

        if ( arr[i] >= 18) {
            console.log( arr[i] + ' this person is of right age');
            fullAges.push(true)
        } else {

            console.log(arr[i] + ' person is underage');
            fullAges.push(false)
        }

  }
  return fullAges;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge([1991,2005,2010]);



// create function printFullAge(years)

// excecute step 2 ,3, 4

// return array if (person < 18) {console.log()}



var con = {

    name: 'con',
    yearOfBirth: 1988,
    job: 'Dev'

};


var Person = function(name, yearOfBirth, job){

    this.name = name;
    this.yearOfBirth = yearOfBirth,
    this.job = job;

}



Person.prototype.calculateAge =
    function(){
        console.log(2018 - this.yearOfBirth);
}

var con = new Person('con',1988,'Dev');
var jane = new Person('jane',1999,"designer");

jane.calculateAge();
con.calculateAge();












