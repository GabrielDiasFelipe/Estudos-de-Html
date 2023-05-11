function cal(){
    //Ano Atual
    var data = new Date()
    var anos = data.getFullYear()
 
 //Nascimento
     var nasc = document.getElementById('nasc')
     nasc = Number(nasc.value)    
//teste
    if(nasc <=1890 || nasc > anos){
        window.alert(`[ERROR] Verifique os dados`) 
    }else{
        var ide = anos - nasc
        var sex = document.getElementsByName('sex')
        var gen =''
        var img = document.getElementById('perfil')
        var msg = document.getElementById('msg')
// esconder e aparecer as divs
        document.getElementById('sec').style.display='none'
        document.getElementById('sec1').style.display='inline-block'
        document.getElementsByTagName('section')[0].style.height='340px'        
        if(sex[0].checked){
            gen = 'Masculino'
            if (ide < 16) {
            img.src ='img/criança-m.jpg' 
            msg.innerHTML=`Você é menor de idade, pois possue ${ide} Anos de Idade  `

            } else if (ide < 23) {
            img.src ='img/adolecente-m.jpg' 
            msg.innerHTML=`Você é Um Futuro Adulto De ${ide} Anos de Idade  `

            } else if (ide < 40) {
            img.src ='img/adulto-m.png' 
                    msg.innerHTML=`Você é Jovem Adulto De ${ide} Anos de Idade  `

            }else {
            img.src ='img/idosoM.jpeg' 
            msg.innerHTML=`Você é Senhor De ${ide} Anos de Idade  `
            }
        }else if(sex [1].checked){
            gen = 'Feminino'
            if (ide < 16) {
   
                img.src ='img/criança-f.jpg' 
                       msg.innerHTML=`Você é menor de idade, pois possue ${ide} Anos de Idade  `
                    } else if (ide < 23) {
                   img.src ='img/adolecente-f.png' 
                       msg.innerHTML=`Você é Um Futura Adulta De ${ide} Anos de Idade  `
                
                    } else if (ide < 40) {
                img.src ='img/adulto-f.jpg' 
                       msg.innerHTML=`Você é Uma Jovem Adulta De ${ide} Anos de Idade  `
                
                    }else {
                   img.src ='img/idosaF.jpg' 
                        msg.innerHTML=`Você é uma Senhora De ${ide} Anos de Idade  `
                    }
                

        }else{
            gen = 'Indefinido'
           if (ide < 16) {
    msg.innerHTML=`Você é menor e ${ide} Anos de Idade  `
    } else if (ide < 23) {
        msg.innerHTML=`Você é Um(a) Adolecente De ${ide} Anos de Idade  `
    } else if (ide < 40) {  
        msg.innerHTML=`Você é um(a) Adulto(a) De ${ide} Anos de Idade  `
    }else {
        msg.innerHTML=`Você é um(a) idoso(a) De ${ide} Anos de idade`
    }
            

    }
     

}
}


