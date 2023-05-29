//Variaveis 
var nuns = []
var cont = 0
var div = document.getElementById('sec1')
var som = 0
//Função
function  opp(){
   if(nuns.indexOf(num.value)  < 0){
      alert
   nuns.push(num.value)
   let opt = document.createElement('option')
   opt.text = `O Numero ${nuns[cont]} Foi Adcionado`
   document.getElementById('sel').appendChild(opt)
   cont++
   }else{
      alert('Numero Ja Adcionado!!')  
}
}
function enviar(){
   var num = document.getElementById('num')
   div.style.display = 'none'
   if(num.value < 1 || num.value > 100){
      alert('Digite Um Numero Valido Para Continuar.')
   } else{
      som = 0
      opp()
   }
   num.value = ''
   num.focus()
}
function fim(){

   div.style.display = 'Inline-Block'

   for (var c = 0; c < nuns.length;c++){
      som = som + Number(nuns[c])
   }
   var maior = nuns[0]
   var menor = nuns [0]
   
   for(let pos in nuns){
      if(maior < nuns[pos]){
         maior = nuns[pos]
      }if(nuns[pos] < menor){
         menor = nuns[pos]
      }
   }
   
   let mnum = nuns.length -1
   document.getElementById('total').innerHTML = `No total foram adicionados ${nuns.length} Numeros.`
   document.getElementById('soma').innerHTML = `A Soma Entre Eles Daria: ${som}`
   document.getElementById('media').innerHTML = `A Media Deles é ${som / nuns.length}`
   document.getElementById('maior').innerHTML = `O Maior Numero Adcionado Foi: ${maior} ` 
   document.getElementById('menor').innerHTML = `O Menor Numero Adcionado Foi: ${menor}`
   alert(cres)
}
