//1 - Variáveis
let nome = "Matheus";

console.log(nome);

nome = "Laura Beatriz";

console.log(nome);

const idade = 31;

console.log(idade);

console.log(typeof nome); //string

console.log(typeof idade); //number

    //pode-se criar variáveis em sequência (let a = 5, b = 4, c = 10;)
    let a = 5, b = 10, c = 15;
    console.log(a, b, c);
    //não pode iniciar variáveis com números
        //let 2teste = "inválido";
    //não pode utilizar caracteres especiais (@)
        //let @teste = "inválido";
        let _teste = "ok";
        let $teste = "ok";
        console.log(_teste, $teste);
    //variáveis são case sensitive 



//2 - Nome Reservados
// break, case, catch, class, continue, debugger, default, delete, do, else, enum, export, extends, false, finally, for, function, if....


//3 - Funções

//3.1 - Função Prompt -> (const x = prompt("Digite um número")

//const age = prompt("Digite a sua idade: ");
//console.log(`Você tem ${age} anos. `);

//3.2 - Função Alert 

//alert("Testando ....");

//const z = 10;
//alert (`O número é ${z}`);

//3.3 - Funções Math
//console.log(Math.max(5, 2, 1, 12)); //maior número

//console.log(Math.floor(5.14)) //arredonda para baixo

//console.log(Math.ceil(5.14)) //arredonda para cima 

//3.4 - Função Console 
//console.log("teste!");

//console.error("erro!");

//console.warn("aviso!");


//4 - Função IF
const m = 10;

if(m > 5){
    console.log("M é maior que 5!");
}

const user = "João";

if (user === "João"){
    console.log("Bem vindo, João!");
}

//5 - Função ELSE
const loggedIn = false;

if(loggedIn){
    console.log("Está autenticado");
} else{
    console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if(q > 5 && w > 20){
    console.log("Números mais altos");
} else{
    console.log ("Os números não são mais altos");
}


//6 - Função ELSE IF 

if(1 > 2){
    console.log("Teste");
} else if (2 > 3){
    console.log("Teste 2");
} else if (5 > 1){
    console.log("Verdadeiro !!!!!");
}

//7 - Função WHILE
let p = 0;

while(p < 5){
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

//8 - Função DO-WHILE
let o = 10;

do{
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);

//9 -  Função FOR 
for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...");
}

//10 - Função BREAK
for (let s = 0; s < 10; s = s + 1){
    //operador resto = %
    if(s % 2 === 0){
        console.log("Número par!");
        break;
    }

    console.log(s);
}

//11 - Função CONTINUE 
for (let s = 0; s < 10; s = s + 1){
    //operador resto = %
    if(s % 2 === 0){
        console.log("Número par!");
        continue;
    }

    console.log(s);
}

//12 - Função SWITCH
const job = "Advogado";

switch(job){
    case "Programador":
        console.log("Você é programador!");
        break;
    case "Advogado":
        console.log("Você é advogado!");
        break;
    case "Engenheiro":
        console.log("Você é engenheiro!");
        break;
    default:
        console.log("Função não encontrada");
}