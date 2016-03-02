var trav = require('../lib/traversable');
var iter = require('../lib/iterable');
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
  it('should extends the Traversable class', function() {
    expect(iterable).to.be.an.instanceof(trav.Traversable);
  });
  it('should implement the foreach methods' , function() {
    expect(iterable.foreach.bind(iterable)).to.throw(ex);
  });
});