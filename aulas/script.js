
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = '/Aprendizado-em-JavaScript/imagens/MANHA2.0.png'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = '/Aprendizado-em-JavaScript/imagens/TARDE2.0.png'
}else{
    //BOA NOITE!
    img.src = '/Aprendizado-em-JavaScript/imagens/NOITE2.0.png'
}

}

