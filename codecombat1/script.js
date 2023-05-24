const botoes = document.querySelectorAll(".card-body button");
const limpou = document.querySelector("#limpar-btn");
const seguir = document.querySelector("#seguir");
const btnPrecionados = [" "];
const arrayCOnvertida = " ";

botoes.forEach(function(botao){
    limpou.addEventListener("click", function(){
         if(botao.classList.contains("btn-primary")){
            botao.classList.remove("btn-primary");
            botao.classList.add("btn-outline-primary");
        }
    });
  
    botao.addEventListener("click", function(){
      if(botao.classList.contains("btn-outline-primary")){
            botao.classList.remove("btn-outline-primary");
            botao.classList.add("btn-primary");
        }else{
            botao.classList.remove("btn-primary");
            botao.classList.add("btn-outline-primary");
        }
    });
  
});


