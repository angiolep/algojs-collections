var collections = require('../lib/index');
var expect = require('chai').expect;


describe('A LinkedList object', function() {

  // object under test are immutable
  var nil = collections.LinkedList.empty();
  var list = collections.LinkedList.create('paolo', 345, 'angioletti');

  
  describe('as LinkedList type', function() {
    it('should inherit from Iterable', function() {
      expect(nil).to.be.instanceof(collections.Iterable);
      expect(list).to.be.instanceof(collections.Iterable);
    });

    it('should create Nil node', function() {
      expect(nil).to.be.instanceof(collections.Nil);
    });

    it('should create Cons node', function() {
      expect(list).to.be.instanceof(collections.Cons);
    });

    it('should prepend a given element', function() {
      expect(list.cons('hello').toArray()).to.deep.equal(['hello', 'paolo', 345, 'angioletti']);
    });

    it('should prepend a given prefix list', function() {
      var prefix = collections.LinkedList.create(1, 2, 'hello');
      expect(list.concat(prefix).toArray()).to.deep.equal([1, 2, 'hello', 'paolo', 345, 'angioletti']);
    });
  });
  
  
  
  describe('as Iterable type', function() {
    
    it('should not iterate when empty', function() {
      var iter = nil.iterator();
      expect(iter.hasNext()).to.not.be.ok;
      expect(iter.next.bind(iter)).to.throw('NoSuchElementException');
    });
    
    it('should iterate over its elements', function() {
      var iter = list.iterator();
      expect(iter.hasNext()).to.be.ok;
      expect(iter.next()).to.equal('paolo');
      expect(iter.next()).to.equal(345);
      expect(iter.next()).to.equal('angioletti');
    });  
  });

  
  describe('as Traversable type', function() {

    it('should apply given function foreach of its elements', function() {
      var effects = 0;
      list.foreach(function(elem) { effects = effects + elem; });
      expect(effects).to.deep.equal('0paolo345angioletti');
    });

    it('should know if empty', function() {
      expect(nil.isEmpty()).to.be.ok;
      expect(list.isEmpty()).to.not.be.ok;
    });
    
    it('should know its head', function() {
      expect(nil.head.bind(nil)).to.throw('NoSuchElementException');
      expect(list.head()).to.equal('paolo');
    });

    it('should know its tail', function() {
      expect(nil.tail.bind(nil)).to.throw('NoSuchElementException');
      expect(list.tail().toArray()).to.deep.equal([345, 'angioletti']);
    });
    
    it('should know its size', function() {
      expect(nil.size()).to.equal(0);
      expect(list.size()).to.equal(3);
    });

    it('should map its elements by applying a given function', function() {
      var tranform = function(elem) { return elem + 8; };
      expect(nil.map(tranform)).to.be.instanceof(collections.Nil);
      expect(list.map(tranform).toArray()).to.deep.equal(['paolo8', 353, 'angioletti8']);
    });
  });
  
});

