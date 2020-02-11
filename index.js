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

  for (var i = 0; i < facts.length; i++) {
    devuelve.push(`${facts[i]}!!!`);
  }

  return devuelve;
}
