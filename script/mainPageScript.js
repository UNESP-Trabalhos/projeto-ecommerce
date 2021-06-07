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

// FUNCAO PARA ADICIONAR CARRINHO
function adicionarRemover(button, data, i, text){
    if(button.textContent == "Adicionar ao Carrinho"){
        button.innerHTML = "Adicionado"
        dadosTransferidos.push(data[i])
    }
    else{
        button.innerHTML = "Adicionar ao Carrinho"
        let produtoARemover = text
        dadosTransferidos = dadosTransferidos.filter(dadosTransferidos => dadosTransferidos.name != produtoARemover);
    }
}

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

// FILTRANDO OS TOP 10 MAIS VENDIDOS 
const filterTop = document.getElementById("top10")
filterTop.addEventListener('click', ()=>{
    limpar();
    filtrar(4, 14);
    
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

    buttonFour.addEventListener('click', ()=>{
        adicionarRemover(buttonFour, data, 4, "Os Simpsons")
    })
    buttonFive.addEventListener('click', ()=>{
        adicionarRemover(buttonFive, data, 5, "Sherlock Holmes")        
    })
    buttonSix.addEventListener('click', ()=>{
        adicionarRemover(buttonSix, data, 6, "Frase Simpsons")
    })
    buttonSeven.addEventListener('click', ()=>{
        adicionarRemover(buttonSeven, data, 7, "Frase Chorão")
    })
    buttonEight.addEventListener('click', ()=>{
        adicionarRemover(buttonEight, data, 8, "Frase Kruger")
    })
    buttonNine.addEventListener('click', ()=>{
        adicionarRemover(buttonNine, data, 9, "Gato")
    })
    buttonTen.addEventListener('click', ()=>{
        adicionarRemover(buttonTen, data, 10, "Leão")
    })
    buttonEleven.addEventListener('click', ()=>{
        adicionarRemover(buttonEleven, data, 11, "Lobo")
    })
    buttonTwelve.addEventListener('click', ()=>{
        adicionarRemover(buttonTwelve, data, 12, "Triangulos Rose")
    })
    buttonThirteen.addEventListener('click', ()=>{
        adicionarRemover(buttonThirteen, data, 13, "Coração Geometrico")
    })
})

// FILTRANDO OS MAIS PROMOÇÕES 
const filterPromo = document.getElementById("promocoes")
filterPromo.addEventListener('click', ()=>{
    limpar();   
    filtrar(3, 9);
    let buttonThree = document.getElementById("3");
    let buttonFour = document.getElementById("4");
    let buttonFive = document.getElementById("5");
    let buttonSix = document.getElementById("6");
    let buttonSeven = document.getElementById("7");
    let buttonEight = document.getElementById("8");

    buttonThree.addEventListener('click', ()=>{
        adicionarRemover(buttonThree, data, 3, "Bob Esponja")
    })
    buttonFour.addEventListener('click', ()=>{
        adicionarRemover(buttonFour, data, 4, "Os Simpsons")
    })
    buttonFive.addEventListener('click', ()=>{
        adicionarRemover(buttonFive, data, 5, "Sherlock Holmes")        
    })
    buttonSix.addEventListener('click', ()=>{
        adicionarRemover(buttonSix, data, 6, "Frase Simpsons")
    })
    buttonSeven.addEventListener('click', ()=>{
        adicionarRemover(buttonSeven, data, 7, "Frase Chorão")
    })
    buttonEight.addEventListener('click', ()=>{
        adicionarRemover(buttonEight, data, 8, "Frase Kruger")
    })
})

// FILTRANDO OS ANIMAIS
const filterAnimals = document.getElementById("animal")
filterAnimals.addEventListener('click', ()=>{
    limpar();
    filtrar(9,12);
    let buttonNine = document.getElementById("9");
    let buttonTen = document.getElementById("10");
    let buttonEleven = document.getElementById("11");

    buttonNine.addEventListener('click', ()=>{
        adicionarRemover(buttonNine, data, 9, "Gato")
    })
    buttonTen.addEventListener('click', ()=>{
        adicionarRemover(buttonTen, data, 10, "Leão")
    })
    buttonEleven.addEventListener('click', ()=>{
        adicionarRemover(buttonEleven, data, 11, "Lobo")
    })
})

//FILTRANDO OS FILMES
const filterFilmes = document.getElementById("filme")
filterFilmes.addEventListener('click', ()=>{
    limpar();
    filtrar(0,3);
    let buttonZero = document.getElementById("0");
    let buttonOne = document.getElementById("1");
    let buttonTwo = document.getElementById("2");

    buttonZero.addEventListener('click', ()=>{
        adicionarRemover(buttonZero, data, 0, "Capitão America")
    })
    buttonOne.addEventListener('click', ()=>{
        adicionarRemover(buttonOne, data, 1, "Homem Aranha")
    })
    buttonTwo.addEventListener('click', ()=>{
        adicionarRemover(buttonTwo, data, 2, "Homem de Ferro")
    })
})

