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
  });

  it('has store', () => {
    expect(database1.store).toEqual({});
  });

  it('returns an object by id', () => {
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

  it('returns updated object', () => {
    const id = database1.create(objectToSave);
    const updatedObject = {
      name: 'george',
      quantity: 1029
    };
    expect(database1.findByIdAndUpdate(id, updatedObject)).toEqual(
      { _id: id,
        name: 'george',
        quantity: 1029
      }
    );
  });

  it('removes item from store by id', () => {
    const id = database1.create(objectToSave);
    database1.deleteById(id);
    expect(database1.store).toEqual({});
  });

  it('empties store', () => {
    /*eslint-disable*/
    const id = database1.create(objectToSave);
    const id2 = database1.create(objectToSave2);
    /*eslint-enable*/
    database1.dropStore();
    expect(database1.store).toEqual({});
  });
});

