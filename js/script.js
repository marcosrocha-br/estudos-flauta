const ESCALA = ["C","D","E","F","G","A","B"];

const ACIDENTE = ["","#","b"];

const MODO = ["maior","menor"];

const ALTURA = ["8ª acima", "8ª abaixo"];

const DINAMICA = ["pp", "p", "mf", "f", "ff"];

const VELOCIDADE = ["muito lento", "lento", "normal", "rápido", "muito rápido"];

TonalidadesCombinadas = []; // Lista formada apos a combinacao das tonalidades
CombinarTonalidade(); 

TonalidadesSelecionadas = []; // Lista para verificar se uma tonalidade repetiu



                        /********** PRINCIPAL **********/
saida();// Ja comeca com uma combinacao previa
document.getElementById("botao").addEventListener("click", saida); //Evento de clique do botao

function saida(){    
    
    document.getElementById("tonalidade").innerHTML = selectTonalidade(TonalidadesCombinadas);
    document.getElementById("dinamica").innerHTML = selectElemento(DINAMICA);
    document.getElementById("velocidade").innerHTML = selectElemento(VELOCIDADE);

    console.log(TonalidadesSelecionadas); //Verificar no console a tonalidade selecionada em cada chamada
}


                        /********** TONALIDADE **********/
// Retorna uma lista de 42 combinacoes diferentes
function CombinarTonalidade(){
    
    for(var x = 0; x < 42; x++){ // Vai rodar ate obter 42 combinacoes diferentes
        repete = true;
    
        do{
            var escala = selectElemento(ESCALA);
            var acidente = selectElemento(ACIDENTE);
            var modo = selectElemento(MODO);
            var combinacao = escala+acidente+modo;
    
            if(!TonalidadesCombinadas.includes(combinacao)){ // Validacao de duplicatas na lista. Futuramente utilizar hash table
                TonalidadesCombinadas.push(combinacao);
                repete = false;
            }

        }while(repete == true);
    
    }

    return TonalidadesCombinadas;
}

function selectTonalidade(lista){
    var n = Math.floor(Math.random()*lista.length);
    if(!TonalidadesSelecionadas.includes(lista[n]))
        TonalidadesSelecionadas = lista[n];
        return lista[n];
}


                        /********** ELEMENTOS GERNERICOS **********/
//Gerar elemento aleatorio
function selectElemento(lista){
    var n = Math.floor(Math.random()*lista.length);
    return lista[n];
}