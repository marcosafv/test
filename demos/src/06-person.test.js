const Person = require('./06-person');

describe('Test Person', () => {
  let person
  beforeEach(() => {
    person = new Person('marcos', 45, 1.7)
  })

  test('should return down', () => {
    person.weight = 45
    const result = person.calcIMC()
    expect(result).toBe('down')
  })

  test('should return normal', () => {
    person.weight = 59
    const result = person.calcIMC()
    expect(result).toBe('normal')
  })

  test('should return zero', () => {
    person.weight = -25
    const result = person.calcIMC()
    expect(result).toBe('no found')
  })

  test('should return overweight', () => {
    person.weight = 75
    // Ajustar según la fórmula de IMC para que el resultado esté entre 25 y 26
    const result = person.calcIMC();
    expect(result).toBe('overweight')
  });

  test('should return overweight level 1', () => {
    person.weight = 85
    // Ajustar según la fórmula de IMC para que el resultado esté entre 27 y 29
    const result = person.calcIMC()
    expect(result).toBe('overweight level 1')
  });

  test('should return overweight level 2', () => {
    person.weight = 110
    // Ajustar según la fórmula de IMC para que el resultado esté entre 30 y 39
    const result = person.calcIMC();
    expect(result).toBe('overweight level 2');
  });

  test('should return overweight level 3', () => {
    person.weight = 140
    // Ajustar según la fórmula de IMC para que el resultado sea 40 o más
    const result = person.calcIMC()
    expect(result).toBe('overweight level 3')
  });

  test('should return not found', () => {
    person.weight = 0
    person.height = 0
    // Ajustar según la fórmula de IMC para que el resultado sea 40 o más
    const result = person.calcIMC()
    expect(result).toBe('not found')
  });
})
