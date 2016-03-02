/**
 * The traversable module
 * 
 * @module traversable
 */

// TODO Could exception be const or symbols? Shall we create an Exception hierarchy?
var UnsupportedOperationException = 'UnsupportedOperationException';

/**
 * It initialize the base properties of any kind of collection
 * 
 * @abstract
 * @class
 * @classdesc A base trait of all kinds of collections.
 */
var Traversable = function () {
};

/**
 *
 * The foreach method is meant to traverse all elements of the collection, and
 * apply the given operation ``fn`` to each element. The invocation of `fn` is done
 * for its side effect only; in fact any function result of f is discarded by foreach.
 *
 * @abstract
 * @param {Function} fn is the function that is applied for its side-effect to every element. The result of function f is discarded.
 * @return {undefined}
 */
Traversable.prototype.foreach = function (fn) {
  throw UnsupportedOperationException;
};


/**
 * Tests whether this traversable collection is empty.
 * 
 * @abstract
 * @return {Boolean} true if the traversable collection contain no elements, false otherwise.
 */
Traversable.prototype.isEmpty = function () {
  throw UnsupportedOperationException;
};

/**
 * Selects the first element of this traversable collection.
 * 
 * @abstract
 * @return {*} the first element of this traversable collection.
 */
Traversable.prototype.head = function () {
  throw UnsupportedOperationException;
};

/**
 * Selects all elements except the first.
 *
 * @abstract
 * @return {Traversable} a traversable collection consisting of all elements of this traversable collection except the first one.
 */
Traversable.prototype.tail = function () {
  throw UnsupportedOperationException;
};

/**
 * The size of this traversable or iterator.
 *
 * @abstract
 * @return {Number} the number of elements in this traversable or iterator.
 */
Traversable.prototype.size = function () {
  throw UnsupportedOperationException;
};

/**
 * Builds a new collection by applying a function to all elements of this collection.
 *
 * @abstract
 * @param {Function} fn the function to apply to each element
 * @return {Traversable} a new collection resulting from applying the given function `fn` to each element of this collection and collecting the results.
 */
Traversable.prototype.map = function (fn) {
  throw UnsupportedOperationException;
};


/**
 * Create a traversable 
 * 
 */
module.exports.Traversable = Traversable;