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
for(i = 1; i <= 20; i++) 
    ARTICULACAO.push(i);

                        /********** SELECIONAR ELEMENTO **********/
// Lista para guardar os elementos que ja foram mostrados. Assim da para garantir que um elemento nao seja mostrado duas vezes.
// Tem que colocar as listas antes da funcao porque serao verificadas pelas funcao.
TonalidadesGeradas = []; 
DinamicasGeradas = [];
VelocidadesGeradas = [];
ArticulacaoGerada = ["01","02","03","04","05","06","07","08","9","10", "11"];

function selectElemento(lista, listaFinal){ // Escolhe de forma aleatoria UMA tonalidade dentro da lista passada. 

    do{
        
        var inseriu = false;

        var n = Math.floor(Math.random()*lista.length); 

        if(!listaFinal.includes(lista[n])){
            listaFinal.push(lista[n]);
            inseriu = true;
        }
        
                    //VALIDACAO DE REPETICAO
        //if(inseriu == false)
        //    console.log(lista[n]+":"+"repetiu. Inserir = "+inseriu);
    
        if(listaFinal.length == lista.length){ 
            // Como ele vai retornar um numero x de repeticoes diferentes, 
            // se passar disso, o while vai entrar em loop infinito.
            // Assim tem que zerar a lista pra comecar tudo do zero
            listaFinal = [];
        }
    }while(inseriu == false);
    return lista[n];
}

                        /********** PRINCIPAL **********/
function saida(){    

    var tonalidadeMaior = document.createElement("li");
    tonalidadeMaior.innerText = "T: " + selectElemento(TONALIDADE, TonalidadesGeradas);
    document.getElementsByClassName("ton")[0].appendChild(tonalidadeMaior);
   
    var dinamica = document.createElement("li");
    dinamica.innerText = "D: " + selectElemento(DINAMICA, DinamicasGeradas);
    document.getElementsByClassName("ton")[0].appendChild(dinamica);

    var velocidade = document.createElement("li");
    velocidade.innerText = "V: " + selectElemento(VELOCIDADE, VelocidadesGeradas);
    document.getElementsByClassName("ton")[0].appendChild(velocidade);

    var articulacao = document.createElement("IMG");
    articulacao.setAttribute("src", "img/articulacoes/"+selectElemento(ARTICULACAO, ArticulacaoGerada)+".png");
    articulacao.setAttribute("width", "150px");
    articulacao.setAttribute("height", "60px");
    document.getElementsByClassName("articulacao")[0].appendChild(articulacao);
        
}

saida();// Ja comeca com uma combinacao previa
document.getElementById("botao").addEventListener("click", saida); //Evento de clique do botao
