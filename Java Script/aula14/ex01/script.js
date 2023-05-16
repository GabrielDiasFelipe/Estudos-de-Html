function cont(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var msg = document.getElementById('msg')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Estão Faltando Dados [ERRO]')
    }else{
        ini = Number(ini.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        document.getElementById('sec').style.display='none'
        document.getElementById('sec1').style.display='block'
        if(ini < fim){
            for(var cont = ini; cont<=fim; cont += passo){
            msg.innerHTML += `&#x1F449 ${cont}`
        }
        }else{
            for(let cont = ini; cont >= fim ; cont-= passo ){
                msg.innerHTML +=`${cont}&#x1F448 `
            }
        }
        
        
    }
    

}