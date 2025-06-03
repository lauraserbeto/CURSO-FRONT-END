// NUMBER
console.log(2);
console.log(typeof 2);
console.log(typeof 5.14);

//operadores: +, -, *, /

//special numbers: dados considerados como números mas não funcionam como eles (Infinity, -Infinity, NaN (not a number))
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "iush"); //NaN


// STRINGS 
console.log("Texto 1 com aspas");
console.log(typeof "Texto 1 com aspas");
console.log(`Texto 2 com crase`);

//caracteres especiais: \n (quebra de linha), \t (tab)

// CONCATENAÇÃO (+)
console.log("Oi," + " tudo" + " bem?");

// INTERPOLAÇÃO: semelhante à concatenação, no entanto escreve tudo na mesma string; deve estar entre crases(`)
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// BOOLEAN 
console.log(true);
console.log(5 > 20);
console.log(5 < 20);

// COMPARAÇÕES: == (igual), != (diferente), === (idêntico)

// OPERADORES LÓGICOS: && (and), || (or), ! (not) -> TABELA VERDADE 
console.log(true && true);
console.log(5 > 2 && 2 < 10); //true
console.log(5 > 2 && "Matheus" === 1); //false
console.log(5 > 2 || "Matheus" === 1); //true

// EMPTY VALUES: Undefined (não definido) e Null (definido no código )
console.log(typeof null, typeof undefined);

// MUDANÇA DE TIPOS 
console.log(5 * null); //Number -> Null

console.log("teste" * "opa"); //String -> NaN

console.log("10" + 1); // Concatenação (101) 

console.log("10" - 1); // Subtração (9) 