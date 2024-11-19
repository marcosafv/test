const BooksService = require('./books.service');

describe('Books Service', () => {
  let service = null;
  beforeEach(() => {
    service = new BooksService();
  });

  it('should get books', async () => {
    const books = await service.getBooks();
    expect(books.length).toBeGreaterThan(0);
  });
});
