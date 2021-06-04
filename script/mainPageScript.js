
// *********** PARA OS CARROSEL

const images = [
    {'id': '1', 'url' : './images/q1.jpg'},
    {'id': '2', 'url' : './images/q2.jpeg'},
    {'id': '3', 'url' : './images/q3.jpg'}
];

const containerItems = document.querySelector('.container-item');

const loadImage = (images, containerItems) => {
    images.forEach( image => {
        containerItems.innerHTML += `
        <div id="item"> 
            <img src = ${image.url} ></img>
        </div>
        `
    }

    )
}

loadImage(images, containerItems)

let items = document.querySelectorAll('#item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('#item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('#item')
}
document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

// *********** PARA OS ITENS DO SITE

let data = [{
	"name": "Capitão America",
	"category": "Filmes",
	"price": 40,
    "image": "./images/capitao.png",
},
{
	"name": "Homem Aranha",
	"category": "Filmes",
	"price": 40,
    "image": "./images/Aranha.png",
},
{
	"name": "Homem de Ferro",
	"category": "Filmes",
	"price":40,
    "image": "./images/tony.png",
},
{
    "name": "Bob Esponja",
	"category": "Séries e Desenhos",
    "price": 30,
    "image": "./images/bob.png",
},
{
    "name": "Os Simpsons",
	"category": "Séries e Desenhos",
    "price": 30,
    "image": "./images/homer.png",
},
{
    "name": "Sherlock Holmes",
    "category": "Séries e Desenhos",
    "price": 30,
    "image": "./images/Sherlock.png",
},
{
    "name": "Frase Simpsons",
    "category": "Frases",
    "price": 30,
    "image": "./images/frase03.png",
},
{
    "name": "Frase Chorão",
    "category": "Frases",
    "price": 30,
    "image": "./images/frase01.png",
},
{
    "name": "Frase Kruger",
    "category": "Frases",
    "price": 30,
    "image": "./images/frase02.png",
},
{
    "name": "Gato",
    "category": "Animais",
    "price": 45,
    "image": "./images/gato.png",
},
{
    "name": "Leão",
    "category": "Animais",
    "price": 45,
    "image": "./images/leao.png",
},
{
    "name": "Lobo",
    "category": "Animais",
    "price": 45,
    "image": "./images/lobo.png",
},
{
    "name": "Triangulos Rose",
    "category": "Geometricos",
    "price": 40,
    "image": "./images/geometricos.png",
},
{
    "name": "Coração Geometrico",
    "category": "Geometricos",
    "price": 40,
    "image": "./images/heart.png",
},
{
    "name": "Triangulos Vitral",
    "category": "Geometricos",
    "price": 40,
    "image": "./images/geo.png",
}];


const produtos = document.getElementById("products-list")
const filterButton = document.getElementById("menu")
let dadosTransferidos = []

function main(){

    for(i=0; i<20; i++){
        let divProduct = document.createElement("div");
        let image = document.createElement("img");
        let text = document.createElement("div");
        let title = document.createElement("h3");
        let price = document.createElement("h4")
        let button = document.createElement("button");
        let botaoZero = document.getElementById("0")
        button.innerHTML = "Adicionar ao Carrinho";
        button.id = `${i}`
        title.innerHTML = data[i].name;
        image.src = data[i].image;
        image.classList.add("productImg");
        price.innerHTML = "R$ " + data[i].price;
        text.appendChild(title);
        text.appendChild(price);
        text.classList.add  ("texto");
        divProduct.appendChild(image);
        divProduct.appendChild(text);
        divProduct.appendChild(button);
        divProduct.classList.add("products");
        produtos.appendChild(divProduct);
    }
}

