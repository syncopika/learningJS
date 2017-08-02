// 1.1 Is Unique

// attempt 1. use a hashmap
// O(N) solution?
function isUnique(input){
	
	var hash = {};
	
	for(var i = 0; i < input.length; i++){
		if(hash[input[i]] !== undefined){
			hash[input[i]]++;
			
			if(hash[input[i]] > 0){
				return false;
			}
			
		}else{
			hash[input[i]] = 0;
		}
	}
	/* you can skip this step for tiny optimization?
	for(char in hash){
		if(hash[char] > 0){
			return false;
		}
	}
	*/
	//console.log(hash);
	return true;
}

// attempt 2. no data structures 
// ~O(N^2) solution?
function isUnique2(input){
	for(var i = 0; i < input.length-1; i++){
		for(var j = i+1; j < input.length; j++){
			if(input[i] === input[j]){
				return false;
			}
		}
	}
	return true;
}

// 1.1 tests
console.log("1.1 TESTS ==============================");
console.log("aaabbb is unique: " + isUnique('aaabbb'));
console.log("abcdefg is unique: " + isUnique('abcdefg'));
console.log("123abc is unique: " + isUnique('123abc'));
console.log("1233bc is unique: " + isUnique('1233bc'));
console.log("----------------------------------------");
console.log("aaabbb is unique: " + isUnique2('aaabbb'));
console.log("abcdefg is unique: " + isUnique2('abcdefg'));
console.log("123abc is unique: " + isUnique2('123abc'));
console.log("1233bc is unique: " + isUnique2('1233bc'));
console.log("----------------------------------------\n");


// 1.2 check permutation
// check if string b is a permutation of string a 
// attempt 1.
// O(N)? 3 separate for loops
function checkPerm(a, b){
	
	// we already know they can't be permutations if they are
	// different length
	if(a.length !== b.length){
		return false;
	}
	
	// make hash map of str a, compare against str b
	var hash1 = {};
	var hash2 = {};
	
	for(var i = 0; i < a.length; i++){
		if(hash1[a[i]] === undefined){
			hash1[a[i]] = 0;
		}else{
			hash1[a[i]]++;
		}
	}
	
	for(var j = 0; j < b.length; j++){
		if(hash2[b[j]] === undefined){
			hash2[b[j]] = 0;
		}else{
			hash2[b[j]]++;
		}
	}
	
	// compare hashes
	for(prop in hash1){
		if(hash1[prop] !== hash2[prop]){
			return false;
		}
	}
	
	return true;
}

// 1.2 tests
console.log("1.2 TESTS ==============================");
console.log("aaabbb and ababab are permutations: " + checkPerm('aaabbb', 'ababab')); // true
console.log("aaabbb and abbab are permutations: " + checkPerm('aaabbb', 'abbab')); // false
console.log("abcd and abca are permutations: " + checkPerm('abcd', 'abca')); // false
console.log("aaacbb and ababab are permutations: " + checkPerm('aaacbb', 'ababab')); // false
console.log("abcdefg and dfgecba are permutations: " + checkPerm('dfgecba', 'abcdefg')); // true
console.log("123abc and 124cba are permutations: " + checkPerm('123abc', '124cba')); // false
console.log("1233bc and 1bc332 are permutations: " + checkPerm('1233bc', '1bc332')); // true
console.log("1233bc and 1bc3322 are permutations: " + checkPerm('1233bc', '1bc3232')); // false 
console.log("----------------------------------------\n");


// 1.3 URLify 
// replace spaces with '%20'. the length of the true string is given as 2nd argument.

function urlify(input, len){
	return input.substring(0, len).split(' ').join('%20');
}

function urlify2(input, len){
	
	var newStr = "";
	
	for(var i = 0; i < len; i++){
		if(input[i] !== " "){
			newStr += input[i];
		}else{
			newStr += "%20";
		}
	}
	
	return newStr;
}

// 1.3 TESTS
console.log("1.3 TESTS ==============================");
console.log(urlify("Mr John Smith    ", 13));
console.log(urlify2("Mr John Smith    ", 13));
console.log("----------------------------------------\n");

// 1.4 Palindrome Permutation
// determine if a string is a permutation of a palindrome

