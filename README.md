# INSTALLATION
```
npm install base.json
```

# SETUP
```js
const { DataBase } = require('base.json');

const db = new DataBase('database/example.json');
```

# EXAMPLES
```js
db.set('me.friends', 0);
// "me": { "friends": 0 }

db.get('me.friends');
// 0

db.add('me.friends', 50);
// "me": { "friends": 50 } 

db.set('me.weapons', []);
// "me": { "friends": 50, "weapons": [] } 

db.push('me.weapons', 'Pistol', 'UZI');
// "me": { "friends": 50, "weapons": [ "Pistol", "UZI" ] }

db.has('me.weapons');
// true
```

# FUNCTIONS
DataBase.add(key: string, value: number); <br>
DataBase.remove(key: string, value: number); <br>
Database.divide(key; string, value: number); <br>
DataBase.multiply(key: string, value: number); <br>
DataBase.modulus(key: string, value: number); <br>
DataBase.set(key: string, value: any); <br>
DataBase.get(key: string); <br>
DataBase.push(key: string, ...values: any); <br>
DataBase.has(key: string); <br>
DataBase.delete(...keys?: string); <br>