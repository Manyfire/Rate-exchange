function convertir(usd,taux) {
    let cad = usd * taux;
    return cad
}

function cambioDivice(){
    usd = document.getElementById('inputUsuario').value;
    taux = document.getElementById('inputTaux').value;
    cambio = convertir(usd,taux);
    document.getElementById('conversion').innerHTML=+ cambio;
    document.getElementById('mesaje').insertAdjacentHTML('beforeend',`<div>At the exchange rate of the day you will get for <b>${usd}</b> $ USD a montan in Canidian dollar of <b>${cambio}</b> $ CAD</div>`);
}

window.onload= inicio;

function inicio(){
    document.getElementById('click').onclick = cambioDivice;
}











    
    
