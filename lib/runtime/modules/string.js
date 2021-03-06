'use strict';

/* Implementation of Juttle built-in String module. */

var _ = require('underscore');
var errors = require('../errors');
var values = require('../values');

var string = {
    charAt: function(string, index) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.charAt', 'string', string);
        }
        if (!values.isNumber(index)) {
            throw errors.typeErrorFunction('String.charAt', 'number', index);
        }

        return string.charAt(index);
    },

    charCodeAt: function(string, index) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.charCodeAt', 'string', string);
        }
        if (!values.isNumber(index)) {
            throw errors.typeErrorFunction('String.charCodeAt', 'number', index);
        }

        return string.charCodeAt(index);
    },

    concat: function() {
        _.each(arguments, function(arg) {
            if (!values.isString(arg)) {
                throw errors.typeErrorFunction('String.concat', 'string', arg);
            }
        });

        return Array.prototype.join.call(arguments, '');
    },

    fromCharCode: function() {
        _.each(arguments, function(argument) {
            if (!values.isNumber(argument)) {
                throw errors.typeErrorFunction('String.fromCharCode', 'number', argument);
            }
        });

        return String.fromCharCode.apply(null, arguments);
    },

    indexOf: function(string, searchString) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.indexOf', 'string', string);
        }
        if (!values.isString(searchString)) {
            throw errors.typeErrorFunction('String.indexOf', 'string', searchString);
        }

        return string.indexOf(searchString);
    },

    lastIndexOf: function(string, searchString) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.lastIndexOf', 'string', string);
        }
        if (!values.isString(searchString)) {
            throw errors.typeErrorFunction('String.lastIndexOf', 'string', searchString);
        }

        return string.lastIndexOf(searchString);
    },

    length: function(string) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.length', 'string', string);
        }

        return string.length;
    },

    match: function(string, regexp) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.match', 'string', string);
        }
        if (!values.isRegExp(regexp)) {
            throw errors.typeErrorFunction('String.match', 'regexp', regexp);
        }

        return string.match(regexp);
    },

    replace: function(string, searchValue, replaceValue) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.replace', 'string', string);
        }
        if (!values.isString(searchValue) && !values.isRegExp(searchValue)) {
            throw errors.typeErrorFunction('String.replace', 'string or regular expression', searchValue);
        }
        if (!values.isString(replaceValue)) {
            throw errors.typeErrorFunction('String.replace', 'string', replaceValue);
        }

        return string.replace(searchValue, replaceValue);
    },

    search: function(string, regexp) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.search', 'string', string);
        }
        if (!values.isRegExp(regexp)) {
            throw errors.typeErrorFunction('String.search', 'regexp', regexp);
        }

        return string.search(regexp);
    },

    slice: function(string, start, end) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.slice', 'string', string);
        }
        if (!values.isNumber(start)) {
            throw errors.typeErrorFunction('String.slice', 'number', start);
        }
        if (typeof end !== 'undefined' && !values.isNumber(end)) {
            throw errors.typeErrorFunction('String.slice', 'number', end);
        }

        return string.slice(start, end);
    },

    split: function(string, separator) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.split', 'string', string);
        }
        if (!values.isString(separator) && !values.isRegExp(separator)) {
            throw errors.typeErrorFunction('String.split', 'string or regular expression', separator);
        }

        return string.split(separator);
    },

    substr: function(string, start, length) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.substr', 'string', string);
        }
        if (!values.isNumber(start)) {
            throw errors.typeErrorFunction('String.substr', 'number', start);
        }
        if (typeof length !== 'undefined' && !values.isNumber(length)) {
            throw errors.typeErrorFunction('String.substr', 'number', length);
        }

        return string.substr(start, length);
    },

    toLowerCase: function(string) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.toLowerCase', 'string', string);
        }

        return string.toLowerCase();
    },

    toString: function(value) {
        if (!values.isString(value)) {
            throw errors.typeErrorFunction('String.toString', 'string', value);
        }

        return values.toString(value);
    },

    toUpperCase: function(string) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.toUpperCase', 'string', string);
        }

        return string.toUpperCase();
    },

    trim: function(string) {
        if (!values.isString(string)) {
            throw errors.typeErrorFunction('String.trim', 'string', string);
        }

        return string.trim();
    },
};

module.exports = string;
