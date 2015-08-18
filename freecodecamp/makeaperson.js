//make a person

var Person = function(firstAndLast) {
  var a = firstAndLast.split(' ');
  var f = a[0];
  var l = a[1];
  this.getFirstName = function(){return f;};
  this.getLastName = function(){return l;};
  this.getFullName = function(){return f + ' ' + l;};
  this.setFirstName = function(first){f = first;};
  this.setLastName = function(last){l = last;};
  this.setFullName = function(firstAndLast){var b = firstAndLast.split(' '); f=b[0]; l=b[1];};
};

var bob = new Person('Bob Ross');
bob.getFullName();
