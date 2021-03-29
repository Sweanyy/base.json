const { existsSync, readFileSync, writeFileSync } = require('fs');

class DataBase
{
    constructor(file = '', options = {})
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

        this.options = { file, autoSave: options.autoSave };
        this.database = JSON.parse(readFileSync(this.options.file, 'utf8'));
    }

    add(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value && !value === 0 || !typeof value === 'number') throw new TypeError('Invalid DataBase value.'); 

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        db[data] += value;

        if (this.options.autoSave) this.save();
    }

    remove(name, data, value)
    { 
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value && !value === 0 || !typeof value === 'number') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        db[data] -= value;

        if (this.options.autoSave) this.save();
    }

    divide(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value && !value === 0 || !typeof value === 'number') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        db[data] /= value;

        if (this.options.autoSave) this.save();
    }

    multiply(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value && !value === 0 || !typeof value === 'number') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (typeof db[data] !== 'number') throw new TypeError('Invalid DataBase value.');

        db[data] *= value;

        if (this.options.autoSave) this.save();
    }

    set(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!data || !typeof data === 'string') throw new TypeError('Invalid DataBase data.');
        if (!value && !value === 0) throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        db[data] = value;

        if (this.options.autoSave) this.save();
    }

    get(name, data)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (data && !typeof data === 'string') throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (data && db[data]) return db[data];
        return db;
    }

    push(name, data, value)
    {
        if (!name || !typeof name === 'string') throw new TypeError('Invalid DataBase name.');
        if (!value && !value === 0) throw new TypeError('Invalid DataBase value.');

        const db = this.database[name];

        if (!data || !typeof db[data] === 'array') throw new TypeError('Invalid DataBase data.');

        db[data].push(value);

        if (this.options.autoSave) this.save();
    }

    delete(name, data)
    {
        if (!name) return this.database = {};
        if (!data) return delete this.database[name];

        delete this.database[name][data];

        if (this.options.autoSave) this.save();
    }

    save()
    {
        return writeFileSync(this.options.file, JSON.stringify(this.database, null, 4));
    }
}


module.exports = { DataBase };