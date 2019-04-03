const uuid = require('uuid/v4');

class MemoryDatabase{
  constructor() {
    this.store = {};
  }

  create(objectToSave) {
    const id = uuid();
    this.store[id] = {
      _id: id,
      ...objectToSave
    };
    return id;
  }

  findById(id) {
    return this.store[id];
  }
  
  find() {
    return Object.values(this.store);
  }

  findByIdAndUpdate(id, updatedObject) {
    const newObject = {
      _id: id, 
      ...updatedObject
    };
    this.store[id] = newObject;
    return newObject;
  }

  deleteById(id) {
    delete this.store[id];
  }

  dropStore() {
    this.store = {};
  }
}

module.exports = MemoryDatabase;
