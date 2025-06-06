//1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Matheus", true, 3.54, Array(0)];
console.log(itens);


//1.2 - Mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);


//2 - Propriedades 
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);


//3 - Métodos 
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);


const text = "algum texto";;

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"))


//4 - Objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador",
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(person.age);


//5 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);


//6 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);
console.log(obj);


//7 - Conhecendo melhor um objeto 
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

//8 - Mutação 
const a = {
    name: "Laura",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

//9 - Loops em arrays
const users = ["Matheus", "João", "Pedro", "Miguel"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

//10 - Métodos pop e push
const array = ["a", "b", "c"];

console.log(array);

array.push("d");

console.log(array);
console.log(array.length);

array.pop();
console.log(array);


//11 - Métodos shift e unshift

const letters = ["a", "b", "c"]

const letter = letters.shift();
console.log(letter);
console.log(letters);

letters.unshift("P", "q", "r")

letters.unshift("z")

console.log(letters)

//12 - Métodos indexOf e lastIndexOf
const myElements = ["Morango", "Banana", "Abacate", "Maçã", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements.lastIndexOf("Abacate"));


//13 - Método slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4);

console.log(subArray)

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);


//14 - Método forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
});


//15 - Include
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")){
    console.log("Há carros da marca BMW!");
}

//16 - Reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse();

console.log(reverseTest);

//17 - Métodos de string 

//17.1 - Método trim 
const trimTest = " testando   \n   ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);


//17.2 - Método padStart 
const testePadStart = "1";

const newNumber =  testePadStart.padStart(4, "4");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "7")
console.log(testePadEnd)


//17.3 - Método Split 
const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)

//17.4 - Método Join
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)

//17.5 - Método repeat 
const palavra = "testando "

console.log(palavra.repeat(5))

//17.6 - Test Operator / Rest Parameters 
const somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }

    return total;   
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 34, 3424, 128856, 3435));


//18 - Estrutura for...of
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args){
        total += num;    
    }
    return total;
}

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 34, 3424, 128856, 3435));

//19 - Destructuring em objetos
const userDetails = {
    firstName: "Rosa",
    lastName:"Serbêto",
    job: "Assistente social"
}

const {firstName,  lastName, job} = userDetails;

console.log(firstName, lastName, job);

    //renomear variáveis 
    const {firstName: primeiroNome} = userDetails;

    console.log(primeiroNome)


//19 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"]

const[veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

//20 - Conhecendo o JSON (JavaScript Object Notation)
const myJson = '{"name": "Matheus", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'

console.log(myJson)

//21 - Conversão de JSON
const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

//json inválido 
//const badJson = '{"name': Matheus, "age": 31}';
//const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)


