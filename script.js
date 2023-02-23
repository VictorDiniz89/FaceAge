function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''
        let img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem' 
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'jovemhomem.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'homem.png')
            }else {
                img.setAttribute('src', 'senhor.png')

            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancamenina.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'jovemmulhrer.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
            }else {
                img.setAttribute('src', 'senhora.png')   
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 