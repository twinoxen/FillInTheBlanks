
// https://www.w3schools.com/js/js_objects.asp  // Simple explanation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects // in depth really good read! 🤓
describe('transverse objects and object reference', () => {
  const pizza = null

  test.skip('there is a variable "pizza" will an empty object', () => {
    expect(pizza).not.toBeNull()
  })

  test.skip('pizza object has property size and size is set to a string "large"', () => {
    // expect(pizza.size).not.toBeNull()
    // expect(pizza.size).toBe('large')
  })

  test.skip('pizza object has property crust and crust is set to a string "thin"', () => {
    // expect(pizza.crust).not.toBeNull()
    // expect(pizza.crust).toBe('thin')
  })

  test.skip('pizza object has property topping and topping is set to a string "pepperoni"', () => {
    // expect(pizza.topping).not.toBeNull()
    // expect(pizza.topping).toBe('pepperoni')
  })

  test.skip('pizza object has a method cook', () => {
    // a method is just a function on an object
    
    // expect(pizza.cook).not.toBeNull()
    // expect(pizza.cook instanceof Function).toBe(true)
  })

  test.skip('pizza object has property customer and custom is set to an object with a name property', () => {
    // expect(pizza.customer).not.toBeNull()
    // expect(pizza.customer instanceof Object).toBe(true)
    // expect(pizza.customer.name).toBe('Joe Shmoe')
  })
})