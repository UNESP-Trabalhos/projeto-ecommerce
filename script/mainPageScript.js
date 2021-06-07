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

// FUNCAO PARA LIMPAR

function limpar(){
    let divProduct = document.querySelectorAll("div.products")
    
    for(let a=0; a<divProduct.length; a++) {
        produtos.removeChild(divProduct[a])
    }
}

// FUNCAO PARA FILTRAR

function filtrar(inicial, final){
    for(i=inicial; i<final; i++){
        let divProduct = document.createElement("div");
        let image = document.createElement("img");
        let text = document.createElement("div");
        let title = document.createElement("h3");
        let price = document.createElement("h4")
        let button = document.createElement("button");
        button.innerHTML = "Adicionar ao Carrinho";
        button.id = `${i}`
        button.classList.add("buttonProducts");
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

function main(){
    for(i=0; i<20; i++){
        let divProduct = document.createElement("div");
        let image = document.createElement("img");
        let text = document.createElement("div");
        let title = document.createElement("h3");
        let price = document.createElement("h4")
        let button = document.createElement("button");
        button.innerHTML = "Adicionar ao Carrinho";
        button.id = `${i}`
        button.classList.add  ("buttonProducts");
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

window.addEventListener("load", function(event) {

    // FILTRANDO OS TOP 10 MAIS VENDIDOS 
    const filterTop = document.getElementById("top10")
    filterTop.addEventListener('click', ()=>{
        limpar();
        filtrar(4, 14);
    })

    // FILTRANDO OS MAIS PROMOÇÕES 
    const filterPromo = document.getElementById("promocoes")
    filterPromo.addEventListener('click', ()=>{
        limpar();   
        filtrar(3, 9);
    })

    // FILTRANDO OS ANIMAIS
    const filterAnimals = document.getElementById("animal")
    filterAnimals.addEventListener('click', ()=>{
        limpar();
        filtrar(9,12);
    })

    //FILTRANDO OS FILMES
    const filterFilmes = document.getElementById("filme")
    filterFilmes.addEventListener('click', ()=>{
        limpar();
        filtrar(0,3);
    })

    //FILTRANDO AS FRASES 
    const filterFrases = document.getElementById("frase")
    filterFrases.addEventListener('click', ()=>{
        limpar();
        filtrar(6,9);
    })

    //FILTRANDO OS Geometricos
    const filterGeometricos = document.getElementById("geometrico")
    filterGeometricos.addEventListener('click', ()=>{
        limpar();
        filtrar(12,15);
    })

    //FILTRANDO AS serie 
    const filterSeries = document.getElementById("serie")
    filterSeries.addEventListener('click', ()=>{
        limpar();
        filtrar(3,6);
    })


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

    buttonZero.addEventListener('click', ()=>{
        if(buttonZero.textContent == "Adicionar ao Carrinho"){
            buttonZero.innerHTML = "Adicionado"
            dadosTransferidos.push(data[0])
        }
        else{
            buttonZero.innerHTML = "Adicionar ao Carrinho"
            let produtoARemover = "Capitão America"
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
            let produtoARemover = "Homem Aranha"
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
            let produtoARemover = "Homem de Ferro"
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
            let produtoARemover = "Bob Esponja"
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
            let produtoARemover = "Os Simpsons"
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
            let produtoARemover = "Sherlock Holmes"
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
            let produtoARemover = "Frase Simpsons"
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
            let produtoARemover = "Frase Chorão"
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
            let produtoARemover = "Frase Kruger"
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
            let produtoARemover = "Gato"
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
            let produtoARemover = "Leão"
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
            let produtoARemover = "Lobo"
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
            let produtoARemover = "Triangulos Rose"
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
            let produtoARemover = "Coração Geometrico"
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
            let produtoARemover = "Triangulos Vitral"
            dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
        }
    })
});

let botaoFinalizar = document.getElementById("carrinho")

botaoFinalizar.addEventListener("click", ()=>{
    let enviarParaDetalhes = JSON.stringify(dadosTransferidos);
	sessionStorage.setItem('dados', enviarParaDetalhes);
    window.location.href = "./pages/cart.html"
})