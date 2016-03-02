# algojs-collections
It provides Javascript implementation of fundamental collections.

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]


## Examples
Here there are some examples. API docs are published <a href="http://angiolep.github.io/algojs-collections" target="_blank">here</a>.

```
npm install algojs-collections --save
```


### LinkedList

```javascript
var collections = require('algojs-collections');

var list1 = collections.LinkedList.create();
var list2 = list1.cons('Riding', 'a');

var list3 = collections.LinkedList.create('is', 'nice');
var list4 = list3.cons('bike');

var list5 = list4.concat(list2);

var println = function(elem) { console.log(elem); };
list5.foreach(println);
```

[npm-image]: https://badge.fury.io/js/algojs-collections.svg
[npm-url]: https://badge.fury.io/js/algojs-collections

[travis-image]: https://travis-ci.org/angiolep/algojs-collections.svg?branch=master
[travis-url]: https://travis-ci.org/angiolep/algojs-collections

[coveralls-image]: https://coveralls.io/repos/github/angiolep/algojs-collections/badge.svg?branch=master
[coveralls-url]: (https://coveralls.io/github/angiolep/algojs-collections?branch=master)

