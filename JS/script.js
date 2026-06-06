function calcularPrecios(){

    let producto =
    document.getElementById("producto").value;

    let anterior =
    parseFloat(document.getElementById("precioAnterior").value);

    let actual =
    parseFloat(document.getElementById("precioActual").value);

    let cantidad =
    parseFloat(document.getElementById("cantidad").value);

    let semanas =
    parseFloat(document.getElementById("semanas").value);

    if(producto=="" ||
       isNaN(anterior) ||
       isNaN(actual) ||
       isNaN(cantidad) ||
       isNaN(semanas))
    {
        alert("Complete todos los campos");
        return;
    }

    let incremento =
    actual-anterior;

    let porcentaje =
    (incremento/anterior)*100;

    let gastoAntes =
    anterior*cantidad*semanas;

    let gastoAhora =
    actual*cantidad*semanas;

    let diferencia =
    gastoAhora-gastoAntes;

    document.getElementById("resultadoPrecios").innerHTML=
    `
    <div class="alert alert-info">
        <h4>${producto}</h4>

        Incremento: ${incremento.toFixed(2)} Bs<br>

        Aumento:
        ${porcentaje.toFixed(2)} %<br>

        Gasto anterior:
        ${gastoAntes.toFixed(2)} Bs<br>

        Gasto actual:
        ${gastoAhora.toFixed(2)} Bs<br>

        Diferencia:
        ${diferencia.toFixed(2)} Bs
    </div>
    `;
}

function calcularCompra(){

    let presupuesto =
    parseFloat(document.getElementById("presupuesto").value);

    let total =
    parseFloat(document.getElementById("parroz").value) *
    parseFloat(document.getElementById("carroz").value)

    +

    parseFloat(document.getElementById("pazucar").value) *
    parseFloat(document.getElementById("cazucar").value)

    +

    parseFloat(document.getElementById("paceite").value) *
    parseFloat(document.getElementById("caceite").value)

    +

    parseFloat(document.getElementById("ppapa").value) *
    parseFloat(document.getElementById("cpapa").value);

    let saldo =
    presupuesto-total;

    let mensaje;

    if(saldo>=0){
        mensaje =
        "El presupuesto alcanza";
    }
    else{
        mensaje =
        "El presupuesto NO alcanza";
    }

    document.getElementById("resultadoCompra").innerHTML=
    `
    <div class="alert ${saldo>=0 ? 'alert-success' : 'alert-danger'}">

        Total Compra:
        ${total.toFixed(2)} Bs<br>

        Saldo:
        ${saldo.toFixed(2)} Bs<br>

        <strong>${mensaje}</strong>

    </div>
    `;
}

function limpiarPrecios(){

    document.getElementById("producto").value="";
    document.getElementById("precioAnterior").value="";
    document.getElementById("precioActual").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("semanas").value="";
    document.getElementById("resultadoPrecios").innerHTML="";
}

function limpiarCompra(){

    document.getElementById("presupuesto").value="";
    document.getElementById("parroz").value="";
    document.getElementById("carroz").value="";
    document.getElementById("pazucar").value="";
    document.getElementById("cazucar").value="";
    document.getElementById("paceite").value="";
    document.getElementById("caceite").value="";
    document.getElementById("ppapa").value="";
    document.getElementById("cpapa").value="";
    document.getElementById("resultadoCompra").innerHTML="";
}