function contar () {
    var ini = document.getElementById('pi')
    var fim = document.getElementById('pf')
    var pas = document.getElementById('pp')
    var res = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || pas.value == 0) {
        window.alert('Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        if( i < p){
            for(var c = i; c < f; c += p) {
                res.innerHTML += `${c} \u{1F603}` // \u{1F603} é forma que o código dos emojis fica, para   achar mais emojis só ir no site emoji list
            } 
        }else {
            for(var c = i; c > f; c -=p) {
                res.innerHTML += `${c} \u{1F603}`
            }
        }
            
    }    
}
