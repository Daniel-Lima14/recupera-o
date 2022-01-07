function boasVindas(){
    let nome = document.querySelector('#Nome')
    let idade = document.querySelector('#time') 
    
    let div = document.querySelector('div')
     
    let novoP1 = document.createElement('p')
    let novoP2 = document.createElement('p')

   
    let texto1 = document.createTextNode("Bem vindo")
    let texto2 = document.createTextNode(`Seu nome e ${nome.value},Seu time e ${time.value}`)
    novoP1.appendChild(texto1)
    novoP2.appendChild(texto2)
    

    div.appendChild(novoP1)
    div.appendChild(novoP2)
   

    div.id = "boasVindas"
}



let botao = document.querySelector('button')
botao.addEventListener("click",boasVindas)
