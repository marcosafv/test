describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })
  afterAll(() => {
    console.log('afterAll')
  })
  beforeEach(() => {
    console.log('beforeEach')
  })
  afterEach(() => {
    console.log('afterEach')
  })
  test('case 1', () => {
    expect(1 + 1).toBe(2)
  })
  test('case 2', () => {
    expect(1 + 2).toBe(3)
  })
  describe('other group', () => {
    beforeAll(() => {
      console.log('beforeAll2')
    })
    afterAll(() => {
      console.log('afterAll2')
    })
    test('case 3', () => {
      expect(1 + 3).toBe(4)
    })
    test('case 4', () => {
      expect(1 + 4).toBe(5)
    })
  })
})
