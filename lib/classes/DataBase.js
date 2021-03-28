const { existsSync, readFileSync, writeFileSync } = require('fs');

class DataBase
{
    constructor(file = '')
    {
        if (!file || !typeof file === 'string') throw new TypeError('Invalid DataBase file.');

        file.startsWith('./') ? file = file : file = './' + file;

        if (!existsSync(file)) 
        {
            try 
            {
                writeFileSync(file, JSON.stringify({}, null, 2));
            } catch 
            {
                throw new TypeError('Invalid DataBase file.');
            }
        }

        this.options = { file };
        this.database = JSON.parse(readFileSync(this.options.file, 'utf8'));
    }

    add(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value || !typeof value === 'number') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        return db[data] += value;
    }

    remove(name, data, value)
    { 
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value || !typeof value === 'number') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        return db[data] -= value;
    }

    divide(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value || !typeof value === 'number') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        return db[data] /= value;
    }

    multiply(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value || !typeof value === 'number') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        return db[data] *= value;
    }

    set(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value) throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        return db[data] = value;
    }

    get(name, data)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');

        const db = this.database[name];

        return db[data];
    }

    push(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!value) throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (!data || !typeof db[data] === 'array') throw new TypeError('Invalid DataBase data.');

        return db[data].push(value);
    }

    delete(name, data)
    {
        if (!name) return this.database = {};
        if (!data) return delete this.database[name];

        return delete this.database[name][data];
    }

    save()
    {
        return writeFileSync(this.options.file, JSON.stringify(this.database, null, 4));
    }
}


module.exports = { DataBase };