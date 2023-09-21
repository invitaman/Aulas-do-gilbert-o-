/*

Crie um arquivo HTML com a div de id "principal" no arquivo HTML.
 Crie e importe um arquivo Javascript chamado main.js. Adicione o CSS do próximo slide a um arquivo CSS externo e link com seu HTML.
 Com Javascript:
 Adicione 3 elementos filhos do tipo h1, h2 e p,
respectivamente à div principal.
 Adicione o texto "Bem vindo ao JS" ao elemento h1
 Adicione o texto "Criando elementos de forma dinâmica" ao elemento h2
 Adicione o texto "Esse é um exemplo clássico de geração de HTML com Javascript" ao p
 Adicione a classe “tituloPrincipal” para o h1.
 Adicione a classe “tituloSec” para o h2.
 Adicione a classe “texto” para a tag p.
Escreva no caderno o que aconteceu após a execução de cada etapa


*/

/*
let divprinc = document.getElementById("Principal");



let h = document.createElement("h1");
h.innerText = "Bem vindo ao JS";



let hh = document.createElement("h2");
hh.innerText = "Criando elementos de forma dinâmica";


let p = document.createElement("p");
p.innerText = "Esse é um exemplo clássico de geração de HTML com Javascript";



divprinc.appendChild(h);

divprinc.appendChild(hh);

divprinc.appendChild(p);


h.classList.add("tituloPrincipal");
hh.classList.add("tituloSec");
p.classList.add("texto");


*/
/*Crie 10 objetos do tipo aluno que contenham
nome, email e matéria favorita (leia com
prompt).
❖ Adicione esses objetos de forma dinâmica
dentro da seção main do arquivo HTML a
seguir (próximo slide). Essa adição deve ser
feita após a leitura dos dados desses alunos.
Você deve criar um card para cada aluno,
conforme exemplo abaixo.*/

/*
let nome= [10];
let emai = [10];
let materifavorita = [10];

for (let i = 0; i < 10; i++) {
  


  let alunos= {
    nom: prompt("Digite o seu nome:"),
    email: prompt("Digite o seu email"),
    materiafavorita: prompt("Digite sua matéria favorita")
  };

  nome[i] = alunos.nom ;
  emai[i]=  alunos.email ;
  materifavorita[i]=  alunos.materiafavorita;


  let print1 = document.createElement("h1");
  print1.innerText = nome[i];
  let print2 = document.createElement("h1");
  print2.innerText = emai[i];
  let print3 = document.createElement("h1");
  print3.innerText = materifavorita[i];

 document.body.appendChild(print1);

document.body.appendChild(print2);
  
document.body.appendChild(print3);


print1.classList.add("tituloPrincipal");
print2.classList.add("tituloSec");
print3.classList.add("texto");

}
*/

/*
let em1= document.getElementById("hh1")

let em2= document.getElementById("hh2")
let i2=0;
let i3=0


em2.addEventListener(
  "click",function(){
   

    i3++;
     em2.innerText= 'Alguém Clicou Aqui (Brabo)'+i3;

}
)


em1.addEventListener(
  "click",function(){
   

    i2++;
     em1.innerText= 'Alguém Clicou Aqui (Brabo)'+i2;

}
)

*/

/*
let butao = document.getElementById("bt");

butao.addEventListener("Click", function () {
  const name = document.getElementById("en");

  let namenm = name.value;

  alert(namenm);
});
*/

/*
let bottom= document.getElementById("bt")

bottom.addEventListener("click",function()
{

  let nome =document.getElementById("en")
  let autor =document.getElementById("en2")
  let numpag =document.getElementById("en3")
  let paislanc =document.getElementById("en4")
  
 let Nome1 = document.createElement("h2");
  Nome1.innerText = nome.value;
  
  
  let Autor1 = document.createElement("h3");
  Autor1.innerText = autor.value;
  
  
  let Paginas = document.createElement("p");
  Paginas.innerText = numpag.value;
  
  
  let Pais =document.createElement("p");
  Pais.innerText = paislanc.value;
  
  document.body.appendChild(Nome1);
  document.body.appendChild(Autor1);
  document.body.appendChild(Paginas);
  document.body.appendChild(Pais);
  
  Nome1.classList.add("tituloPrincipal");
  Autor1.classList.add("tituloSec");
  Paginas.classList.add("texto");
  Pais.classList.add("texto");
}
)

*/

