function cal(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if(num.value.length == 0){
        alert(`ESCOLHA UM NUMERO!!`)
    }else{
        document.getElementById('sec1').style.display = 'inline'
        num = Number(num.value)
        var c = 1
        tab.innerHTML =''
        while (c <=10){
            var item = document.createElement('option')
            item.text = ` ${num} x ${c} = ${num*c}`
            item.value =` tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}