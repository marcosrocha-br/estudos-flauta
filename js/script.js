const TONALIDADE = [
    "C", "C 8° acima",
    "Db", "Db 8° acima", "D", "D 8° acima",
    "Eb", "E",
    "F",
    "Gb", "G",
    "Ab", "A",
    "Bb", "B", "B 8° abaixo",

    "Cm", "Cm 8° acima", "C#m", "C#m 8° acima",
    "Dm", "Dm 8° acima",
    "Ebm", "E", "Em",
    "Fm", "F#m",
    "Gm", "G#m",
    "Am",
    "Bbm","Bm", "Bm 8° abaixo"
];

const DINAMICA = ["pp", "p", "mf", "f", "ff"];

const VELOCIDADE = ["muito lento", "lento", "normal", "rápido", "muito rápido"];

const ARTICULACAO = [];
for(x = 1; x <= 37; x++)
    ARTICULACAO.push(x);

                        /********** VARIAVEIS AUXILIARES **********/
// A ideia e selecionar um elemento da lista auxiliar de forma aleatoria e depois
// remover esse elemento para nao ser mais selecionado. Quando o tamanho da lista for igual 
// a zero, a lista auxiliar recebera o dados novamente.

var dinamicaAux = []; 
var tonalidadeAux = [];
var velocidadeAux = [];
var articulacaoAux = [];

                        /********** COPIAR LISTA **********/

// Funcao para copiar o elementos de uma lista em outra
// Quando copiado utilizando atribuicao, sao atribuidas as referencias. 
// Se alterar a copia, altera a original
function copiar(origem, destino){
    for(pos in origem){
        destino.push(origem[pos]);
    }
}

copiar(TONALIDADE, tonalidadeAux);
copiar(DINAMICA, dinamicaAux);
copiar(VELOCIDADE, velocidadeAux);
copiar(ARTICULACAO, articulacaoAux);

                        /********** SELECAO DE ELEMENTOS **********/
function selectElemento(lista){

    if(lista.length >= 0){

        var n = Math.floor(Math.random() * lista.length); 

        if(lista.length == 0){
            switch(lista){
                case tonalidadeAux:
                    console.log("tonalidade");
                    copiar(TONALIDADE, tonalidadeAux);
                    break;
                case dinamicaAux:
                    console.log("dinamicas zeradas");
                    copiar(DINAMICA, dinamicaAux);
                    break;
                case velocidadeAux:
                    console.log("velocidade");
                    copiar(VELOCIDADE, velocidadeAux);
                    break;
                case articulacaoAux:
                    console.log("articulacao");
                    copiar(ARTICULACAO, articulacaoAux);
            }
        }

        return lista.splice(n, 1);   
    }
}

                        /********** PRINCIPAL **********/
function saida(){    

    var tom = selectElemento(tonalidadeAux);
    var dinamica = selectElemento(dinamicaAux);
    var velocidade = selectElemento(velocidadeAux);
    var articulacao = selectElemento(articulacaoAux);
    
    var tonalidade = document.querySelector(".elementos");
    tonalidade.insertAdjacentHTML("beforeend", 
    `<div class="itens">
        <div class="item ton">${tom}<br>${dinamica}<br>${velocidade}</div>
        <div class="item art">
            <img src="img/figuras/${articulacao}.png" width="100%" >
        </div>
    </div>`);

}

saida();// Ja comeca com uma combinacao previa
document.getElementById("botao").addEventListener("click", saida); //Evento de clique do botao