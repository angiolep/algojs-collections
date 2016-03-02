var collections = require('../lib/index');
var expect = require('chai').expect;


describe('LinkedList', function() {

  var nil = collections.LinkedList.empty();
  var list = collections.LinkedList.create('paolo', 345, 'angioletti');

  describe('as LinkedList', function() {
    it('should extend Iterable', function() {
      expect(nil).to.be.an.instanceof(collections.Iterable);
      expect(list).to.be.an.instanceof(collections.Iterable);
    });

    it('should create Nil node', function() {
      expect(nil).to.be.an.instanceof(collections.Nil);
    });

    it('should create Cons node', function() {
      expect(list).to.be.an.instanceof(collections.Cons);
    });

    it('should prepend a given element', function() {
      expect(list.cons('hello').toArray()).to.deep.equal(['hello', 'paolo', 345, 'angioletti']);
    });

    it('should prepend a given prefix list', function() {
      var prefix = collections.LinkedList.create(1, 2, 'hello');
      expect(list.concat(prefix).toArray()).to.deep.equal([1, 2, 'hello', 'paolo', 345, 'angioletti']);
    });
  });
  
  
  describe('as Iterable', function() {
    it('should iterate over its elements', function() {
      var nilIter = nil.iterator();
      expect(nilIter.hasNext()).to.not.be.ok;
      expect(nilIter.next.bind(nilIter)).to.throw('NoSuchElementException');

      var listIter = list.iterator();
      expect(listIter.hasNext()).to.be.ok;
      expect(listIter.next()).to.equal('paolo');
      expect(listIter.next()).to.equal(345);
      expect(listIter.next()).to.equal('angioletti');
    });  
  });

  
  describe('as Traversable', function() {

    it('should apply given function foreach of its elements', function() {
      var sideEffects = [];
      list.foreach(function(elem) { sideEffects.push(elem + 8); });
      expect(sideEffects).to.deep.equal(['paolo8', 353, 'angioletti8']);
    });

    it('should know if empty', function() {
      expect(nil.isEmpty()).to.be.ok;
      expect(list.isEmpty()).to.not.be.ok;
    });
    
    it('should know its head', function() {
      expect(nil.head.bind(nil)).to.throw('NoSuchElementException');
      expect(list.head()).to.equals('paolo');
    });

    it('should know its tail', function() {
      expect(nil.tail.bind(nil)).to.throw('NoSuchElementException');
      expect(list.tail().head()).to.equals(345);
    });
    
    it('should know its size', function() {
      expect(nil.size()).to.equal(0);
      expect(list.size()).to.equal(3);
    });

    it('should map its elements by applying a given function', function() {
      var incr = function(elem) { return elem + 8; };
      expect(nil.map(incr)).to.be.an.instanceof(collections.Nil);
      expect(list.map(incr).toArray()).to.deep.equal(['paolo8', 353, 'angioletti8']);
    });
  });
  
});

