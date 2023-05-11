function cal(){
    //Ano Atual
    var data = new Date()
    var anos = data.getFullYear()
 
 //Nascimento
     var nasc = document.getElementById('nasc')
     nasc = Number(nasc.value)    
//teste
    if(nasc ==0 || nasc > anos){
        window.alert(`[ERROR] Verifique os dados`) 
    }else{
        var ide = anos - nasc
        var sex = document.getElementsByName('sex')
        var gen =''
        var img = document.getElementById('Perfil')
// esconder e aparecer as divs
        document.getElementById('sec').style.display='none'
        document.getElementById('sec1').style.display='inline-block'    
        if(sex[0].checked){
            gen = 'Masculino'
            if(ide > 0 ){
                img.src ='img/criança-m.jpg' 
            }
            
        }else if(sex [1].checked){
            gen = 'Feminino'

        }else{
            gen = 'Indefinido'
        }

    }
     

 //Mulheres
 
}