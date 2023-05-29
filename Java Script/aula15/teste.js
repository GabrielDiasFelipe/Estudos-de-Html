var fat = 5
var tab = [fat]

var fator = 0
while(fat >= 1 ){
    tab.push(fat-1) 
    fat = fat - 1
    }

console.log(tab)

var vz = Number(tab.length)
var cont = 0

while(vz >=1){
    
    cont = Number(cont + 1)
    tab[0] = tab[0] * tab[cont]
    console.log('OI')
    
    vz = vz - 1

}
console.log(tab[0])