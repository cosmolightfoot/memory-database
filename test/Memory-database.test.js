const MemoryDatabase = require('../lib/Memory-database');

describe('memory database', () => {
  let database1 = null;
  let objectToSave = null;
  let objectToSave2 = null;

  beforeEach(() => {
    database1 = new MemoryDatabase();
    objectToSave = {
      name: 'jonies',
      quantity: 1029 
    };
    objectToSave2 = {
      name: 'guses',
      quantity: 1 
    };
    // objectToSave3 = {
    //   name: 'fishes',
    //   quantity: 23 
    // };
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

  it('has a find by id method', () => {
    const id = database1.create(objectToSave);
    expect(database1.findById(id)).toEqual(
      { _id: id,
        name: 'jonies',
        quantity: 1029
      }
    );
  });

  it('returns list of all objects', () => {
    const id = database1.create(objectToSave);
    const id2 = database1.create(objectToSave2);
      
    expect(database1.find()).toEqual([ 
      { _id: id, ...objectToSave }, 
      { _id: id2, ...objectToSave2 }
    ]);
  });
});

