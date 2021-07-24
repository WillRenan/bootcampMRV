const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;//import lib chai
const sinon = require('sinon');
//https://www.chaijs.com

//teste assíncrono com o callback de uma função 
var valor  = 0 ;
describe('Math class', function(){

  //Hooks- faz com que valores sejam resetado cl
  beforeEach(function(){
    valor = 0;
  })
  it('Soma dois números',function(done){ //Descrevendo o teste

    const math = new Math();
    this.timeout(3000);

    valor = 5;

    math.sum(5,valor,(value)=>{
      //assert.equal(value,10);
      expect(value).to.equal(10);
      done();
    });    
  });
  //it.only executa somente este teste
  //it.skip  pula este teste
  it(`Multiplicar
      dois números`, function(){
    const math = new Math();

    //assert.equal(math.multiply(valor,5), 25);
    expect(math.multiply(valor,5)).to.equal(0);
  })

  it('Conferindo objetos', function(){
    const obj ={
      nome:'Willian Renan'
    }
    const obj2 ={
      nome:'Willian Renan'
    }
    expect(obj).to.have.property('nome');//verificando a existência de uma propriedade específica 
    expect(obj).to.have.property('nome').equal('Willian Renan'); //verificando a existente do valor do objeto
    expect(obj).to.deep.equal(obj2);//comparando as propriedades de dois objetos
  })

  it.only('Verificando chamada de função', function(){
    const req = {};
    const res = {
      load: sinon.spy()
    };
    const math = new Math();
    math.printSum(req,res,5,5);
    expect(res.load.calledOnce).to.be.true; //fica observando se uma função foi executada ou não, neste caso é o método printSum do Math
    
 
  });
});