function filter(){
    let opCelular = document.getElementById("opCelular")
    let opTime = document.getElementById("opTime")
    let opFruit = document.getElementById("opFruit")
    let opGame = document.getElementById("opGame")
    
    let temp = []
    let i=0, j=0, k=0

    let divProduct = document.querySelectorAll("div.products")
    
    for(let a=0; a<divProduct.length; a++) {
        produtos.removeChild(divProduct[a])
    }

    if(opCelular.checked){
        i = 0
        j = 0
        while(i<5){
            if(data[i].category == "Celulares"){
                temp[j] = data[i]
                j++
            }
            i++
        }
    }
    else if(opFruit.checked){
        i = 5
        j = 5
        while(i<10){
            if(data[i].category == "Frutas & Legumes"){
                temp[j] = data[i]
                j++
            }
            i++
        }
    }
    else if(opGame.checked){
        i = 10
        j = 10
        while(i<15){
            if(data[i].category == "Jogos"){
                temp[j] = data[i]
                j++
            }
            i++
        }
    }
    else if(opTime.checked){
        i = 15
        j = 15
        while(i<20){
            if(data[i].category == "Camisetas de Time"){
                temp[j] = data[i]
                j++
            }
            i++
        }
    }
    
    i = i -5
    for(k = i; k<j; k++){
        let divProduct = document.createElement("div");
        let image = document.createElement("img");
        let text = document.createElement("div");
        let title = document.createElement("h3");
        let price = document.createElement("h4")
        let button = document.createElement("button");
        button.innerHTML = "Adicionar ao Carrinho";
        button.id = `${i}`  
        title.innerHTML = temp[k].name;
        image.src = temp[k].image;
        image.classList.add("productImg");
        price.innerHTML = "R$ " + temp[k].price;
        text.appendChild(title);
        text.appendChild(price);
        text.classList.add("texto");
        divProduct.appendChild(image);
        divProduct.appendChild(text);
        divProduct.appendChild(button);
        divProduct.classList.add("products");
        produtos.appendChild(divProduct);
    }
}

