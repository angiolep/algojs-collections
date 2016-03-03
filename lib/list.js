/**
 * The linked list module
 *
 * @module algojs-collections/list
 */
    
var iter = require('./iter');
 
/**
 * Initialize a linked list
 * 
 * @private
 * @classdesc The base class of linked list
 * @augments module:algojs-collections/iter~Iterable
 *
 * @abstract
 * @constructor
 * @param {*} head is the first element of the list
 * @param {LinkedList} tail is the list containing the remaining elements of this list after the first one.
 */
var ListBase = function(head, tail) {
  iter.Iterable.call(this);

  /** @override */
  this.head = function() {
    return head;
  };

  /** @override */
  this.tail = function() {
    return tail;
  };


  /** @override */
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
   * @return {ListBase} a list which contains elem as first element and which continues with this list.
   */
  this.cons = function (elem) {
    return new Cons(elem, this);
  };
  

  /**
   * Adds the elements of a given list in front of this list.
   *
   * @param {*} prefix is the list elements to prepend.
   * @return {ListBase} a list resulting from the concatenation of the given list prefix and this list.
   */
  this.concat = function (prefix) {
    if (prefix.isEmpty()) {
      return this;
    } else {
      return this.concat(prefix.tail()).cons(prefix.head());
    }
  };
  
  
  /** @override */
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
      } 
      else {
        throw 'NoSuchElementException';
      }
    };
    return it;
  };
};

ListBase.prototype = Object.create(iter.Iterable.prototype);
ListBase.prototype.constructor = iter.Iterable;



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Initialize an empty linked list
 * 
 * @classdesc An empty linked list
 * @augments module:algojs-collections/list~ListBase
 * 
 * @constructor
 */ 
var Nil = function() {
  ListBase.call(this);

  /** @override */
  this.isEmpty = function() {
    return true;
  };

  /** @override */
  this.head = function() {
    throw 'NoSuchElementException'
  };

  /** @override */
  this.tail = function() {
    throw 'NoSuchElementException';
  };
};
Nil.prototype = Object.create(ListBase.prototype);
Nil.prototype.constructor = ListBase;




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * A non empty list characterized by a head and a tail.
 *
 * @classdesc
 * @augments module:algojs-collections/list~ListBase
 * 
 * @constructor
 * @param {*} head is the first element of the list
 * @param {ListBase} tail is the list containing the remaining elements of this list after the first one.
 */
var Cons = function(head, tail) {
  ListBase.call(this, head, tail);

  /**
   * @override
   */
  this.isEmpty = function() {
    return false;
  };
};
Cons.prototype = Object.create(ListBase.prototype);
Cons.prototype.constructor = ListBase;




/**
 * Create an immutable linked list
 *
 * @classdesc A linked list which grows prepending additional elements and is characterized by a head and a tail.
 * @augments module:algojs-collections/list~ListBase
 *
 * @constructor
 * @param {...*} elem as many element as you want
 * @param {ListBase} tail is the list containing the remaining elements of this list after the first one.
 */
var List = function(elem) {
  // ListBase.call(head, tail);
  var len = arguments.length;
  var list = List.empty();
  for (var i = len - 1; i >= 0; i--) {
    list = list.cons(arguments[i]);
  }
  return list;
};
List.prototype = Object.create(ListBase.prototype);
List.prototype.constructor = ListBase;

/**
 * Create an empty list
 *
 * @return the empty list
 */
List.empty = function () {
  return new Nil();
};



module.exports = {
  /**
   * Construct a linked list
   * 
   * @see module:algojs-collections/list~List
   */
  List: List,

  /**
   * Construct an empty linked list
   *
   * @see module:algojs-collections/list~Nil
   */
  Nil: Nil,

  /**
   * Construct a non empty linked list
   *
   * @see module:algojs-collections/list~Cons
   */
  Cons: Cons
};
