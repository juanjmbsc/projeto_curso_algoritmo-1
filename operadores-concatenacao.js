/*
Algoritmo "Concatenação"
// Juan Castro
// Rumo ao objetivo!
Var
nome: caracter
numero: real

Inicio
    escreva("Digite o nome: ")
    leia(nome)
    escreva("Digite o numero: ")
    leia(numero)
    
    escreva(nome, ", o numero digitado é", numero)
*/
var nome, numero
nome = prompt("Digite seu nome")
numero = prompt("Diite seu numero")

document.getElementById("oi").innerText = nome + " : " + numero