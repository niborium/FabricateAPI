# FabricateAPI

FabricateAPI is a mock API that can be used for testing purposes. It mimics the behavior of a real API and allows you to store and retrieve data using `localStorage`.

## Installation

To install FabricateAPI, run the following command in your project directory:

`npm install fabricateapi`

## Usage

To use FabricateAPI in your project, you need to import it into your code. You can do this using the `import` statement:

```javascript
import FabricateAPI from 'fabricateapi';

const api = new FabricateAPI();

This creates a new instance of the FabricateAPI class, which you can use to interact with the mock API.

The FabricateAPI class has the following methods:

getAll()
Retrieves all items from the mock API. Returns an array of items.

const items = api.getAll();
console.log(items);

get(id)
Retrieves a specific item from the mock API by ID. Returns the item if found, or undefined if not found.

const item = api.get(1);
console.log(item);

add(item)
Adds a new item to the mock API. The item parameter is an object that represents the new item. The add method automatically assigns an ID to the new item.

const newItem = { name: 'John', age: 30 };
api.add(newItem);

update(id, item)
Updates an existing item in the mock API. The id parameter is the ID of the item to be updated, and the item parameter is an object that represents the updated item.

const updatedItem = { name: 'Johnny', age: 31 };
api.update(1, updatedItem);

delete(id)
Deletes an item from the mock API by ID.

api.delete(1);
```

License
FabricateAPI is released under the MIT License.
