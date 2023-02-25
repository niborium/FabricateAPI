class FabricateAPI {
  constructor() {
    this.data = [];
    this.id = 0;
  }

  // Get all items from the mock API
  getAll() {
    return JSON.parse(localStorage.getItem('fabricateAPI')) || this.data;
  }

  // Get a specific item by ID
  get(id) {
    const items = this.getAll();
    return items.find((item) => item.id === id);
  }

  // Add a new item to the mock API
  add(item) {
    const items = this.getAll();
    item.id = ++this.id;
    items.push(item);
    localStorage.setItem('fabricateAPI', JSON.stringify(items));
  }

  // Update an existing item in the mock API
  update(id, item) {
    const items = this.getAll();
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      item.id = id;
      items[index] = item;
      localStorage.setItem('fabricateAPI', JSON.stringify(items));
    }
  }

  // Delete an item from the mock API
  delete(id) {
    const items = this.getAll();
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      localStorage.setItem('fabricateAPI', JSON.stringify(items));
    }
  }
}

export default FabricateAPI;
