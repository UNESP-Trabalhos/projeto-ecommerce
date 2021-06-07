let botaoVoltar = document.getElementById("voltar")

botaoVoltar.addEventListener("click", ()=>{
    let dados = JSON.parse(sessionStorage.getItem('dados'));
    console.log(dados);
	sessionStorage.setItem('dados', dados);
    window.location.href = "../mainPage.html"
})

let dadosUsuario = [{
    Nome: "",
    Endereco: "",
    Numero: "",
    Cidade: "" 
}]

let nome = document.getElementById('nome');
let endereco = document.getElementById('endereco');
let numero = document.getElementById('numero');
let cidade = document.getElementById('cidade');
let botaoFinalizar = document.getElementById("finalizar")

botaoFinalizar.addEventListener('click', ()=>{
    let bool = true
    if(nome.value == ""){
        alert("Preencha o Valor Nome")
        bool = false
    }
    if(endereco.value == ""){
        alert("Preencha o Valor Endereço")
        bool = false
    }
    if(cidade.value == ""){
        alert("Preencha o Valor Cidade")
        bool = false
    }
    if(numero.value == ""){
        alert("Preencha o Numero da Residencia")
        bool = false
    }
    
    if(bool == true){
        dadosUsuario[0].Nome = nome.value
        dadosUsuario[0].Endereco = endereco.value
        dadosUsuario[0].Cidade = cidade.value
        dadosUsuario[0].Numero = numero.value
        let dados_selecionados = []
        dados_selecionados.push(dadosUsuario[0])
        let para_enviar = JSON.stringify(dados_selecionados);
        console.log(para_enviar)
		sessionStorage.setItem('meus_dados', para_enviar);
        window.location.href = "./confirmation.html"
    }
})

function main(){
    let dados = JSON.parse(sessionStorage.getItem('dados'));
    let Cardiv = document.getElementById("resume-data");
    let soma = 0
    console.log(dados)
    if(dados.length == 0){
        Cardiv.innerHTML = `<h2>Seu Carrinho está Vazio</h2>`
    }

    for(k = 0; k<dados.length; k++){
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
        divTitle.innerHTML = dados[k].name;
        image.src = "." + dados[k].image;
        divPrice.innerHTML = "R$ " + dados[k].price;
        soma = soma + dados[k].price
        divSpecs.appendChild(image);
        divSpecs.appendChild(divTitle);
        divProduct.appendChild(divSpecs);
        divProduct.appendChild(divPrice);
        Cardiv.appendChild(divProduct);
    }

    let divPrecoFinal = document.createElement("div");
    let divPrecoFrete = document.createElement("div");
    let divPrecoTotal = document.createElement("div");
    divPrecoFinal.classList.add("resume-data--preco");
    divPrecoFrete.classList.add("preco-frete");
    divPrecoTotal.classList.add("preco-total");
    divPrecoFrete.innerHTML = "Frete - R$ 14,99";
    soma = soma + 14.99;
    divPrecoTotal.innerHTML = "TOTAL - R$ " + soma;
    divPrecoFinal.appendChild(divPrecoFrete)
    divPrecoFinal.appendChild(divPrecoTotal)
    Cardiv.appendChild(divPrecoFinal);

}