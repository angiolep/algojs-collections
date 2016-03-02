var Traversable = require('../lib/traversable').Traversable;
var expect = require('chai').expect;


describe('Traversable', function(){
  it('should define abstract methods', function() {
    var t = new Traversable();
    var ex = 'UnsupportedOperationException';
    expect(t.foreach.bind(t)).to.throw(ex);
    expect(t.isEmpty.bind(t)).to.throw(ex);
    expect(t.head.bind(t)).to.throw(ex);
    expect(t.tail.bind(t)).to.throw(ex);
    expect(t.size.bind(t)).to.throw(ex);
    expect(t.map.bind(t)).to.throw(ex);
  });
});