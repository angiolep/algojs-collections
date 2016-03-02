/**
 * It provides Javascript implementation of fundamental collections.
 * 
 * @module algojs-collections
 */


var trav = require('./trav');
var iter = require('./iter');
var list = require('./list');
var stack = require('./stack');


module.exports = {
  /**
   * Initialize a Traversable
   * 
   * @see module:algojs-collections/trav~Traversable
   */
  Traversable: trav.Traversable,

  /**
   * Initialize an Iterator
   *
   * @see module:algojs-collections/iter~Iterator
   */
  Iterator: iter.Iterator,
  
  /**
   * Initialize an Iterable
   * 
   * @see module:algojs-collections/iter~Iterable
   */
  Iterable: iter.Iterable,
  
  /**
   * Initialize a LinkedList
   * 
   * @see module:algojs-collections/list~LinkedList
   */
  LinkedList: list.LinkedList,

  /**
   * Construct an empty LinkedList
   *
   * @see module:algojs-collections/list~Nil
   */
  Nil: list.Nil,

  /**
   * Construct a non empty LinkedList
   *
   * @see module:algojs-collections/list~Cons
   */
  Cons: list.Cons,

  /**
   * Construct an empty LinkedList
   *
   * @see module:algojs-collections/stack~Stack
   */
  Stack: stack.Stack
};