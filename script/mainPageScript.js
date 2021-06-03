
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
	"name": "Nokia 2720A Celular Flip",
	"category": "Celulares",
	"price": 1500,
    "image": "https://canary.contestimg.wish.com/api/webimage/5f63341a3224400f9cf52819-large.jpg?cache_buster=c9c3170296530487b125efcae1bde75b",
},
{
	"name": "Nokia 1100 Gsm",
	"category": "Celulares",
	"price": 1800,
    "image": "https://http2.mlstatic.com/D_NQ_NP_813624-MLB32721853990_102019-O.webp",
},
{
	"name": "LG B220",
	"category": "Celulares",
	"price":1200,
    "image": "https://http2.mlstatic.com/D_NQ_NP_857063-MLB44583942273_012021-O.webp",
},
{
    "name": "Nokia 1661",
	"category": "Celulares",
    "price": 1400,
    "image": "https://http2.mlstatic.com/D_NQ_NP_641868-MLB40051853581_122019-O.webp",
},
{
    "name": "Nokia 5125",
	"category": "Celulares",
    "price": 1000,
    "image": "https://http2.mlstatic.com/D_NQ_NP_825149-MLB40854044068_022020-O.webp",
},
{
    "name": "Banana",
    "category": "Frutas & Legumes",
    "price":125,
    "image": "https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1",
},
{
    "name": "Maça",
    "category": "Frutas & Legumes",
    "price":100,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/250px-Red_Apple.jpg",
},
{
    "name": "Laranja",
    "category": "Frutas & Legumes",
    "price":120,
    "image": "https://superprix.vteximg.com.br/arquivos/ids/175232-210-210/laranja-lima.png?v=636295892237970000",
},
{
    "name": "Melancia",
    "category": "Frutas & Legumes",
    "price":140,
    "image": "https://io2.convertiez.com.br/m/superpaguemenos/shop/products/images/16582/medium/melancia-inteira-kg_18984.jpg",
},
{
    "name": "Uva",
    "category": "Frutas & Legumes",
    "price":80,
    "image": "https://scfoods.fbitsstatic.net/img/p/uva-rubi-500g-71249/257873.jpg?w=550&h=366&v=no-change",
},
{
    "name": "Batman: Arkham City",
    "category": "Jogos",
    "price": 900,
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTM_BGJ2byw3O7u4T0x5NMzCksREUvsbtQuCal-eb33MkTfW0xVjmtq54Mf9PyATz4tT3B5cDDJZR2A6vDEK8srokA8WG52oTafoqC55nw&usqp=CAc",
},
{
    "name": "Mortal Kombat: Deception",
    "category": "Jogos",
    "price":1100,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzZPstdYamGsueGguaOp1z_9vtdLurbUDuw&usqp=CAU",
},
{
    "name": "The Elder Scrolls V: Skyrim",
    "category": "Jogos",
    "price":950,
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Elder_Scrolls_V_Skyrim_cover.png/220px-The_Elder_Scrolls_V_Skyrim_cover.png",
},
{
    "name": "FIFA 2021",
    "category": "Jogos",
    "price":800,
    "image": "https://awstatic-5754.kxcdn.com/sc-1aVdTTvB4gMDbvy1X05piov0=/0x0/loja/starcomputeritu.com.br/prodimg/61/0504512001604001565.jpg",
},
{
    "name": "Cyberpunk 2077",
    "category": "Jogos",
    "price":1200,
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYfM7diiC6i_r3OmQWhBRFEmww2duzGKhquWj1GQ72f9HIxOmrtdmjawg17iTD&usqp=CAc",
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
/*
let botaoFinalizar = document.getElementsByClassName("menu4")

botaoFinalizar.addEventListener("click", ()=>{
    let enviarParaDetalhes = JSON.stringify(dadosTransferidos);
    console.log(enviarParaDetalhes)
	sessionStorage.setItem('dados', enviarParaDetalhes);
    window.location.href = "./Detalhes/index.html"
})*/