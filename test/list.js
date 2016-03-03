var iter = require('../lib/iter');
var list = require('../lib/list');
var expect = require('chai').expect;


describe('A List object', function() {

  var fixture = {
    nil: new list.List(),
    empty: list.List.empty(),
    list: list.List('paolo', 345, 'angioletti')  
  };

  
  describe('as List type', function() {
    it('should inherit from Iterable', function() {
      expect(fixture.nil).to.be.instanceof(iter.Iterable);
      expect(fixture.list).to.be.instanceof(iter.Iterable);
    });

    it('should create Nil node', function() {
      expect(fixture.empty).to.be.instanceof(list.Nil);
    });

    it('should create Cons node', function() {
      expect(fixture.list).to.be.instanceof(list.Cons);
    });

    it('should prepend a given element', function() {
      expect(fixture.list.cons('hello').toArray()).to.deep.equal(['hello', 'paolo', 345, 'angioletti']);
    });

    it('should prepend a given prefix list', function() {
      var prefix = list.List(1, 2, 'hello');
      expect(fixture.list.concat(prefix).toArray()).to.deep.equal([1, 2, 'hello', 'paolo', 345, 'angioletti']);
    });
  });
  
  
  
  describe('as Iterable type', function() {
    
    it('should not iterate when empty', function() {
      var iter = fixture.nil.iterator();
      expect(iter.hasNext()).to.not.be.ok;
      expect(iter.next.bind(iter)).to.throw('NoSuchElementException');
    });
    
    it('should iterate over its elements', function() {
      var iter = fixture.list.iterator();
      expect(iter.hasNext()).to.be.ok;
      expect(iter.next()).to.equal('paolo');
      expect(iter.next()).to.equal(345);
      expect(iter.next()).to.equal('angioletti');
    });  
  });

  
  describe('as Traversable type', function() {

    it('should apply given function foreach of its elements', function() {
      var effects = 0;
      fixture.list.foreach(function(elem) { effects = effects + elem; });
      expect(effects).to.deep.equal('0paolo345angioletti');
    });

    it('should know if empty', function() {
      expect(fixture.nil.isEmpty()).to.be.ok;
      expect(fixture.list.isEmpty()).to.not.be.ok;
    });
    
    it('should know its head', function() {
      expect(fixture.nil.head.bind(fixture.nil)).to.throw('NoSuchElementException');
      expect(fixture.list.head()).to.equal('paolo');
    });

    it('should know its tail', function() {
      expect(fixture.nil.tail.bind(fixture.nil)).to.throw('NoSuchElementException');
      expect(fixture.list.tail().toArray()).to.deep.equal([345, 'angioletti']);
    });
    
    it('should know its size', function() {
      expect(fixture.nil.size()).to.equal(0);
      expect(fixture.list.size()).to.equal(3);
    });

    it('should map its elements by applying a given function', function() {
      var tranform = function(elem) { return elem + 8; };
      expect(fixture.nil.map(tranform)).to.be.instanceof(list.Nil);
      expect(fixture.list.map(tranform).toArray()).to.deep.equal(['paolo8', 353, 'angioletti8']);
    });
  });
  
});

