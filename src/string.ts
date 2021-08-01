export function log(str) {
  console.log(str);
}

export function getPizzaTopping() {
  return "pepperoni";
}

export function yell(str) {
  return str.toUpperCase();
}

export function addWhiteSpace(str) {
  return " " + str + " ";
}

export function removeWhiteSpace(str) {
  return str.trim();
}

export function switchToppings(topping1, topping2) {
  return topping1.replace(topping1, topping2);
}

export function has(stringimlookingfor, stringimsearching) {
  return stringimsearching.includes(stringimlookingfor);
}

export function indexer(paragraph, paraPart) {
  return paragraph.indexOf(paraPart);
}

export function matcher(paragraph, paraPart) {
  const myReg = new RegExp(paraPart, "gi");
  return paragraph.match(myReg);
}

export function slicer(paragraph:string, paraStart, paraEnd) {
  return paragraph.slice(paraStart, paraEnd)
}

export function splitter(paragraph:string, splitspot) {
  return paragraph.split(splitspot)
}
  