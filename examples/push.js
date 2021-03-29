const { DataBase } = require('base.json');

const db = new DataBase('examples/database/push.json');

db.push('push', 'array', 'Hello');
// { "push": { "array": ["Hello"] } }

db.push('push', 'array', 'World');
// { "push": { "array": ["Hello", "World"] } } 

console.log(db.get('push', 'array').join(' '));
