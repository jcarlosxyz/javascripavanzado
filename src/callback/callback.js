function  suma(dato1,dato2){

    return (dato1+dato2);
}

function calcula(num1,num2,callback){

 return callback(num1,num2);

}


console.log(calcula(2,2,suma));
 

setTimeout(() => {
    console.log("hola");
}, 2000);

function hola(name){
 
  console.log(`How are you ${name}`);

}

setTimeout(hola,5000,"Carlos")
