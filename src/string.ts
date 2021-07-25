import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

export function log(str) {
  console.log(str);
}

export function getPizzaTopping()
{
  return 'pepperoni'
}

export function yell(str)
{
  return str.toUpperCase()
} 

export function addWhiteSpace(str)
{
  return ' '+str+' '
}
export function removeWhiteSpace(str)
{
  return str.trim()
}
export function switchToppings(topping1, topping2)
{
  return topping1.replace(topping1, topping2)
}
export function has(stringimlookingfor, stringimsearching)
{
  return stringimsearching.includes(stringimlookingfor)
}