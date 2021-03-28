# INSTALLATION
```
npm install base.json
```

# EXAMPLES
```js
const { DataBase } = require('base.json');

const db = new DataBase('database/examples.json');
// { "name": { "data": "", "words": [] } }

db.set('name', 'data', 'value');
db.save();
// { "name": { "data": "value" } }

db.get('name', 'data');
db.save();
// value

db.push('name', 'words', 'hello');
db.save();
// { "name": { "data": "value", "words": [ "hello" ] } }

db.delete('name', 'words');
db.save();
// { "name": { "data": "value" } }

db.delete('name');
db.save();
// {}

db.delete();
db.save();
// {}
```
