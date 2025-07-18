//1 - métodos
//const animal = {
    //nome: Bob,
    //latir: function(){
        //console.log("Au au")
    //},
//};


//console.log(animal.nome)
//animal.latir();


//2 - mais sobre métodos
const pessoa = {
    nomePessoa: "Matheus",

    getNomePessoa: function() {
        return this.nomePessoa;
    },

    setNomePessoa: function(){
        this.nomePessoa = novoNomePessoa;
    }
};

console.log(pessoa.nomePessoa);

console.log(pessoa.getNomePessoa());

//pessoa.setNomePessoa("Joaquim");

//console.log(pessoa.getNomePessoa());


//3 - Prototype - espécie de herança 
const text = "akjd"

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

//const arr = [];
//console.log


//4 - Mais sobre prototype 
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);


//5 - Classes básicas 
const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemao";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog";

console.log(bulldog)


//6 - Funções como classe - função construtora
function criarCachorro(nome, raca){
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira-lata");
console.log(bob);

const luli = criarCachorro ("Luli", "Pinscher");
console.log(luli);

//7 - classes baseadas em funções 
function Cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro ("Pipo", "Husky");

console.log(husky);

//8 - classes de funções com métodos (métodos na função oonstrutora)
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuu!");
}

console.log(Cachorro);

husky.uivar();

//9 - classes es6
class CachorroClasse {
    constructor (nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);


//10 - mais sobre classes 
class Caminhao{
    constructor(eixo, cor){
        this.eixo = eixo;
        this.cor = cor; 
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixo} eixos e, é da cor ${this.cor}`)
    }

}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4;

const c2 = new Caminhao (4, "Preta");

console.log(c2);

console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);


//11 - Override 
class Humano {
    constructor(nome, idade){
         this.nome = nome;
        this.idade = idade;
    }  
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

Humano.prototype.idade = "Não definida";

console.log(matheus.idade);

console.log(Humano.prototype.idade);

//12 - Symbol em classes 
class Aviao {
    constructor (marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2

Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);


//13 - Getters e Setters 
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }


    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArray = tags.split (", ")
        this.tags = tagsArray;
    }
}

const myPost = new Post ("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js"

console.log(myPost);


//14 - Herança 
class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");
console.log(shark)


//15 - Operador Instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Cachorro);