var collections = require('../lib/index');
var expect = require('chai').expect;


var ex = 'UnsupportedOperationException';

describe('Iterator', function() {
  var iterator = new collections.Iterator();
  it('should define abstract methods', function() {
    expect(iterator.hasNext.bind(iterator)).to.throw(ex);
    expect(iterator.next.bind(iterator)).to.throw(ex);
  });
  
});


describe('Iterable', function(){
  var iterable = new collections.Iterable();
  
  it('should extends Traversable', function() {
    expect(iterable).to.be.an.instanceof(collections.Traversable);
  });
  
  it('should implement the foreach method' , function() {
    expect(iterable.foreach.bind(iterable)).to.throw(ex);
  });
});