const DOM = {
    fecha: document.getElementById("horario"),
    islas: document.getElementById("islas"),
    se: document.getElementById("se"),
    sp: document.getElementById("sp"),
    on: document.getElementById("on"),
    hidden1: document.getElementById("hidden1"),
    hidden2: document.getElementById("hidden2"),
    hidden3: document.getElementById("hidden3"),
    enviar: document.getElementById("enviar"),
    span1: document.getElementById("span1"),
    span2: document.getElementById("span2"),
    span3: document.getElementById("span3"),

}
DOM.enviar.addEventListener('click', validarAntesDeEnviar);

(function(){
    completarHoraInicio();
})();
function completarHoraInicio(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    var hora = fecha.getHours(); //obteniendo hora
    var minutos = fecha.getMinutes(); //obteniendo minuto

    DOM.fecha.min=ano+"-"+minTwoDigits(mes)+"-"+minTwoDigits(dia)+"T"+minTwoDigits(hora)+":"+minTwoDigits(minutos);
}

function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

function dateJSON(){
    DOM.hidden3.value = new Date(DOM.fecha.value).toJSON();
}

DOM.islas.addEventListener('change', () => {
    let collection = DOM.islas.selectedOptions;
    collection = [].slice.call(collection);
    let arrSelected = [];
    collection.forEach(element => {
        arrSelected.push(element.value);
    });
    DOM.hidden2.value = arrSelected;
})

function validarAntesDeEnviar(event) {
    DOM.span1.textContent = "";
    DOM.span2.textContent = "";
    DOM.span3.textContent = "";
    if (!DOM.se.validity.valid) {
        DOM.span1.textContent = DOM.se.validationMessage;
        event.preventDefault();
    }
    if (!DOM.sp.validity.valid) {
        DOM.span1.textContent = DOM.sp.validationMessage;
        event.preventDefault();
    }
    if (!DOM.on.validity.valid) {
        DOM.span1.textContent = DOM.on.validationMessage;
        event.preventDefault();
    }
    if (!DOM.islas.validity.valid) {
        DOM.span2.textContent = DOM.islas.validationMessage;
        event.preventDefault();
    }
    if(!DOM.fecha.validity.valid){
        DOM.span3.textContent = DOM.fecha.validationMessage;
        event.preventDefault();
    }
    if(DOM.fecha.validity.valid)
        dateJSON();
}






