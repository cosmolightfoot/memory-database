const MemoryDatabase = require('../lib/Memory-database');

describe('memory database', () => {
  let database1 = null;
  let objectToSave = null;

  beforeEach(() => {
    database1 = new MemoryDatabase();
    objectToSave = {
      name: 'jonies',
      quantity: 1029 
    };
  });

  it('has store', () => {
    expect(database1.store).toEqual({});
  });

  it('has an id', () => {
    //call method "create" and pass an object as a value to a key named _id
    const id = database1.create(objectToSave);
    expect(database1.store[id]).toEqual(
      { _id: id,
        name: 'jonies',
        quantity: 1029
      }
    );
  });
});

