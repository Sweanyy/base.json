const { DataBase } = require('base.json');

const db = new DataBase('examples/database/push.json', { autoSave: false });

db.push('push', 'array', 'Hello');
db.save();
// { "push": { "array": ["Hello"] } }

db.push('push', 'array', 'World');
db.save();
// { "push": { "array": ["Hello", "World"] } } 

console.log(db.get('push', 'array').join(' '));
// Hello World