function permpal(string){
	
	if(string.length <= 1){
		return true;
	}
	
	// change case, ignore spaces in string. modify it first 
	string = string.toLowerCase().split(' ').join('');
	//console.log(string);
	// hash the string. 
	var hash = {};
	for(var i = 0; i < string.length; i++){
		if(hash[string[i]]){
			hash[string[i]]++;
		}else{
			hash[string[i]] = 1;
		}
	}
	//console.log(hash);
	// then check if length of string is odd or even.
	if(string.length % 2 === 0){
		// if length is even, there must be an even number of all unique chars in the string 
		for(char in hash){
			if(hash[char] % 2 !== 0){
				return false;
			}
		}
	}else{
		// if odd num of chars, there will always only 
		// be 1 unique char that's an odd num, and the rest 
		// will have an even number 
		var count = {'even': 0, 'odd': 0};
		for(char in hash){
			if(hash[char] % 2 === 0){
				count['even']++;
			}else{
				count['odd']++;
			}
		}
		if(count['odd'] === 1){
			return true;
		}
	}
	
	return false;
}

// 1.4 TESTS
console.log("\n1.4 TESTS ==============================");
console.log("Tact Coa is a permutation of a palindrome: " + permpal("Tact Coa")); // true
console.log("Tact bCoa is a permutation of a palindrome: " + permpal("TactbCoa")); // false
console.log("----------------------------------------\n");

// 1.5 One Away - check if str b is one edit away from str a
// edit can be - removal, addition, or replacement 
// considered true even if 0 edits (i.e. str a is the same as str b)

// attempt 1 
function oneAway(a, b){
	
	// check lengths. if diff more than 1, then definitely false.
	if(Math.abs(b.length - a.length) > 1){
		return false;
	}
	
	// if the strings are the same length, just need to check for 1 replacement .
	// this means one string will have 1 different char from other string 
	// is this part O(N^2)?
	if(a.length === b.length){
		var count1 = 0; // keep track of different chars 
		var count2 = 0;
		
		// check b against a
		for(var i = 0; i < a.length; i++){
			if(b.indexOf(a[i]) < 0){
				count++;
			}
		}
		
		// check a against b 
		for(var i = 0; i < b.length; i++){
			if(a.indexOf(b[i]) < 0){
				count2++;
			}
		}
		return (count1 <= 1) && (count2 <= 1); // if count is just 1 or 0, then the strings are one away 
	}
	
	// if different lengths, need to check that only one char is different between the two strings  
	// hash each string, find the larger one, and compare with the smaller one
	var hash1 = hashString(a, 1);
	var hash2 = hashString(b, 1);
	var count = 0;
	
	var largerHash = (Object.keys(hash1).length > Object.keys(hash2).length) ? hash1 : hash2;
	var smallerHash = (largerHash == hash1) ? hash2 : hash1;
	
	for(character in largerHash){
		
		if(smallerHash[character] === undefined){
			count++;
		}
		
		// if the difference in occurrences of a char > 0, (i.e. one str has 2 a's and the other has 1.)
		// increment count as well 
		if(Math.abs(largerHash[character] - smallerHash[character]) > 0){
			count++;
		}
	}
	return (count <= 1); // we want a difference of only 1 char 
}

// helper function to hash a string 
function hashString(input, counter){
	
	var hash = {};
	
	for(var i = 0; i < input.length; i++){
		if(hash[input[i]] >= 0){
			hash[input[i]]++;
		}else{
			hash[input[i]] = counter;
		}
	}
	return hash;
}

// 1.5 tests
console.log("1.5 TESTS ==============================");
console.log("aaabbb and ababab are one away: " + oneAway('aaabbb', 'ababab')); // true
console.log("aaabbb and ababad are one away: " + oneAway('aaabbb', 'ababad')); // true
console.log("aaa and abc are one away: " + oneAway('aaa', 'abc')); // false
console.log("abaa and abc are one away: " + oneAway('abaa', 'abc')); // false
console.log("aaabbb and abbab are one away: " + oneAway('aaabbb', 'abbab')); // true
console.log("aba and ab are one away: " + oneAway('aba', 'ab')); // true
console.log("abcdef and abcd are one away: " + oneAway('abcdef', 'abcd')); // false
console.log("123abc and 124dba are one away: " + oneAway('123abc', '124dba')); // false
console.log("----------------------------------------\n");


// 1.6 string compression
// remove duplicates of letters in str
// include count of characters, i.e. aabcccccaaa -> a2b1c5a3

