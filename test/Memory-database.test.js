const MemoryDatabase = require('../lib/Memory-database');

describe('memory database', () => {
  it('has store', () => {
    const database1 = new MemoryDatabase();
    expect(database1.store).toEqual({});
  });
});

