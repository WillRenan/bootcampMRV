
/*  function btnClicado(){
    let name = prompt('qual seu nome?');
    alert(`Olá ${name} ! Para mais informações confira os links ao fim dessa página,obrigado!`);
    window.location.href='#info';
 } */
function randoNum(margin){
   console.log(`Margin == ${margin}`);
   return Math.random() * margin;
}

 function Mult (a, b = randoNum(a)){
   return a*b;
 }

 console.log(Mult(3,undefined));
 console.log(Mult(3,undefined));


var nome = 'cama';
var valor = 12;

 var obj = {
    [nome]:'meleca',
    [valor]:14
 };
 console.log(obj);


 const sum = (...rest) => rest.reduce((soma,value)=>soma+=value,0);
 const mult = (...rest) => rest.reduce((mult,value)=>mult*=value,1);
 console.log(sum(5,5,5));
 console.log(mult(1,5));

//Spreed e Reste Operator com strings
 const str = 'Willian Renan';
 function listLetras(...meleca){
    console.log(meleca);
 }
 console.log( listLetras(...str)); //spreed quebrando a string em pedaços e o rest transfora em Array
//spreed Operator  em concatenação de Arrays
 const meleca = [1,2];
 const acelem = [...meleca,3,4,5];

 const meleca2 = [...meleca,...acelem];
 console.log(acelem);
 console.log(meleca2);


 const obj ={
    name : 'willian',
    idade: 12
 }

 const {name: meleca, idade} = obj;
 console.log(meleca,idade);