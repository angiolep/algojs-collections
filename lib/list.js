/**
 * The list module
 *
 * @module algojs-collections/list
 */
    
var iter = require('./iter');
 
/**
 * Create a linked list
 *
 * @classdesc A linked list which grows prepending elements and it's characterized by a head and a tail.
 * @augments module:algojs-collections/iter~Iterable
 *
 * @constructor
 * @deprecated Rather than this constructor, use the LinkedList.apply method instead.
 * @param {*} head is the first element of the list
 * @param {LinkedList} tail is the list containing the remaining elements of this list after the first one.
 */
var LinkedList = function(head, tail) {
  iter.Iterable.call(this);

  /**
   * @override
   */
  this.head = function() {
    return head;
  };

  /**
   * @override
   */
  this.tail = function() {
    return tail;
  };

  /**
   * @override
   */
  this.size = function () {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this.tail().size() + 1;
    }
  };

  
  /**
   * @override
   */
  this.map = function (fn) {
    if (this.isEmpty()) {
      return new Nil();
    } else {
      // TODO could the following recursive call be optimized?
      return this.tail().map(fn).cons(fn(this.head()));
    }
  };

  /**
   * Adds an element at the beginning of this list.
   *
   * @param {*} elem is the element to prepend.
   * @return {LinkedList} a list which contains elem as first element and which continues with this list.
   */
  this.cons = function (elem) {
    return new Cons(elem, this);
  };
  

  /**
   * Adds the elements of a given list in front of this list.
   *
   * @param {*} prefix is the list elements to prepend.
   * @return {LinkedList} a list resulting from the concatenation of the given list prefix and this list.
   */
  this.concat = function (prefix) {
    if (prefix.isEmpty()) {
      return this;
    } else {
      return this.concat(prefix.tail()).cons(prefix.head());
    }
  };


  /**
   * @override
   */
  this.iterator = function() {
    var it = new iter.Iterator();
    var current = this;
    it.hasNext = function() {
      return !(current instanceof Nil);
    };
    it.next = function() {
      if (this.hasNext()) {
        var next = current.head();
        current = current.tail();
        return next;
      } else {
        throw 'NoSuchElementException';
      }
    };
    return it;
  };
};

LinkedList.prototype = Object.create(iter.Iterable.prototype);
LinkedList.prototype.constructor = iter.Iterable;

/**
 * Create a list of the given elements
 *
 * @param {...*} elem as many element as you want
 * @return the list
 */
LinkedList.create = function (elem) {
  var len = arguments.length;
  var list = LinkedList.empty();
  for (var i = len - 1; i >= 0; i--) {
    list = list.cons(arguments[i]);
  }
  return list;
};

/**
 * Create an empty list
 *
 * @return the empty list
 */
LinkedList.empty = function () {
  return new Nil();
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Initialize an empty linked list
 * 
 * @classdesc An empty linked list
 * @augments module:algojs-collections/list~LinkedList
 * 
 * @constructor
 */ 
var Nil = function() {
  LinkedList.call(this);

  /**
   * @override
   */
  this.isEmpty = function() {
    return true;
  };

  /**
   * @override
   */
  this.head = function() {
    throw 'NoSuchElementException'
  };

  /**
   * @override
   */
  this.tail = function() {
    throw 'NoSuchElementException';
  };
};
Nil.prototype = Object.create(LinkedList.prototype);
Nil.prototype.constructor = LinkedList;




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * A non empty list characterized by a head and a tail.
 *
 * @private
 * @classdesc
 * @augments module:algojs-collections/list~LinkedList
 * 
 * @constructor
 * @param {*} head is the first element of the list
 * @param {LinkedList} tail is the list containing the remaining elements of this list after the first one.
 */
var Cons = function(head, tail) {
  LinkedList.call(this, head, tail);

  /**
   * @override
   */
  this.isEmpty = function() {
    return false;
  };
};
Cons.prototype = Object.create(LinkedList.prototype);
Cons.prototype.constructor = LinkedList;




module.exports = {
  /**
   * Initialize a LinkedList
   */
  LinkedList: LinkedList,
  
  /**
   * Construct an empty LinkedList
   *
   * @see module:algojs-collections/list~Nil
   */
  Nil: Nil,

  /**
   * Construct a non empty LinkedList
   *
   * @see module:algojs-collections/list~Cons
   */
  Cons: Cons
};