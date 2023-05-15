function cont(){
    var ini = document.getElementById('ini')
    ini = Number(ini.value)
    var fim = document.getElementById('fim')
    fim = Number(fim.value)
    var passo = document.getElementById('pas')
    passo = Number(passo.value)
    var msg = document.getElementById('msg')
    
    if(passo <= 0){
        alert('O Numero De Passo Não Deve ser igual ou menor que 0,Contaremos com 1')
        passo++
    }
    document.getElementById('sec').style.display='none'
    document.getElementById('sec1').style.display='block'
    for(var cont = ini; cont<=fim; cont += passo){
       msg.innerHTML += `&#x1F449 ${cont} `
    }
    msg.innerHTML += `&#x1F3C1`

}