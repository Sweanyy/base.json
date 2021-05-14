const { existsSync, readFileSync, writeFileSync } = require('fs');

const _get = require('lodash.get');
const _set = require('lodash.set');
const _unset = require('lodash.unset');

class DataBase {
    constructor(file, options = {}) {
        if (!file || !typeof file === 'string') throw new TypeError('Invalid DataBase file.');

        file.startsWith('./') ? file = file : file = './' + file;

        if (!existsSync(file)) {
            try {
                writeFileSync(file, JSON.stringify({}, null, 4));
            } catch {
                throw new TypeError('Invalid DataBase file.');
            };
        };

        this.options = { file };
        this.database = JSON.parse(readFileSync(this.options.file, 'utf8'));
    };

    add(key, value) {
        var newValue = this.form('get', key);

        newValue += value;

        this.form('set', key, newValue);

        this.save();
    };

    remove(key, value) {
        var newValue = this.form('get', key);

        newValue -= value;

        this.form('set', key, newValue);

        this.save();
    };

    divide(key, value) {
        var newValue = this.form('get', key);

        newValue /= value;

        this.form('set', key, newValue);

        this.save();
    };

    multiply(key, value) {
        var newValue = this.form('get', key);

        newValue *= value;

        this.form('set', key, newValue);

        this.save();
    };

    modulus(key, value) {
        var newValue = this.form('get', key);

        newValue %= value;

        this.form('set', key, newValue);

        this.save();
    };

    set(key, value) {
        this.form('set', key, value);

        this.save();
    };

    get(key) {
        return this.form('get', key);
    };

    push(key, ...values) {
        var newValue = this.form('get', key);

        for (const value of values) {
            newValue.push(value);
        };

        this.form('set', key, newValue);

        this.save();
    };

    has(key) {
        return Boolean(this.form('get', key));
    };

    delete(...keys) {
        if (keys) {
            for (const key of keys) {
                this.form('unset', key);
            };
        } else this.database = {};

        this.save();
    };

    form(method, key, value) {
        if (method === 'set') return _set(this.database, key, value);
        else if (method === 'unset') return _unset(this.database, key);
        else if (method === 'get') return _get(this.database, key);
    };

    save() {
        return writeFileSync(this.options.file, JSON.stringify(this.database, null, 4));
    };
};

module.exports = { DataBase };