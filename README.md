# algojs-collections
Fundamental data structures in Javascript.

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]


## API docs
API docs published <a href="http://angiolep.github.io/algojs-collections" target="_blank">here</a>.


### List
An highly optimized immutable linked list which grows by prepending elements.

```javascript
var algojs = require('algojs-collections');

var list1 = new algojs.List();
var list3 = new algojs.List('is', 'nice');

// prepend an element
var list4 = list3.cons('bike');
var list2 = list1.cons('a').cons('Riding');

// prepend a prefix list
var list5 = list4.concat(list2);

var println = function(elem) { console.log(elem); };
list5.foreach(println);
```


### Stack
A mutable stack which grows like a linked list

```javascript
var algojs = require('algojs-collections');

var stack = new algojs.Stack();
stack.push('hello');
stack.push('folks');

var folks = stack.pop();
```


[npm-image]: https://badge.fury.io/js/algojs-collections.svg
[npm-url]: https://badge.fury.io/js/algojs-collections

[travis-image]: https://travis-ci.org/angiolep/algojs-collections.svg?branch=master
[travis-url]: https://travis-ci.org/angiolep/algojs-collections

[coveralls-image]: https://coveralls.io/repos/github/angiolep/algojs-collections/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/angiolep/algojs-collections?branch=master

