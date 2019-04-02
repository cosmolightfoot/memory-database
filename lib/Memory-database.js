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

}

module.exports = MemoryDatabase;
