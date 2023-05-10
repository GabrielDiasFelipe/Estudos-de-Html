function carregar(){
    //var img
    var i = window.document.getElementById('img')
    //data do sistema
    var data = new Date()
    horas = data.getHours()
    //mensagem que sera exibida
    var msg = document.getElementById('sec')
    
    //CONDIÇÕES

    if(horas >=5 && horas < 12){

        //BOM DIA
        var bom = "Bom Dia!"
        msg.innerHTML=` ${bom} <br> Agora são ${horas} horas`
    }else if(horas >=12 && horas < 18 ){
        //Boa Tarde
        i.src = 'img/Tarde.jpg'
        var bom = "Boa Tarde!"
        msg.innerHTML=` ${bom} <br> Agora são ${horas} horas`
        document.body.style.background = "#F2A057"

    }else if(horas >= 18 && horas < 24){
        //Boa Noite
        i.src = 'img/Noite.jpg'
        var bom = "Boa Noite!"
        msg.innerHTML=` ${bom} <br> Agora são ${horas} horas`
        document.body.style.background = "#0F1225"
    }else if(horas < 5 && horas >= 0 ){
        //Boa Madrugada
        i.src = 'img/Madrugada.jpg'
        var bom = "Boa Madrugada!"
        msg.innerHTML=` ${bom} <br> Agora são ${horas} horas`
        document.body.style.background = "#404040"
    }else{
        //Inexistente
        i.style.display = 'none'
        msg.innerHTML= `[ERROR]<br>Este Horario Não Existe.<br>[ERROR]`
        document.body.style.background = "red"
    }


}