var Person = function(firstAndLast) { 
  var a = firstAndLast.split(' ');
  var f = a[0]; //this would be the first name
  var l = a[1];  //this would be the last name
  this.getFirstName = function(){return f;};
  this.getLastName = function(){return l;};
  this.getFullName = function(){return f + ' ' + l;};
  this.setFirstName = function(first){f = first;}; //f, which holds the old first name, now will have the argument 'first' as the new first name
  this.setLastName = function(last){l = last;};
  this.setFullName = function(firstAndLast){var b = firstAndLast.split(' '); f=b[0]; l=b[1];};
  //take the firstAndLast argument, split it just like for var a, and then reassign the new first and last name to vars f and l. 
}; 

var bob = new Person('Bob Ross');
bob.getFullName();
