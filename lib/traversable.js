/**
 * The traversable module
 * 
 * @module traversable
 */

var ex = 'UnsupportedOperationException';

/**
 * It initialize the base properties of any kind of collection
 * 
 * @abstract
 * @constructor
 * @classdesc A base trait of all kinds of collections.
 */
var Traversable = function () {
};

/**
 * Collection classes that implement Traversable just need to define this method;
 * all other methods can be inherited from Traversable.
 *
 * The foreach method is meant to traverse all elements of the collection, and
 * apply the given operation, f, to each element. The type of the operation is
 * ``Elem => U``, where Elem is the type of the collection’s elements and U is an
 * arbitrary result type. The invocation of f is done for its side effect only;
 * in fact any function result of f is discarded by foreach.
 *
 * @abstract
 * @param {Function} fn is the function that is applied for its side-effect to every element. The result of function f is discarded.
 * @return {undefined}
 */
Traversable.prototype.foreach = function (fn) {
  throw ex;
};


/**
 * Tests whether this traversable collection is empty.
 * 
 * @abstract
 * @return {Boolean} true if the traversable collection contain no elements, false otherwise.
 */
Traversable.prototype.isEmpty = function () {
  throw ex;
};

/**
 * Selects the first element of this traversable collection.
 * 
 * @abstract
 * @return {*} the first element of this traversable collection.
 */
Traversable.prototype.head = function () {
  throw ex;
};

/**
 * Selects all elements except the first.
 *
 * @abstract
 * @return {Traversable} a traversable collection consisting of all elements of this traversable collection except the first one.
 */
Traversable.prototype.tail = function () {
  throw ex;
};

/**
 * The size of this traversable or iterator.
 *
 * @abstract
 * @return {Number} the number of elements in this traversable or iterator.
 */
Traversable.prototype.size = function () {
  throw ex;
};

/**
 * Builds a new collection by applying a function to all elements of this collection.
 *
 * @abstract
 * @param {Function} fn the function to apply to each element
 * @return {Traversable} a new collection resulting from applying the given function f to each element of this collection and collecting the results.
 */
Traversable.prototype.map = function (fn) {
  throw ex;
};


/**
 * Create a traversable 
 * 
 * @type {Traversable}
 */
module.exports = Traversable;