/*
Gere o conteúdo “Hoje é dia X/Y de XXXX (pesquise e use a função appendChild)
❖ Crie um elemento do tipo h1 no body do HTML com a mensagem inicial “msg base”.
❖ Em Javascript, acesse esse elemento pelo ID e modifique seu conteúdo com base no
horário local, sendo:
❖ Entre 6 e 11 horas: “Bom dia!”
❖ 12 horas: “Hora do Almoço!”
❖ 13 as 17: “Boa tarde!”
❖ 18 as 23: “Boa noite!”
❖ 0 horas: “Não disse que ia dormir mais cedo hoje?”
❖ Entre 1 e 5 horas: “Não está na netflix, está?”
❖ Escreva separadamente o arquivo.html do arquivo.js;
❖ Para realizar essa atividade, pesquise sobre como fazer para obter a data atual do seu
computador em javascript.*/

/*
let div = document.getElementById("Principal");

var data = new Date();
var dia = data.getDate();
var dia_sem = data.getDay();
var mes = data.getMonth()+1
var ano2 = data.getYear();
var ano4 = data.getFullYear(); 
var hora = data.getHours();

let msgpr = document.createElement("h1");
msgpr.innerText = "Hoje é dia" + " " + dia + " /" + mes + " de " + ano4;
document.body.appendChild(msgpr);
msgpr.classList.add("tituloPrincipal");
console.log(data);

console.log(hora)
if (hora >= 6 && hora <= 11)
 {
  let msgbase = document.createElement("h1");
  msgbase.innerText = "  Bom dia!";
  document.body.appendChild(msgbase);
  msgbase.classList.add("tituloSec");
}

else if (hora = 12)

{
  let msgbase = document.createElement("h1");
  msgbase.innerText = "Hora do Almoço!";
  document.body.appendChild(msgbase);
  msgbase.classList.add("tituloSec");
} 

else if (hora >= 13 && hora <= 17)

{
  let msgbase = document.createElement("h1");
  msgbase.innerText = "Boa tarde!";
  document.body.appendChild(msgbase);
  msgbase.classList.add("tituloSec");
}
if (hora >= 18 && hora <= 23) {
  let msgbase = document.createElement("h1");
  msgbase.innerText = "Boa noite!";
  document.body.appendChild(msgbase);
  msgbase.classList.add("tituloSec");
} 

else if (hora = 0)
{
  let msgbase = document.createElement("h1");
  msgbase.innerText = "Não disse que ia dormir mais cedo hoje?";
  document.body.appendChild(msgbase);
  msgbase.classList.add("tituloSec");
}



else if( hora >= 1 && hora <= 5)
{
  let msgbase = document.createElement("h1");
  msgbase.innerText = "Não está na netflix, está?";
  document.body.appendChild(msgbase);
  msgbase.classList.add("tituloSec");
}
*/


/*

Pesquise, dê a definição e a utilização, com
um exemplo, das seguintes funções em JS:
❖ removeChild
❖ replaceChild
❖ insertBefore

O método removeChild() remove um nó da árvore de documentos (DOM). Contudo, tome cuidado: esse método não é chamado no nó a ser removido, mas no pai desse nó (conforme implica a parte “child” de seu nome).

replaceChild Substitui o elemento filho especificado por outro.

insertBefore insertBefore() insere um nó antes do nó de referência como um filho de um nó pai especificado. Se o filho especificado for uma referência a um nó existente no documento, insertBefore() o moverá de sua posição atual para a nova posição (não há necessidade de remover o nó de seu nó pai antes de anexá-lo a outro nó)






*/