// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var frases = [];

  for (var i = 0; i < musicians.length; i++) {
    frases.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return frases;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var devuelve = [];

  // esta es otra posible solucion
  // for (var i = 0; i < facts.length; i++) {
  //   devuelve.push(`${facts[i]}!!!`);
  // }

  var i = 0;

  while (i < facts.length) {
    devuelve.push(`${facts[i]}!!!`);
    i++;
  }

  return devuelve;
}

function iLoveTheBeatles(nro) {
  var devuelve = [];
  var i = 0;

  do {
    devuelve.push("I love the Beatles!");
    i++;
  } while (i < (15 - nro));

  return devuelve;
}
