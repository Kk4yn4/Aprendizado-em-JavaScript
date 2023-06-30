function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERROR] Verifque os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                 //CRIANÇA
                 img.setAttribute('src', '/Aprendizado-em-JavaScript/imagens/Hcrianca.png')
            }else if (idade < 21){
                //JOVEM
                img.setAttribute('src', '/Aprendizado-em-JavaScript/imagens/Hjovem.png')
            }else if (idade < 50){
                //ADULTO
                img.setAttribute('src', '/Aprendizado-em-JavaScript/imagens/H.adulto.png')
            }else{
                //IDOSO
                img.setAttribute('src', '/Aprendizado-em-JavaScript/imagens/Hidoso.png')
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', '/Aprendizado-em-JavaScript/imagens/Mcrianca.png')
           }else if (idade < 21){
               //JOVEM
               img.setAttribute('src', '/Aprendizado-em-JavaScript/imagens/Mjovem.png')
           }else if (idade < 50){
               //ADULTO
               img.setAttribute('src', '/Aprendizado-em-JavaScript/imagens/M.adulta.png')
           }else{
               //IDOSO
               img.setAttribute('src' , '/Aprendizado-em-JavaScript/imagens/Midosa.png')
           }
           
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}