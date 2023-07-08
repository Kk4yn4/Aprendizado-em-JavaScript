function contar(){
    var nInicio = document.getElementById('inicio')
    var nFim = document.getElementById('fim')
    var nPasso = document.getElementById('passo')
    var res = document.getElementById('res')
    if(nInicio.value.length == 0 || nFim.value.length == 0 || nPasso.value.length == 0 ){
        res.innerHTML = ('Inpossivel contar!')
        //window.alert('[ERROR] Falta dados!')

    }else {
        res.innerHTML = ('contando:</br>')
        var i = Number(nInicio.value)
        var f = Number(nFim.value)
        var p = Number(nPasso.value)
        if(p <= 0){
            window.alert('Passo invalido')
        }
        if (i < f){
        for(var n = i; n <= f; n += p ){
            res.innerHTML += `${n} \u{1F449}`
        }
        
    } else{
        for(var n = i; n >= f; n -= p)
        res.innerHTML += `${n} \u{1F449}`
        
    }
    res.innerHTML += `\u{1F3C1}`
}

}
