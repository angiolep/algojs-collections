/**
 * A stack implements a data structure which allows to store and 
 * retrieve objects in a last-in-first-out (LIFO) fashion.
 * 
 * @constructor
 */
var Stack = function() {

  /**
   * Push an element on the stack.
   * 
   * @param {*} elem the element to push on the stack.
   */
  this.push = function(elem) {
    throw 'UnsupportedOperationException';
  };

  /**
   * Removes the top element from the stack.
   * 
   * @return {*} the top element
   */
  this.pop = function() {
    throw 'UnsupportedOperationException';
  };

  /**
   * Returns the top element of the stack. This method will not remove the element from the stack.
   * 
   * @return {*} the top element
   */
  this.top = function() {
    throw 'UnsupportedOperationException';
  };
};

// TODO Stack.prototype = Object.create(Iterable.prototype);
// TODO Stack.prototype.constructor = Stack;