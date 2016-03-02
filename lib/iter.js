/**
 * The iterable module
 *
 * @module algojs-collections/iter
 */

var trav = require('./trav');

// TODO Could exception be const or symbols? Shall we create an Exception hierarchy?
var UnsupportedOperationException = 'UnsupportedOperationException';


/**
 * Initialize an iterator
 *
 * The iterator will have a ``hasNext`` method for checking if there is a next 
 * element available, and a ``next`` method which returns the next element and 
 * discards it from the iterator.
 *
 * @abstract
 * @classdesc Base abstract class for iterators
 * 
 * @constructor
 */
var Iterator = function() {
  /**
   * Tests whether this iterator can provide another element.
   *
   * @abstract
   * @return ``true`` if a subsequent call to next will yield an element, ``false`` otherwise.
   */
  this.hasNext = function () {
    throw UnsupportedOperationException;
  };


  /**
   * Produces the next element of this iterator.
   *
   * @abstract
   * @return the next element of this iterator, if ``hasNext`` is true, undefined otherwise.
   */
  this.next = function () {
    throw UnsupportedOperationException;
  };
};



/**
 * Initialize an iterable collection
 *
 * @abstract
 * @classdesc Base abstract class of all kinds of iterable collections which allow to step through one-by-one of their elements.
 * @augments module:algojs-collections/trav~Traversable
 * 
 * @constructor
 */
var Iterable = function() {
  trav.Traversable.call(this);

  /**
   * Creates a new iterator over all elements contained in this iterable collection.
   *
   * @abstract
   * @return {Iterator} the iterator
   */
  this.iterator = function() {
    throw UnsupportedOperationException;
  };

  /**
   * @override
   */
  this.foreach = function (fn) {
    var iterator = this.iterator();
    while(iterator.hasNext()) {
      fn(iterator.next());
    }
  };
};
Iterable.prototype = Object.create(trav.Traversable.prototype);
Iterable.prototype.constructor = trav.Traversable;





module.exports = {
  /**
   * Initialize an iterable
   * 
   * @see module:algojs-collections/iter~Iterable
   */
  Iterable: Iterable,

  /**
   * Initialize an iterator
   * 
   * @see module:algojs-collections/iter~Iterator
   */
  Iterator: Iterator
};


