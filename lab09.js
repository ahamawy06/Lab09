// Q1
var characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (var i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

// Q2
var firstName1 = 'Harry';
var house1 = 'Gryffindor';
console.log(`Welcome, ${firstName1} of ${house1}!`);

// Q3
var characterName1 = 'Hermione';
console.log(characterName1.toLowerCase());
console.log(characterName1.toUpperCase());

// Q4
var spell1 = ' Expelliarmus ';
console.log(trimming());

// Q5
var quote = 'I solemnly swear that I am up to no good';
console.log(marauders, quote); // 'swear'

// Q6
var first = 'Ron';
var last = 'Weasley';
let combined = firstName.concat('', lastName);
console.log(Ron, combined);

// Q7
var sentence1 = 'Draco is a good wizard';
console.log(replace('good', 'bad'));

// Q8
var houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

// Q9
var spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

// Q10
var professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
var newProfessors = professors.slice(1, 3);
console.log(newProfessors);

// Q11
var students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2); // Removes 'Seamus' and 'Dean'
console.log(students);

// Q12
var phrase1 = ' Mischief Managed ';
console.log(phrase1.trim().toLowerCase().concat(' - Harry'));

// Q13
var wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

// Q14
var message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
var hogwarts = message.slice(11, 19); // 'Hogwarts'
console.log(hogwarts.concat(' Castle'));
