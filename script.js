// Function constructor practice

/*
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

  */




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



