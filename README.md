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
// { "name": { "data": "value" } }

db.get('name', 'data');
// value

db.push('name', 'words', 'hello');
// { "name": { "data": "", "words": [ "hello" ] } }
```
