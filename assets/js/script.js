/* 
JS é Case sensitive =  reconhece letras maiúsculas e minúsculas
por tag: getElementByTagName
por Id: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por setor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '80%'
email.style.width = '80%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <3 ){
        txt.innerHTML = 'Nome Inválido!'
        txt.style.color = "red"
        }else{
            txt.innerHTML = 'Nome Válido!'
            txt.style.color = "green"
        }
}