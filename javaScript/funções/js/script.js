//1 - Criando uma função 
function minhaFuncao(){
    console.log("Testando.....");
}

minhaFuncao();


const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável ");
}

minhaFuncaoEmVariavel();


function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("Outra função");

//2 - Retorno das funções (return)
const a = 10;
const b = 15;
const c = 20;
const d = 25;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);


//3 - Escopo alinhado 
let m = 10;

function escopoAlinhado(){
    let m = 20;

    if (true){
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }

        console.log(m);
    }

    console.log(m)
}

escopoAlinhado();

//4 - Arrow Function
const testeArrow = () => {
    console.log("Esta é uma arrow function");
}

testeArrow();

const parOUImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par");
        return;
    }

    console.log("Impar");
};

parOUImpar(5);

parOUImpar(10);


//5 - Mais sobre Arrow Function
const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(4));


const raizQuadrada2 = (x) => x * x;


console.log(raizQuadrada2(5));

console.log(raizQuadrada(12));

const helloWorld = () => console.log("Hello World!");
helloWorld();


//6 - Argumentos/Parâmetros Opcionais
const multiplication = function(m, n){
    if(m === undefined){
        return m * 2;
    } else{
        m * n;
    }
}

console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
    if(!name){
        console.log("Olá!");
        return;
    }

    console.log(`Olá ${name}!`);
}

greeting();
greeting("Laura");


//7 - Argumentos com valor default
const customGreeting = (name, greet = "Olá") =>{
    return `${greet}, ${name}!`
}

console.log(customGreeting("Laura"));
console.log(customGreeting("João", "Bom dia"));

//8 - Closure
function someFunction(){
    let txt = "Alguma coisa"

    function display(){
    console.log(txt);
    }

    display();
}

someFunction();


//9 - Recursão 
const untilTen = (n, m) => {
    if (n < 10){
        console.log("A função parou de executar");

    }else{
        const x = n - m;

        console.log(x);

        untilTen(x, m);
    }
};

untilTen(100, 7);

    //Infinite recursion
    //function run() {
        //console.log("Executando...");
        //run();
    //}

    //run();


function factorial(x){
    if(x === 0){
        return 1;
    } else{
        return x * factorial(x - 1)
    }
}

const num = 6;
const result = factorial(num);
console.log(`O fatorial do ${num} é ${result}`);