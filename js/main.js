
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


 const carro = {
    roda: Symbol('cromada')
 };
 Object.getOwnPropertySymbols(carro);
 console.log(carro);
 Object.keys(carro);

//utilizando o Symbol.iterator em Array
 const car = ['volante','roda','banco'];
 const caminhao = car[Symbol.iterator]();
 console.log(caminhao.next());
 console.log(caminhao.next());
 console.log(caminhao.next());
 console.log(caminhao.next());

 for (const value of caminhao) {
    console.log(value);
 }

 //Aplicando um Symbol.iterator à um objeto para que ele possa receber funções de arrays
 // podendo aplicar o for of, usar o rest, spreed
 const vaca = {
   valores: ['bife','costela','lombo'],
   [Symbol.iterator](){
      let i = 0;
      return{
         next:()=>{
            i++;
            return{
               value:this.valores[i - 1],
               done: i > this.valores.length
            };
         }
      };
   }
 }

 const churrasco = vaca[Symbol.iterator]();
 console.log(churrasco.next());
 console.log(churrasco.next());

 for(let value of vaca){
    console.log(value);
 }

 // Generator 
// da o poder de pausa para a função, mas precisa ter uma iteração com 
//  uma variável e essa variável tem que ser chamada com o .net(), e cada chamada do .net() a pausa é executada
 function* hello(){
   console.log('oi');
   yield;

   console.log('como');
   yield;

   console.log('vai?');
 }

 const it = hello();
 console.log(it.next());
 console.log(it.next());
 console.log(it.next());


 //Promise

 const  promessa = () => new Promise((resolve, reject)=>{
    
   setTimeout(() =>{
     /*  console.log('meleca') */
      resolve('meleca');
   },1500)
 }) ;
 
 
 const promessa2 = () => new Promise((response,reject)=>{
   setTimeout(()=>{
      response(' de Nariz');
   },1000);
 });

Promise.race([promessa(),promessa2()]).then(data => console.log(data.toString(' '))); //retorna a promise que resolver primeiro
Promise.all([promessa(),promessa2()]).then(data => console.log(data.toString(' '))); //executando as duas promises ao mesmo tempo

 promessa().then(data =>{ console.log(data); return promessa2()})
         .then(data2 => console.log(data2.split('')))
         .catch(error => console.log(error));


// Requisição Fetch
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
fetch(url)
   .then(response => response.json())
   .then(data => console.log(data));