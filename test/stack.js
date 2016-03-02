var collections = require('../lib/index');
var expect = require('chai').expect;


describe('A Stack object', function() {
  
  describe('as Stack type', function() {

    it('should inherit from Iterable', function() {
      var stack = new collections.Stack();
      expect(stack).to.be.instanceof(collections.Iterable);
    });
    
    it('should push additional elements on top of its head', function() {
      var stack = new collections.Stack();
      stack.push('world');
      expect(stack.push('hello')).to.equal(stack);
      expect(stack.toArray()).to.deep.equal(['hello', 'world']);
    });

    it('should pop elements from its head', function() {
      var stack = new collections.Stack();
      stack.push('world');
      stack.push('hello');
      stack.push(123);
      expect(stack.pop()).to.equal(123);
      expect(stack.toArray()).to.deep.equal(['hello', 'world']);
      stack.pop();
      stack.pop();
      expect(stack.toArray()).to.deep.equal([]);
      expect(stack.pop.bind(stack)).to.throw('NoSuchElementException');
    });
    
    it('should throw when pop from empty', function() {
      var empty = new collections.Stack();
      expect(empty.pop.bind(empty)).to.throw('NoSuchElementException');
    });
  });

  
  
  describe('as Iterable type', function() {
    
    it('should not iterate empty', function() {
      var stack = new collections.Stack();
      var iter = stack.iterator();
      expect(iter.hasNext()).to.not.be.ok;
      expect(iter.next.bind(iter)).to.throw('NoSuchElementException');
    });
    
    it('should iterate over its elements', function() {
      var stack = new collections.Stack();
      stack.push('world');
      stack.push('hello');
      stack.push(123);
      var iter = stack.iterator();
      expect(iter.hasNext()).to.be.ok;
      expect(iter.next()).to.equal(123);
      expect(iter.next()).to.equal('hello');
      expect(iter.next()).to.equal('world');
    });
  });

  
  
  describe('as Traversable type', function() {
    var empty = new collections.Stack();
    var stack = new collections.Stack();
    stack.push('world');
    stack.push('hello');
    stack.push(123);
    
    it('should apply given function foreach of its elements', function() {
      var effects = 0;
      stack.foreach(function(elem) { effects = effects + elem; });
      expect(effects).to.equal('123helloworld');
    });

    it('should know if empty', function() {
      expect(empty.isEmpty()).to.be.ok;
      expect(stack.isEmpty()).to.not.be.ok;
    });

    it('should know its head', function() {
      expect(empty.head.bind(empty)).to.throw('NoSuchElementException');
      expect(stack.head()).to.equal(123);
    });

    it('should know its tail', function() {
      expect(empty.tail.bind(empty)).to.throw('NoSuchElementException');
      expect(stack.tail().toArray()).to.deep.equal(['hello', 'world']);
    });

    it('should know its size', function() {
      expect(empty.size()).to.equal(0);
      expect(stack.size()).to.equal(3);
    });

    it('should map its elements by applying a given function', function() {
      var transform = function(elem) { 
        return elem + 4; 
      };
      expect(empty.map(transform).size()).to.equal(0);
      expect(stack.map(transform).toArray()).to.deep.equal([127, 'hello4', 'world4']);
    });
  });
});