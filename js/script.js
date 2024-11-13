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
function copia(origem, destino){
    for(pos in origem){
        destino.push(origem[pos]);
    }
}

copia(TONALIDADE, tonalidadeAux);
copia(DINAMICA, dinamicaAux);
copia(VELOCIDADE, velocidadeAux);
copia(ARTICULACAO, articulacaoAux);

                        /********** SELECAO DE ELEMENTOS **********/
function selectElemento(lista){

    if(lista.length >= 0){

        var n = Math.floor(Math.random() * lista.length); 

        if(lista.length == 0){
            switch(lista){
                case tonalidadeAux:
                    copia(TONALIDADE, tonalidadeAux);
                    break;
                case dinamicaAux:
                    copia(DINAMICA, dinamicaAux);
                    break;
                case velocidadeAux:
                    copia(VELOCIDADE, velocidadeAux);
                    break;
                case articulacaoAux:
                    copia(ARTICULACAO, articulacaoAux);
            }
        }

        return lista.splice(n, 1);   
    }
}

                        /********** PRINCIPAL **********/
let cont = 0;
function saida(){    

    cont++;
    var tom = selectElemento(tonalidadeAux);
    var dinamica = selectElemento(dinamicaAux);
    var velocidade = selectElemento(velocidadeAux);
    var articulacao = selectElemento(articulacaoAux);
    
    var tonalidade = document.querySelector(".elementos");
    tonalidade.insertAdjacentHTML("beforeend", 
    `
    <tr class="item">
        <td class="text-center align-content-center">${tom}<br>${dinamica}<br>${velocidade}</td>
        <td class="align-content-center text-center">
            <img src="../img/articulacoes/${articulacao}.png" width="80%" >
        </td>
        
        <td class="align-content-center text-center">
            <div class="btn-group" role="group">
              <input type="radio" class="btn-check" name="${'dificuldade'+cont}" id="${'facil'+cont}" autocomplete="off">
              <label class="btn btn-outline-success border-0 item-dificuldade" for="${'facil'+cont}">Fácil</label>
          
              <input type="radio" class="btn-check" name="${'dificuldade'+cont}" id="${'medio'+cont}" autocomplete="off">
              <label class="btn btn-outline-warning border-0 item-dificuldade" for="${'medio'+cont}">Médio</label>
          
              <input type="radio" class="btn-check " name="${'dificuldade'+cont}" id="${'dificil'+cont}" autocomplete="off">
              <label class="btn btn-outline-danger border-0 item-dificuldade" for="${'dificil'+cont}">Difícil</label>
            </div>
        </td>
    </tr>

    `);
}

// Funcao para atualizar a pagina e limpar as opcoes geradas
function restart(){
    window.location.reload();
}

saida();// Ja comeca com uma combinacao previa
document.getElementById("gerar").addEventListener("click", saida); //Evento para gerar o conteudo
document.getElementById("restart").addEventListener("click", restart); //Evento para atualizar a pagina