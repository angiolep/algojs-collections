/**
 * The iterable module
 *
 * @module iterable
 */

var trav = require('./traversable');

// TODO Could exception be const or symbols? Shall we create an Exception hierarchy?
var UnsupportedOperationException = 'UnsupportedOperationException';


/**
 * It creates an iterator which allows to iterate over an iterable collection.
 *
 * The iterator will have a ``hasNext`` method for checking if there is a next 
 * element available, and a ``next` method which returns the next element and 
 * discards it from the iterator.
 *
 * @abstract
 * @class
 * @classdesc A base trait for iterators.
 */
var Iterator = function() {
};


/**
 * Tests whether this iterator can provide another element.
 *
 * @abstract
 * @return ``true`` if a subsequent call to next will yield an element, ``false`` otherwise.
 */
Iterator.prototype.hasNext = function () {
  throw UnsupportedOperationException;
};


/**
 * Produces the next element of this iterator.
 *
 * @abstract
 * @return the next element of this iterator, if ``hasNext`` is true, undefined otherwise.
 */
Iterator.prototype.next = function () {
  throw UnsupportedOperationException;
};



/**
 * It creates an iterable collection which allows to step through one-by-one of its elements.
 *
 * @abstract
 * @class
 * @classdesc A base trait for iterable collections.
 * @augments module:traversable~Traversable
 */
var Iterable = function() {
  trav.Traversable.call(this);
};
Iterable.prototype = Object.create(trav.Traversable.prototype);
Iterable.prototype.constructor = trav.Traversable;

/**
 * Creates a new iterator over all elements contained in this iterable collection.
 *
 * @abstract
 * @return {Iterator} the iterator
 */
Iterable.prototype.iterator = function() {
  throw UnsupportedOperationException;
};

/**
 * @override
 */
Iterable.prototype.foreach = function (fn) {
  var iterator = this.iterator();
  while(iterator.hasNext()) {
    fn(iterator.next());
  }
};



/**
 * Create an iterable
 */
module.exports.Iterable = Iterable;

/**
 * Create an iterator
 * 
 */
module.exports.Iterator = Iterator;

