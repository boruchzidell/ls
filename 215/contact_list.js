#! /usr/bin/env node
/*

Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

Examples
sortContacts([ "John Locke", "Thomas Aquinas", "David Hume", "Rene Descartes" ], "ASC")
[ "Thomas Aquinas", "Rene Descartes", "David Hume", "John Locke" ]

sortContacts(["Paul Erdos", "Leonhard Euler", "Carl Gauss"], "DESC")
[ "Carl Gauss", "Leonhard Euler", "Paul Erdos" ]

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []
Notes
An array with a single name should be trivially returned.
An empty array, or an input of null or undefined should return an empty array.
*/

function sortContacts(array, direction = 'ASC') {
  if (!Array.isArray(array)) return [];

  let stringArray = array.filter(element => typeof element === 'string' && element.length > 0);

  return stringArray.sort((a, b) => {
    let nameA = a;
    let nameB = b;

    let lastNameA = nameA.split(' ').slice(-1)[0].toLowerCase();
    let lastNameB = nameB.split(' ').slice(-1)[0].toLowerCase();

    let cleanedLastNameA = lastNameA.replace(/[^[a-z]/gi, '');
    let cleanedLastNameB = lastNameB.replace(/[^[a-z]/gi, '');

    if (direction === 'ASC') {
      if (cleanedLastNameA < cleanedLastNameB) return -1;
      if (cleanedLastNameA > cleanedLastNameB) return 1;
    } else {
      if (cleanedLastNameA > cleanedLastNameB) return -1;
      if (cleanedLastNameA < cleanedLastNameB) return 1;
    }
    return 0;
  });
}

//simple case
console.log(sortContacts([ "Bob Zy", 'Abe Abc' ], "ASC")); // [  'Abe Abc', "Bob Zy"]

// happy path
console.log(sortContacts(["John Locke", "Thomas Aquinas", "David Hume", "Rene Descartes"], "ASC"));
// [ "Thomas Aquinas", "Rene Descartes", "David Hume", "John Locke" ]

// descending, sorted by second letter
console.log(sortContacts(["Paul Erdos", "Leonhard Euler", "Carl Gauss"], "DESC"));
// [ "Carl Gauss", "Leonhard Euler", "Paul Erdos" ]

// non array input
console.log(sortContacts(123, 'ASC'));
// []

// missgin second input -> asc by default
console.log(sortContacts([ "Bob Zy", 'Abe Abc' ])); // [  'Abe Abc', "Bob Zy"]

// duplicate last names -> leave in orig order
console.log(sortContacts(["Bob Zy", 'George Abc', 'Abe Abc'], 'ASC'));
// [  'George Abc', 'Abe Abc', "Bob Zy"]

// non string elements -> remove
console.log(sortContacts([undefined, null, true, 123, "Bob Zy", 'Abe Abc'], 'ASC'));
// ['Abe Abc', "Bob Zy"]


// empty string -> remove
console.log(sortContacts(["Bob Zy", '', 'Abe Abc'], 'ASC'));
// ['Abe Abc', "Bob Zy" ]


// case insensitive
console.log(sortContacts(["Bob Zy", 'George abc', 'Abe Bcd'], 'ASC'));
// ['George abc', 'Abe Bcd', "Bob Zy" ]


// non letter chars -> ignore
console.log(sortContacts(["Bob Zy", 'George a-bc', "Abe B'cd"], 'ASC'));
// [ 'George a-bc', "Abe B'cd", 'Bob Zy' ]


// middle name or initial
console.log(sortContacts(["Bob asfsa Zy", 'George asf abc', 'Abe lkj Bcd'], 'ASC'));
// [ 'George asf abc', 'Abe lkj Bcd', "Bob asfsa Zy"]
