require('date-utils');

var _ = require('lodash');
var chalk = require('chalk');

var gray = chalk.gray;


// formatting time, default [HH24:MI:SS]
var time = (function (format) {
  return function () {
    return new Date().toFormat(format);
  };
})('[HH24:MI:SS]');

var exports = module.exports = {};

// support color
var COLORS = ['red', 'gray', 'blue', 'cyan', 'white', 'green', 'yellow'];

var STATES = {
  error     : 'red',
  info      : 'cyan',
  warn      : 'yellow',
  success   : 'green'
};

// build color stream
COLORS.forEach(function (color) {
  exports[color] = (function (color) {
    return function (content, flag) {
      console.log((flag ? chalk.gray(time()) + ' ' : '') + chalk[color](content));
    }
  })(color);
});

// build state stream
Object.keys(STATES).forEach(function (state) {
  exports[state] = (function (state) {
    return function (content, options) {
      var color, what = '?';

      options =  _.assign({}, {
        time: true,                  // need to show time
        label: state.toUpperCase(),  // content's label
        all: false,                  // whether color print all text
        color: STATES[state]         // print's color
      }, options);

      color = options.color;

      what = (options.time ? gray(time()) + ' ' : '') +
             (chalk[color]('[' + options.label + ']') + ' ') +
             (options.all ? chalk[color](content) : content)

      console.log(what);
    }
  })(state);
});

exports.log = console.log;
exports.dir = console.dir;
exports.time = console.time;
exports.assert = console.assert;
exports.trace = console.trace;