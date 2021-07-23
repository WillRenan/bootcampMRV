const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){
  it('Soma dois números',function(){

    const math = new Math();
    try{
    assert.equal(math.sum(5,5), 10);
    } catch(error){
      console.log(error)
    }
  });
});