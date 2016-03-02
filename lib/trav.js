/**
 * The traversable module
 * 
 * @module algojs-collections/trav
 */

// TODO Could exception be const or symbols? Shall we create an Exception hierarchy?
var UnsupportedOperationException = 'UnsupportedOperationException';


/**
 * Initialize a traversable
 * 
 * @abstract
 * @classdesc Base abstract class of all kinds of collections.
 * 
 * @constructor
 */
var Traversable = function () {
  
  /**
   *
   * The foreach method is meant to traverse all elements of the traversable, and
   * apply the given operation ``fn`` to each element. The invocation of `fn` is done
   * for its side effect only; in fact any function result of f is discarded by foreach.
   *
   * @abstract
   * @param {Function} fn is the function that is applied for its side-effect to every element. The result of function f is discarded.
   * @return {undefined}
   */
  this.foreach = function (fn) {
    throw UnsupportedOperationException;
  };


  /**
   * Tests whether this traversable traversable is empty.
   *
   * @abstract
   * @return {Boolean} true if the traversable traversable contain no elements, false otherwise.
   */
  this.isEmpty = function () {
    throw UnsupportedOperationException;
  };

  /**
   * Selects the first element of this traversable traversable.
   *
   * @abstract
   * @return {*} the first element of this traversable traversable.
   */
  this.head = function () {
    throw UnsupportedOperationException;
  };

  /**
   * Selects all elements except the first.
   *
   * @abstract
   * @return {Traversable} a traversable traversable consisting of all elements of this traversable traversable except the first one.
   */
  this.tail = function () {
    throw UnsupportedOperationException;
  };

  /**
   * The size of this traversable.
   *
   * @abstract
   * @return {Number} the number of elements in this traversable.
   */
  this.size = function () {
    throw UnsupportedOperationException;
    // TODO optimize recursive calls
    /*if (this.isEmpty()) {
      return 0;
    } else {      
      return this.tail().size() + 1;
    }*/
  };

  /**
   * Builds a new traversable by applying a function to all elements of this one.
   *
   * @abstract
   * @param {Function} fn the function to apply to each element
   * @return {Traversable} a new traversable resulting from applying the given function `fn` to each element of this traversable and collecting the results.
   */
  this.map = function (fn) {
    throw UnsupportedOperationException;
  };

  /**
   * Converts this traversable to an array.
   *
   * @return {Array} an array containing all elements of this collection.
   */
  this.toArray = function () {
    var arr = [], i = 0;
    this.foreach(function(elem) { 
      arr[i] = elem;
      i = i + 1;
    });
    return arr;
  };
};



module.exports = {
  /**
   * Create a traversable
   *
   * @see module:algojs-collections/trav~Traversable
   */
  Traversable: Traversable
};