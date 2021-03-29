const { DataBase } = require('base.json');

const db = new DataBase('examples/database/push.json', { autoSave: false });

db.set('set', 'string', 'Hello');
// { "set": { "string": "Hello" } }

db.set('set', 'number', 0);
// { "set": { "string": "Hello", "number" : 0} } 

console.log(db.get('set', 'number'));
// 0
