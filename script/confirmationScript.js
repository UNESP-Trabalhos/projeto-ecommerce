let divFrete = document.getElementById("tempoFrete")

let texto = document.createElement("h3");
let aleatorio = Math.floor(Math.random() * (8 - 3 + 1) + 3);
let divComprador = document.getElementById("informacoesComprador")

texto.innerHTML = `O Prazo para entrega é de ${aleatorio} dias! Obrigado pela Compra!`

divFrete.appendChild(texto)

let dados = JSON.parse(sessionStorage.getItem('meus_dados'));
console.log(dados)

divComprador.innerHTML = `Nome do Comprador: ${dados[0].Nome} <br> Endereço: ${dados[0].Endereco} <br>
                        Número: ${dados[0].Numero} <br> Cidade: ${dados[0].Cidade} <br> `
