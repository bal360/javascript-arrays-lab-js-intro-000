var kittens = ["Milo", "Otis", "Garfield"];
//define your array here
function destructivelyAppendKitten(Ralph) {
kittens.push("Ralph");
return kittens;
}
function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
// Add your functions and code here
