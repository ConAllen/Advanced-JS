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

ron.lastName;
jane.lastName;