window.addEventListener("load", function(event) {

    filterButton.addEventListener('click', filter)

    let buttonZero = document.getElementById("0");
    let buttonOne = document.getElementById("1");
    let buttonTwo = document.getElementById("2");
    let buttonThree = document.getElementById("3");
    let buttonFour = document.getElementById("4");
    let buttonFive = document.getElementById("5");
    let buttonSix = document.getElementById("6");
    let buttonSeven = document.getElementById("7");
    let buttonEight = document.getElementById("8");
    let buttonNine = document.getElementById("9");
    let buttonTen = document.getElementById("10");
    let buttonEleven = document.getElementById("11");
    let buttonTwelve = document.getElementById("12");
    let buttonThirteen = document.getElementById("13");
    let buttonFourteen = document.getElementById("14");
    let buttonFifteen = document.getElementById("15");
    let buttonSixteen = document.getElementById("16");
    let buttonSeventeen = document.getElementById("17");
    let buttonEighteen = document.getElementById("18");
    let buttonNineteen = document.getElementById("19");

    buttonZero.addEventListener('click', ()=>{
        if(buttonZero.textContent == "Adicionar ao Carrinho"){
            buttonZero.innerHTML = "Adicionado"
            dadosTransferidos.push(data[0])
        }
        else{
            buttonZero.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Nokia 2720A Celular Flip"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonOne.addEventListener('click', ()=>{
        if(buttonOne.textContent == "Adicionar ao Carrinho"){
            buttonOne.innerHTML = "Adicionado"
            dadosTransferidos.push(data[1])
        }
        else{
            buttonOne.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Nokia 1100 Gsm"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonTwo.addEventListener('click', ()=>{
        if(buttonTwo.textContent == "Adicionar ao Carrinho"){
            buttonTwo.innerHTML = "Adicionado"
            dadosTransferidos.push(data[2])
        }
        else{
            buttonTwo.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "LG B220"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonThree.addEventListener('click', ()=>{
        if(buttonThree.textContent == "Adicionar ao Carrinho"){
            buttonThree.innerHTML = "Adicionado"
            dadosTransferidos.push(data[3])
        }
        else{
            buttonThree.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Nokia 1661"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonFour.addEventListener('click', ()=>{
        if(buttonFour.textContent == "Adicionar ao Carrinho"){
            buttonFour.innerHTML = "Adicionado"
            dadosTransferidos.push(data[4])
        }
        else{
            buttonFour.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Nokia 5125"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonFive.addEventListener('click', ()=>{
        if(buttonFive.textContent == "Adicionar ao Carrinho"){
            buttonFive.innerHTML = "Adicionado"
            dadosTransferidos.push(data[5])
        }
        else{
            buttonFive.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Banana"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonSix.addEventListener('click', ()=>{
        if(buttonSix.textContent == "Adicionar ao Carrinho"){
            buttonSix.innerHTML = "Adicionado"
            dadosTransferidos.push(data[6])
        }
        else{
            buttonSix.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Maça"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonSeven.addEventListener('click', ()=>{
        if(buttonSeven.textContent == "Adicionar ao Carrinho"){
            buttonSeven.innerHTML = "Adicionado"
            dadosTransferidos.push(data[7])
        }
        else{
            buttonSeven.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Laranja"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonEight.addEventListener('click', ()=>{
        if(buttonEight.textContent == "Adicionar ao Carrinho"){
            buttonEight.innerHTML = "Adicionado"
            dadosTransferidos.push(data[8])
        }
        else{
            buttonEight.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Melancia"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonNine.addEventListener('click', ()=>{
        if(buttonNine.textContent == "Adicionar ao Carrinho"){
            buttonNine.innerHTML = "Adicionado"
            dadosTransferidos.push(data[9])
        }
        else{
            buttonNine.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Uva"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonTen.addEventListener('click', ()=>{
        if(buttonTen.textContent == "Adicionar ao Carrinho"){
            buttonTen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[10])
        }
        else{
            buttonTen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Batman: Arkham City"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonEleven.addEventListener('click', ()=>{
        if(buttonEleven.textContent == "Adicionar ao Carrinho"){
            buttonEleven.innerHTML = "Adicionado"
            dadosTransferidos.push(data[11])
        }
        else{
            buttonEleven.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Mortal Kombat: Deception"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonTwelve.addEventListener('click', ()=>{
        if(buttonTwelve.textContent == "Adicionar ao Carrinho"){
            buttonTwelve.innerHTML = "Adicionado"
            dadosTransferidos.push(data[12])
        }
        else{
            buttonTwelve.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "The Elder Scrolls V: Skyrim"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonThirteen.addEventListener('click', ()=>{
        if(buttonThirteen.textContent == "Adicionar ao Carrinho"){
            buttonThirteen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[13])
        }
        else{
            buttonThirteen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "FIFA 2021"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonFourteen.addEventListener('click', ()=>{
        if(buttonFourteen.textContent == "Adicionar ao Carrinho"){
            buttonFourteen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[14])
        }
        else{
            buttonFourteen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Cyberpunk 2077"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonFifteen.addEventListener('click', ()=>{
        if(buttonFifteen.textContent == "Adicionar ao Carrinho"){
            buttonFifteen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[15])
        }
        else{
            buttonFifteen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Camisa Bayern de Munique"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonSixteen.addEventListener('click', ()=>{
        if(buttonSixteen.textContent == "Adicionar ao Carrinho"){
            buttonSixteen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[16])
        }
        else{
            buttonSixteen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Camisa PSG"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonSeventeen.addEventListener('click', ()=>{
        if(buttonSeventeen.textContent == "Adicionar ao Carrinho"){
            buttonSeventeen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[17])
        }
        else{
            buttonSeventeen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Camisa Real Madrid"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonEighteen.addEventListener('click', ()=>{
        if(buttonEighteen.textContent == "Adicionar ao Carrinho"){
            buttonEighteen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[18])
        }
        else{
            buttonEighteen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Camisa Barcelona"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
    buttonNineteen.addEventListener('click', ()=>{
        if(buttonNineteen.textContent == "Adicionar ao Carrinho"){
            buttonNineteen.innerHTML = "Adicionado"
            dadosTransferidos.push(data[19])
        }
        else{
            buttonNineteen.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Camisa Chelsea"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })

});

let botaoFinalizar = document.getElementById("carrinho")

botaoFinalizar.addEventListener("click", ()=>{
    dadosTransferidos.push("Rato")
    let enviarParaDetalhes = JSON.stringify(dadosTransferidos);
    console.log(enviarParaDetalhes)
	sessionStorage.setItem('dados', enviarParaDetalhes);
    window.location.href = "./pages/cart.html"
})


let botaoTeste = document.getElementById("test")

botaoTeste.addEventListener("click", ()=>{
    let dados = JSON.parse(sessionStorage.getItem('dados'));
    console.log(dados);
	sessionStorage.setItem('dados', dados);
})