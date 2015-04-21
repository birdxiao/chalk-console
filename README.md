# color-console
console text colorfully，and success, info, warn, or danger colorfully

## Install

```
npm install color-console --save/--save-dev
```

## Usage
```javascript
// var colorConsole = require('color-console');
var console = require('color-console');

// color console, support for [red, gray, blue, cyan, white, green, yellow] color
console.gray('day day study, day day up!');          // => [HH24:MI:MM] day day study, day day up!
console.blue('day day study, day day up!', false);   // day day study, day day up!

// state console, support for [error, info, warn, success]
console.error('day day study, day day up!');       // => [HH24:MI:MM] [ERROR] ...
```

## API
```javascript
console[color](content, hasTime)
```

support for `red`, `gray`, `blue`, `cyan`, `white`, `green`, `yellow`

params
- content: [String] text which need to console
- hasTime: [Boolean] whether to show time, default `true`


```javascript
console[state](content, options)
```

state support for `info`, `warn`, `error`, `success`

options
- time: [Boolean] whether to show time, default `true`
- label: [String] content's label, default === [state]
- all: [Boolean] whether to color content, default `false`
- color: [String] label's color, one of [red, gray, blue, cyan, white, green, yellow] color


```javascript
console.log('...');
console.dir('...');
console.time('...');
console.assert('...');
```



