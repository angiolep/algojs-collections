# algojs-collections
It provides Javascript implementation of fundamental sorting algorithms.

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

## Examples
Here there are some examples. API docs are published <a href="http://angiolep.github.io/algojs-collections" target="_blank">here</a>.

```
npm install algojs-collections --save
```

```javascript
var collections = require('algojs-collections');

var stack = new collections.Stack();
stack.push(39);
stack.push(12);
stack.push(99);
console.log(stack.top());
```

[npm-image]: https://badge.fury.io/js/algojs-collections.svg
[npm-url]: https://badge.fury.io/js/algojs-collections

[travis-image]: https://travis-ci.org/angiolep/algojs-collections.svg?branch=master
[travis-url]: https://travis-ci.org/angiolep/algojs-collections

[coveralls-image]: https://coveralls.io/repos/github/angiolep/algojs-collections/badge.svg?branch=master
[coveralls-url]: (https://coveralls.io/github/angiolep/algojs-collections?branch=master)

