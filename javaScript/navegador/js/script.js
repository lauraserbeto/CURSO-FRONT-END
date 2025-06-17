//1 - movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes); //header
console.log(document.body.childNodes[1].childNodes[1].textContent); //Título


//2 - selecionando elementos 

//2.1 - getElementsByTagName
const listItens = document.getElementsByTagName("li")

console.log(listItens)


//2.2 - getElementsByID
const title = document.getElementById("title")

console.log(title)


//2.3 - getElementsByClassName
const product = document.getElementsByClassName("product")

console.log(product)


//2.4 - querySelectorAll (selecionado os elementos por CSS)
const productsQuery = document.querySelectorAll(".product")

console.log(product)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)



//3 - alterando o HTML 

//3.1 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title)


//3.2 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li);


//3.3 - replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título!";


header.replaceChild(h2, title);

//3.4 - criando nós de texto (createTextNode)
const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

const h3 = document.createElement("h3")

h3.appendChild(myText);

console.log(h3)

mainContainer.appendChild(h3)

//3.5 - trabalhando com atributos (getAttribute e setAttribute)
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

//3.6 - altura e largura dos elementos (offsetWidth/offsetHeight e clientWidth e clientHeight)
const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

    //desconsidera as bordas
console.log(footer.clientWidth)
console.log(footer.clientHeight)

//3.7 - posição na tela (getClienteBoundingRect)
const product1 = products[0]

console.log(product1.getBoundingClientRect());

//4 - CSS com JS (style)
mainContainer.style.color = "red";

mainContainer.style.backgroundColor = "#333";

//5 - alterando estilos de HTMLCollection
for(const li of listItens){
    li.style.backgroundColor = "red";
}