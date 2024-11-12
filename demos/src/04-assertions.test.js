test('test obj', () => {
  const data = {
    name: 'marcos',
  }
  data.lastName = 'flores'
  expect(data).toEqual({
    name: 'marcos',
    lastName: 'flores',
  })
})

test('null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('boolean', () => {
  expect(true).toEqual(true)
  expect(true).toEqual(true)

  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect(false).toBeFalsy()
})

test('string', () => {
  expect('Alejandro').toMatch(/dro/)
})

test('list', () => {
  const numbers = [1, 2, 3]
  expect(numbers).toContain(2)
})
