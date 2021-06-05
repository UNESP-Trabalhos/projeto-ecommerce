let botaoFinalizar = document.getElementById("voltar")

botaoFinalizar.addEventListener("click", ()=>{
    let dados = JSON.parse(sessionStorage.getItem('dados'));
    console.log(dados);
	sessionStorage.setItem('dados', dados);
    window.location.href = "../mainPage.html"
})

let dadosUsuario = [{
    Nome: "",
    Endereco: "",
    Cidade: "", 
    Estado: ""
}]

let form = document.getElementById('formulario');
let nome = document.getElementById('nome');
let endereco = document.getElementById('endereco');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');
let botao = document.getElementById("finalizar")

botao.addEventListener('click', ()=>{
    let bool = true
   
    
    if(bool == true){
        /*dadosUsuario[0].Nome = nome.value
        dadosUsuario[0].Endereco = endereco.value
        dadosUsuario[0].Cidade = cidade.value
        dadosUsuario[0].Estado = estado.value*/
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
    let Cardiv = document.getElementById("CarrinhoCompras")

    if(dados.length == 0){
        Cardiv.innerHTML = `<h2>Seu Carrinho está Vazio</h2>`
    }

    for(k = 0; k<dados.length; k++){
        let divProduct = document.createElement("div");
        let image = document.createElement("img");
        let text = document.createElement("div");
        let title = document.createElement("h3");
        let price = document.createElement("h4")
        title.innerHTML = dados[k].name;
        image.src = dados[k].image;
        image.classList.add("productImg");
        price.innerHTML = "R$ " + dados[k].price;
        text.appendChild(title);
        text.appendChild(price);
        text.classList.add("texto");
        divProduct.appendChild(image);
        divProduct.appendChild(text);
        divProduct.classList.add("products");
        Cardiv.appendChild(divProduct);
    }
}