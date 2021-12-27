const ESCALA = ["C","D","E","F","G","A","B"];

const ACIDENTE = ["","#","b"];

const MODO = ["maior","menor"];

const ALTURA = ["8ª acima", "8ª abaixo"];

const DINAMICA = ["pp", "p", "mf", "f", "ff"];

const VELOCIDADE = ["muito lento", "lento", "normal", "rápido", "muito rápido"];

                        /********** ELEMENTOS GERNERICOS **********/
//Gerar elemento aleatorio
function selectElemento(lista){
    var n = Math.floor(Math.random()*lista.length);
    return lista[n];
}

                        /********** COMBINACAO DE ESCALA, ACIDENTE E MODO **********/
TonalidadesCombinadas = []; // Lista com 42 combinacoes diferentes
CombinarTonalidade(); 

function CombinarTonalidade(){ // Retorna uma lista com 42 combinacoes diferentes
    
    for(var x = 0; x < 42; x++){ // Vai rodar ate obter 42 combinacoes diferentes
        repete = true;
    
        do{
            var escala = selectElemento(ESCALA);
            var acidente = selectElemento(ACIDENTE);
            var modo = selectElemento(MODO);
            var combinacao = escala+acidente+" "+modo; // Formacao da tonalidade
    
            if(!TonalidadesCombinadas.includes(combinacao)){ // Validacao de duplicatas na lista. Futuramente utilizar hash table
                TonalidadesCombinadas.push(combinacao);
                repete = false;
            }

        }while(repete == true);

    }

    return TonalidadesCombinadas;
}

                        /********** SELECAO DA TONALIDADE FINAL **********/
TonalidadesSelecionadas = []; // Lista para garantir que uma tonalidade gerada nao seja repetida

function selectTonalidade(lista){ // Escolhe de forma aleatoria uma tonalidade dentro da lista passada 

    do{
        var inseriu = false;

        var n = Math.floor(Math.random()*lista.length); // O tamanho da lista é 42, porem os indices vao de 0 - 41
        
            //Teste para verificar a saida em console
        // console.log(n+": "+lista[n]);

        if(!TonalidadesSelecionadas.includes(lista[n])){
            TonalidadesSelecionadas.push(lista[n]);
            inseriu = true;
        }
        
                    //Teste de repeticao
        // if(inseriu == false)
        //    console.log(lista[n]+":"+"repetiu. Inserir = "+inseriu);
    
        if(TonalidadesSelecionadas.length == 42){ 
            // Como ele vai retornar 42 repeticoes diferentes, se passar disso, o while vai entrar em loop infinito.
            // Assim tem que zerar a lista pra comecar tudo do zero
            TonalidadesSelecionadas = [];
        }
    }while(inseriu == false);
    return lista[n];
}

                        /********** PRINCIPAL **********/
function saida(){    
    
    document.getElementById("tonalidade").innerHTML = selectTonalidade(TonalidadesCombinadas);
    document.getElementById("dinamica").innerHTML = selectElemento(DINAMICA);
    document.getElementById("velocidade").innerHTML = selectElemento(VELOCIDADE);
    
    // Teste para verificar as tonalidades ja impressas
    // console.log(TonalidadesSelecionadas);
}

saida();// Ja comeca com uma combinacao previa entre Tonalidade, Dinamica e Velocidade
document.getElementById("botao").addEventListener("click", saida); //Evento de clique do botao
