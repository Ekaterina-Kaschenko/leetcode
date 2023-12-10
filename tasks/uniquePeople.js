const people = [
  { age: 43, name: 'Peter' },
  { age: 12, name: 'Adam' },
  { age: 30, name: 'Michael' },
  { age: 99, name: 'Gandalf' },
  { age: 35, name: 'Michael' },
  { age: 30, name: 'Michael' }, //
  { age: 35, name: 'John' },
  { age: 12, name: 'Adam' } //
];

var uniquePeople = people.filter((person, index, array) => {
  var result = array.findIndex((p) => {
    return p.age === person.age && p.name === person.name;
  });

  return index === result;
});

console.log(uniquePeople);