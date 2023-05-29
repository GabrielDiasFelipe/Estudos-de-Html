let num = document.querySelector('input#num')
let sel = document.getElementById('branco')
let lista = document.getElementById('flista')
var res = document.querySelector('div#sec1')
let valores = []

function inum(n){
 if(Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
}}

function inlista(n , l){ 
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(inum(num.value) && !inlista(num.value , valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adcionado`
        lista.appendChild(item)
        sel.style.height ='350px'
        res.innerHTML = ''
}else{
    window.alert('Valor Invalido ou Ja Adcionado Na Lista')
}
    num.value = ''
    num.focus()
}

function fim(){
    if(valores.length == 0 ){
        alert('Adcione Valores Antes de Finalizar!!')

    }else{
        sel.style.height ='550px'
        var tot = valores.length
        res.innerHTML = ''
        res.innerHTML += ` <p>Ao Todo Foram Cadastrados ${tot} Numeros.</p> `
    }
}