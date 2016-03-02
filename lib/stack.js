/**
 * The stack module
 *
 * @module algojs-collections/stack
 */

var iter = require('./iter');


/** @private */
var Node = function(elem, next) {
  this.elem = elem;
  this.next = next;
};


/**
 * Create a mutable stack
 * 
 * @classdesc A stack implements a data structure which allows to store and retrieve objects in a last-in-first-out (LIFO) fashion.
 * @augments module:algojs-collections/iter~Iterable
 *
 * @constructor
 */
var Stack = function(head) {
  iter.Iterable.call(this);
  
  /**
   * Push an element on the stack.
   * 
   * @param {*} elem the element to push on the stack.
   * @return {Stack} this same stack with the new element added on top
   */
  this.push = function(elem) {
    var node = new Node(elem, head);
    head = node;
    return this;
  };

  /**
   * Remove the top element from this stack.
   * 
   * @return {*} the top element
   */
  this.pop = function() {
    if (head) {
      var elem = head.elem;
      head = head.next;
      return elem;
    }
    else {
      throw 'NoSuchElementException';
    }
  };

  /** @override */
  this.iterator = function() {
    var it = new iter.Iterator();
    var current = head;

    it.hasNext = function() {
      return current !== undefined;
    };

    it.next = function() {
      if (this.hasNext()) {
        var next = current.elem;
        current = current.next;
        return next;
      }
      else {
        throw 'NoSuchElementException';
      }
    };
    return it;
  };

  /** @override */
  this.head = function() {
    if (head) {
      return head.elem;
    }
    else {
      throw 'NoSuchElementException';
    }
  };

  /** @override */
  this.tail = function() {
    if (head) {
      return new Stack(head.next);
    }
    else {
      throw 'NoSuchElementException';
    }
  };

  /** @override */
  this.isEmpty = function() {
    return (head === undefined);
  };

  /** @override */
  this.map = function (fn) {
    /*var acc = new Stack();
    this.foreach(function(elem) { acc.push(fn(elem))});
    return acc;*/
    if (this.isEmpty()) {
      return new Stack();
    } 
    else {
      var t = this.tail().map(fn);
      return t.push(fn(this.head()));  
    }
  };
};

Stack.prototype = Object.create(iter.Iterable.prototype);
Stack.prototype.constructor = Stack;


module.exports = {
  /**
   * Construct an empty Stack
   *
   * @see module:algojs-collections/stack~Stack
   */
  Stack: Stack
};