function compress(input){
	
	var newStr = "";
	var currChar = input[0];
	var count = 0;
	
	for(var i = 0; i < input.length; i++){
		
		if(input[i] === currChar){
			count++;
		}else{
			
			newStr += currChar;
			newStr += count;
			
			// reset currChar and count
			count = 1;
			currChar = input[i];	
		}
		
		// for strings with all the same char or the last bit of chars that are all the same in a string
		if(i === input.length - 1){
			newStr += currChar + count;
		}
		
	}
	return newStr;
}

// this one only compresses the string
function compress2(input){
	
	var str = '';
	
	for(var i = 0; i < input.length; i++){
		if(i === input.length - 1){
			str += input[i];
		}else if(input[i] === input[i+1]){
			continue;
		}else{
			str += input[i];
		}
	}
	return str;
}

console.log("1.6 TESTS ==============================");
console.log("aaabbbbbbccc compressed is: " + compress('aaabbbbbbccc')); // abc
console.log("aaa compressed is: " + compress('aaa')); // a
console.log("aaabbbbbbcccd compressed is: " + compress('aaabbbbbbcccd')); //abcd
console.log("----------------------------------------\n");



// 1.8 zero matrix 
// if a cell is 0, make its whole row and column 0 for an MxN matrix. 
function zeroMatrix(matrix){
	
	// keep track of columns and rows where there are 0s
	// important because it prevents zeroing out more columns and rows than needed.
	var colSeen = [];
	var rowSeen = [];
	
	for(var i = 0; i < matrix.length; i++){
		
		// matrix length indicates the number of rows 
		for(var j = 0; j < matrix[i].length; j++){
			
			if(matrix[i][j] === 0 && colSeen.indexOf(i) < 0 && rowSeen.indexOf(j) < 0){
				// make the column 0 
				for(var k = 0; k < matrix.length; k++){
					matrix[k][j] = 0; // j is the column 
				}
				
				// make the row 0 
				for(var l = 0; l < matrix[i].length; l++){
					matrix[i][l] = 0;
				}
				
				colSeen.push(i);
				rowSeen.push(j);
			}
		}
	}
	
	return matrix;
}

// 1.8 TESTS
function printMatrix(matrix){
	for(var i = 0; i < matrix.length; i++){
		console.log(matrix[i]);
	}
}

var a =
	[
		[1, 1, 1, 1, 1],
		[1, 1, 1, 0, 1],
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1]
	];

var b = 
	[
		[1, 1, 1, 1, 1],
		[1, 1, 1, 0, 1],
		[1, 1, 1, 1, 1],
		[1, 0, 1, 1, 1]
	];

console.log("1.8 TESTS ==============================");
printMatrix(zeroMatrix(a));
/* should look like: 
	[
		[1, 1, 1, 0, 1],
		[0, 0, 0, 0, 0],
		[1, 1, 1, 0, 1],
		[1, 1, 1, 0, 1]
	];
*/
console.log("----------------------------------------");
printMatrix(zeroMatrix(b));
/* should look like: 
	[
		[1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0],
		[1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0]
	];
*/
console.log("----------------------------------------\n");


// 1.9 String rotation
// check is string2 is a rotation of string1 
// use only one call to an isSubstring method (returns t or f if one str is substring of another) 

function strRot(str1, str2){
	
	// make sure to check str1 and str2 first!
	if(str1.length !== str2.length){
		return false;
	}
	
	// notice that in a rotation, substrings of a substring can't just be placed arbitrarily 
	// somewhere within the string. it can only be at either the front end or back end. 
	// therefore, you can just add two of the normal strings together, and then you will have 
	// a string that has all of the possible rotations as substrings!
	var allRots = str1 + str1;
	// this should work the same as a function called isSubstring(a, b)
	if(allRots.indexOf( str2 ) > -1){
		return true;
	}
	return false;
}

// if I were allowed to use substring more than once...
function strRot2(str1, str2){
	
	var result = "";
	
	for(var i = 0; i < str1.length; i++){	
		result += str1[i];	
		// get all the chars up to the current index (var result), and append the rest of the chars
		// after the current index as a substring to the front of var result. then check.
		// console.log(result);
		if((str1.substring(i+1) + result) === str2){
			return true;
		}
	}
	return false;
}

// 1.9 TESTS
console.log("1.9 TESTS ==============================");
console.log("erbottlewat is a rotation of waterbottle: " + strRot("waterbottle", "erbottlewat"));
console.log("ttlewaterbo is a rotation of waterbottle: " + strRot("waterbottle", "ttlewaterbo"));
console.log("watbottler is a rotation of waterbottle: " + strRot("waterbottle", "watbottler"));
console.log("----------------------------------------\n");



