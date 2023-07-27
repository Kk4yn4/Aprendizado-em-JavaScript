/*var valores = [7,8,5,2,0,4,5,6,5]
for(pos = 0; pos < valores.length; pos++){
    console.log(`${pos} tem o valor ${valores[pos]} `)
for(var pos in valores){
    console.log(`${pos} o valor e ${valores[pos]}`)*/

    var num = [0,5,9,8,7,4,1]
    num.sort()
    console.log(`${num}`)
   
    let pos = num.indexOf(10)
    

    if(pos == -1){
        console.log('[ERRO]')
    }else{
        console.log(`O numero  e ${pos}`)
    }
