function verificar () {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 ||Number(fano.value) > ano) {
    window.alert('ERRO - Por favor verificar os dados informados!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img') //inserir imagem usando JS
       img.setAttribute('id','foto') 
       if (fsex[0].checked) {
         gênero = 'Homem'
         if (idade >= 0 && idade < 12) {
            //Criança
            img.setAttribute('src', 'menino.png')
         } else if (idade < 18) {
            //Adolescente
            img.setAttribute('src', 'moço.png')
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homem.png')
         } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
         }
       } else if (fsex[1].checked) {
         gênero = 'Mulher'
         if (idade >= 0 && idade < 12) {
            //Criança
            img.setAttribute('src', 'menina.png')
         } else if (idade < 18) {
            //Adolescente
            img.setAttribute('src', 'moça.png')
         } else if (idade < 50) {
            //adulta
            img.setAttribute('src', 'mulher.png')
         } else {
            //idosa
            img.setAttribute('src', 'idosa.png')
         }
       }
       
       
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
      }

}