var buttonCifrar = document.querySelector("#cifrar");
var buttonDecifrar = document.querySelector("#decifrar");
var buttonCopiar = document.querySelector("#botao-copiar");
var entradaTexto = document.querySelector("#entrada-texto");
var resposta = document.querySelector("#texto-decifrado");
var imagem2 = document.querySelector("#nenhumamensagem");
var imagem1 = document.querySelector(".img-detetive")


function criptografar() {
if(entradaTexto.value!="") {
    reposta0 = entradaTexto.value.toLowerCase();
    resposta1 = reposta0.replace(/e/g,"enter");
    resposta2 = resposta1.replace(/i/g,"imes");
    resposta3 = resposta2.replace(/a/g,"ai");
    resposta4 = resposta3.replace(/o/g,"ober");
    respostaCriptografada = resposta4.replace(/u/g,"ufat");
    resposta.textContent = respostaCriptografada;
    resposta.disabled = false;

    //desabilitar imagem do detetive:

    imagem1.classList.add("invisivel");

    imagem2.classList.add("invisivel");

    //habilitar botão de copiar:

    document.querySelector("#botao-copiar").disabled=false;
    document.querySelector("#copy").style.display = "none";

} else {
    alert("texto não pode está vazio!")
}
}

function descriptografar() {        

if(entradaTexto.value!="") {
    resposta1 = entradaTexto.value.replace(/enter/g,"e");
    resposta2 = resposta1.replace(/imes/g,"i");
    resposta3 = resposta2.replace(/ai/g,"a");
    resposta4 = resposta3.replace(/ober/g,"o");
    respostaDescriptografada = resposta4.replace(/ufat/g,"u");
    resposta.disabled = false;
    resposta.textContent=respostaDescriptografada;


    //desabilitar imagem do detetive:

    imagem1.classList.add("invisivel");
    imagem2.classList.add("invisivel");

    //habilitar botão de copiar:

    document.querySelector("#botao-copiar").disabled=false;
    document.querySelector("#copy").style.display = "none";


    
    
    } else {
    alert("texto não pode está vazio!")
    }
}
// Criando função que será acionada ao clicar no botão copiar:

function copiar() {
    var textoCopiado = resposta.value;
    navigator.clipboard.writeText(textoCopiado);
    document.querySelector("#copy").style.display = "block";
}

buttonCifrar.addEventListener("click",criptografar);
buttonDecifrar.addEventListener("click",descriptografar);
buttonCopiar.addEventListener("click",copiar);

