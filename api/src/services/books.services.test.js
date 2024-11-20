const BooksService = require('./books.service');

const fakeBooks = [{
  _id: 1,
  name: 'Book 1',
}];

// const MongoLibStub = {
//   getAll: () => [...fakeBooks],
//   create: jest.fn(),
// };

// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({ getAll: () => [...fakeBooks], create: jest.fn() })));

describe('Books Service', () => {
  let service = null;
  beforeEach(() => {
    service = new BooksService();
  });

  it('should get books', async () => {
    const books = await service.getBooks();
    console.log('Valor de books!!!', books);
    expect(books.length).toBeGreaterThan(0);
  });
});
