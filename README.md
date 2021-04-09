# I'M REWRITING ALL THE SOURCE CODE

# INSTALLATION
```
npm install base.json
```

# EXAMPLES
```js
const { DataBase } = require('base.json');

const db = new DataBase('database/examples.json', { autoSave: false });
// { "name": { "data": "", "words": [] } }

db.set('name', 'data', 'value');
db.save();
// { "name": { "data": "value", "words : [] } }

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

# LINKS
[Discord](https://discord.gg/RKtjmFXZ)
