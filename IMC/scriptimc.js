

 function finalizar(){
    
    let nome = document.getElementById('nometxt').value;
    let sobren = document.getElementById('sobrentxt').value;
    let idade = document.getElementById('idadetxt').value;
    let peso = document.getElementById('pesotxt').value;
    let altura = document.getElementById('alturatxt').value;
    let res = document.getElementById('res');
    let pesaltid = document.getElementById('restpeso');
    let resdicas = document.getElementById('resdica')

    let imc = peso / (altura*altura)
    let imccompacto = imc.toString().slice(0,4);
    
    let agua = (peso*37)
     
    if(nome !== '' && sobren !== '' && peso >=1 && altura >= 1){
        res.innerHTML = `Olá ${nome} ${sobren}, seja bem-vindo!`;
        if(peso > 1 && altura > 1){
            pesaltid.innerHTML=`${nome} você tem: ${idade} anos </br> você pesa: ${peso} kg <br/> sua altura é de: ${altura} mts <br/> <br/> SEU <strong>IMC</strong> É DE <strong>${imccompacto}</strong` ;
            resdicas.innerHTML=`<strong>${nome}</strong> a cima temos uma tabela com o grau do <strong>IMC</strong> <br/> com base nisso, se for de sua vontade procure um profissional da saúde. <br/> </br> Nossa maior dica é, <strong>BEBA ÁGUA:</strong> com a informação que temos sobre o seu peso calculamos que você precisa beber <strong>${agua}ML</strong> de água diariamente`
            
             
        }
    }else{
        res.innerHTML='Tem informções faltando';
    }

   
   
    /*if(idad <= 0 || pes <= 0 || alt <=0){
        alert('erro')
    }*/

    


 }