//FILTRANDO AS FRASES 
const filterFrases = document.getElementById("frase")
filterFrases.addEventListener('click', ()=>{
    limpar();
    filtrar(6,9);
    let buttonSix = document.getElementById("6");
    let buttonSeven = document.getElementById("7");
    let buttonEight = document.getElementById("8");

    buttonSix.addEventListener('click', ()=>{
        adicionarRemover(buttonSix, data, 6, "Frase Simpsons")
    })
    buttonSeven.addEventListener('click', ()=>{
        adicionarRemover(buttonSeven, data, 7, "Frase Chorão")
    })
    buttonEight.addEventListener('click', ()=>{
        adicionarRemover(buttonEight, data, 8, "Frase Kruger")
    })
})

//FILTRANDO OS Geometricos
const filterGeometricos = document.getElementById("geometrico")
filterGeometricos.addEventListener('click', ()=>{
    limpar();
    filtrar(12,15);
    let buttonTwelve = document.getElementById("12");
    let buttonThirteen = document.getElementById("13");
    let buttonFourteen = document.getElementById("14");

    buttonTwelve.addEventListener('click', ()=>{
        adicionarRemover(buttonTwelve, data, 12, "Triangulos Rose")
    })
    buttonThirteen.addEventListener('click', ()=>{
        adicionarRemover(buttonThirteen, data, 13, "Coração Geometrico")
    })
    buttonFourteen.addEventListener('click', ()=>{
        adicionarRemover(buttonFourteen, data, 14, "Triangulos Vitral")
    })

})

//FILTRANDO AS serie 
const filterSeries = document.getElementById("serie")
filterSeries.addEventListener('click', ()=>{
    limpar();
    filtrar(3,6);
    let buttonThree = document.getElementById("3");
    let buttonFour = document.getElementById("4");
    let buttonFive = document.getElementById("5");
    buttonThree.addEventListener('click', ()=>{
        adicionarRemover(buttonThree, data, 3, "Bob Esponja")
    })
    buttonFour.addEventListener('click', ()=>{
        adicionarRemover(buttonFour, data, 4, "Os Simpsons")
    })
    buttonFive.addEventListener('click', ()=>{
        adicionarRemover(buttonFive, data, 5, "Sherlock Holmes")
    })     
})

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
        adicionarRemover(buttonZero, data, 0, "Capitão America")
    })
    buttonOne.addEventListener('click', ()=>{
        adicionarRemover(buttonOne, data, 1, "Homem Aranha")
    })
    buttonTwo.addEventListener('click', ()=>{
        adicionarRemover(buttonTwo, data, 2, "Homem de Ferro")
    })
    buttonThree.addEventListener('click', ()=>{
        adicionarRemover(buttonThree, data, 3, "Bob Esponja")
    })
    buttonFour.addEventListener('click', ()=>{
        adicionarRemover(buttonFour, data, 4, "Os Simpsons")
    })
    buttonFive.addEventListener('click', ()=>{
        adicionarRemover(buttonFive, data, 5, "Sherlock Holmes")        
    })
    buttonSix.addEventListener('click', ()=>{
        adicionarRemover(buttonSix, data, 6, "Frase Simpsons")
    })
    buttonSeven.addEventListener('click', ()=>{
        adicionarRemover(buttonSeven, data, 7, "Frase Chorão")
    })
    buttonEight.addEventListener('click', ()=>{
        adicionarRemover(buttonEight, data, 8, "Frase Kruger")
    })
    buttonNine.addEventListener('click', ()=>{
        adicionarRemover(buttonNine, data, 9, "Gato")
    })
    buttonTen.addEventListener('click', ()=>{
        adicionarRemover(buttonTen, data, 10, "Leão")
    })
    buttonEleven.addEventListener('click', ()=>{
        adicionarRemover(buttonEleven, data, 11, "Lobo")
    })
    buttonTwelve.addEventListener('click', ()=>{
        adicionarRemover(buttonTwelve, data, 12, "Triangulos Rose")
    })
    buttonThirteen.addEventListener('click', ()=>{
        adicionarRemover(buttonThirteen, data, 13, "Coração Geometrico")
    })
    buttonFourteen.addEventListener('click', ()=>{
        adicionarRemover(buttonFourteen, data, 14, "Triangulos Vitral")
    })
});

let botaoFinalizar = document.getElementById("carrinho")

botaoFinalizar.addEventListener("click", ()=>{
    let i = 0
    let voltarCarrinho = JSON.parse(sessionStorage.getItem('voltou'));
    if(voltarCarrinho != null || voltarCarrinho != undefined){
        while(i < voltarCarrinho.length){
            dadosTransferidos.unshift(voltarCarrinho[i])
            i++
        }
    }
    let enviarParaDetalhes = JSON.stringify(dadosTransferidos);
    sessionStorage.setItem('dados', enviarParaDetalhes);
    window.location.href = "./pages/cart.html"
})


