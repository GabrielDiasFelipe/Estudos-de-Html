function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = document.getElementById('titulo');
    var data = new Date()
    var hora = data.getHours()  
    var minuto = data.getMinutes()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos .`

    if(hora >=0 && hora <12){
        img.src = 'images/manha-png.png'
        document.body.style.background = '#f2ebdc'
        titulo.style.color = 'black';
        
        

    }else if(hora>=12 && hora <18){
        img.src ='images/tarde-png.png'
        document.body.style.background = '#de7c58'

    }else {
        img.src = 'images/noite-png.png'
        document.body.style.background = '#1e253b'

    }

}