function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
     if (num.value == 0) {
        window.alert('Insira os dados!\u{26A0}')
     } else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
     }
}