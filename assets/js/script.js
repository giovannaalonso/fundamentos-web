/* 
JS é Case sensitive =  reconhece letras maiúsculas e minúsculas
por tag: getElementByTagName
por Id: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por setor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#e-mail')
let email = document.querySelector('#assunto')

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <3 ){
        txt.innerHTML = 'Nome Inválido!'
        }else{
            txt.innerHTML = 'Nome Válido!'
        }
}