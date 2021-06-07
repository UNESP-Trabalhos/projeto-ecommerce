let divFrete = document.getElementById("tempoFrete")

let texto = document.createElement("h3");
let aleatorio = Math.floor(Math.random() * (8 - 3 + 1) + 3);
let divComprador = document.getElementById("informacoesComprador")

texto.innerHTML = `O Prazo para entrega é de ${aleatorio} dias! Obrigado pela Compra!`

divFrete.appendChild(texto)

let dados = JSON.parse(sessionStorage.getItem('meus_dados'));
let produtos = JSON.parse(sessionStorage.getItem('produtos'));
console.log(dados)

divComprador.innerHTML = `Nome do Comprador: ${dados[0].Nome} <br> Endereço: ${dados[0].Endereco} <br>
                        Número: ${dados[0].Numero} <br> Cidade: ${dados[0].Cidade} <br> `


function main(){
    let Cardiv = document.getElementById("resume-data");
    let soma = 0

    for(k = 0; k<produtos.length; k++){
        let divProduct = document.createElement("div");
        let divSpecs = document.createElement("div");
        let divPrice = document.createElement("div");
        let divTitle = document.createElement("h3");
        let image = document.createElement("img");
        divProduct.classList.add("resume-data--item");
        divSpecs.classList.add("item-specs");
        divPrice.classList.add("item-price");
        divTitle.classList.add("item-description");
        image.classList.add("item-image");
        divTitle.innerHTML = produtos[k].name;
        image.src = "." + produtos[k].image;
        divPrice.innerHTML = "R$ " + produtos[k].price;
        soma = soma + produtos[k].price
        divSpecs.appendChild(image);
        divSpecs.appendChild(divTitle);
        divProduct.appendChild(divSpecs);
        divProduct.appendChild(divPrice);
        Cardiv.appendChild(divProduct);
    }

}