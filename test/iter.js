var trav = require('../lib/trav');
var iter = require('../lib/iter');
var expect = require('chai').expect;


var ex = 'UnsupportedOperationException';


describe('Iterator', function() {
  var iterator = new iter.Iterator();
  it('should define abstract methods', function() {
    expect(iterator.hasNext.bind(iterator)).to.throw(ex);
    expect(iterator.next.bind(iterator)).to.throw(ex);
  });
  
});


describe('Iterable', function(){
  var iterable = new iter.Iterable();
  
  it('should inherit from Traversable', function() {
    expect(iterable).to.be.instanceof(trav.Traversable);
  });
  
  it('should implement the foreach method' , function() {
    expect(iterable.foreach.bind(iterable)).to.throw(ex);
  });
});