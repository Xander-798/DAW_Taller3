var bandera = false;
var valoresAceptados = /^\d*$/;
var valoresAceptados2 = /^[a-zA-Z]+$/g;
var valoresAceptados3 = /[0-9]+/g;

var nombreLocal = [];
var duiLocal = [];
var apellidosLocal = [];
var fabricaLocal = [];
var nitLocal = [];
var modeloLocal = [];
var colorLocal = [];
var añoLocal= [];
var placaLocal = [];
var fechaLocal = [];
var fallasLocal = [];

if(localStorage.getItem("fabrica")){
    nombreLocal = JSON.parse(localStorage.getItem("nombre"));
    apellidosLocal = JSON.parse(localStorage.getItem("apellido"));
    duiLocal = JSON.parse(localStorage.getItem("dui"));
    modeloLocal = JSON.parse(localStorage.getItem("modelo"));
    colorLocal = JSON.parse(localStorage.getItem("color"));
    añoLocal = JSON.parse(localStorage.getItem("año"));
    fechaLocal = JSON.parse(localStorage.getItem("fecha"));
    fallasLocal = JSON.parse(localStorage.getItem("fallas"));
    fabricaLocal = JSON.parse(localStorage.getItem("fabrica"));
    nitLocal = JSON.parse(localStorage.getItem("nit"));
    placaLocal = JSON.parse(localStorage.getItem("placa"));
}

//Registrar el evento click al presionar el boton de Registro
function iniciar(){
    var btnenviar = document.getElementById("btnReg");
    var select = document.getElementById("selfab");

    //Al producirse en evento change en el elemento select
    //invocar a la función addOptions para volver a llenar
    //el select dependiente con los datos adecuados                
    if(select.addEventListener){
        select.addEventListener("change", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
            document.frmRegistro.selmod);
        }, false);
    }
    else{
        select.attachEvent("onchange", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
            document.frmRegistro.selmod);
        });
    }

    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
    if(btnenviar.addEventListener){
        btnenviar.addEventListener("click", function(){

            var chkvalue, selvalue, nuevoUsuario;

            var radios = document.getElementsByName('gender');

            //determinar cual input radio está seleccionado (Sexo/Género)
            /*for (var i = 0; i <  radios.length; i++) {
                if (radios[i].checked) {
                   chkvalue = radios[i].value;
                  break;
                }
            }*/

            var seleccion = showRadioSelected(document.frmRegistro.radcolor);

            //Al producirse en evento change en el elemento select
            //invocar a la función addOptions para volver a llenar
            //el select dependiente con los datos adecuados
            var select = document.getElementById("selfab");
            if(select.addEventListener){
                select.addEventListener("change", function(){
                addOptions(marcas[this.options[this.selectedIndex].text],
                document.frmRegistro.selmod);
                }, false);
                }
                else{
                select.attachEvent("onchange", function(){
                addOptions(marcas[this.options[this.selectedIndex].text],
                document.frmRegistro.selmod);
                });
                }

            //Validaciones
            if (valoresAceptados.test(document.frmRegistro.dui.value)){
                bandera = false;
              } else {
                bandera = true;
                alert("El DUI sólo puede formarse por números", "Error");
            }
            console.log(valoresAceptados);
            if (document.frmRegistro.dui.value.length == 8) {
            bandera =false;
            }else{
            bandera = true;
            alert("El DUI debe contener sólo 8 dígitos", "Error");
            }
      
            //validación NIT
            if (valoresAceptados.test(document.frmRegistro.nit.value)){
                bandera = false;
              } else {
                bandera = true;
                alert("El NIT sólo puede formarse por números", "Error");
            }
      
            if (document.frmRegistro.nit.value.length == 14) {
            bandera =false;
            }else{
            bandera = true;
            alert("El NIT debe contener sólo 14 dígitos", "Error");
            }
            //Validación placa
            if (valoresAceptados2.test(document.frmRegistro.placa.value) || valoresAceptados3.test(document.frmRegistro.placa.value) && document.frmRegistro.placa.value.length == 6){
                bandera = false;
              } else {
                bandera = true;
                alert("La Placa se puede ingresar con números y letras, con 6 carácteres.", "Error");
            }
      
            var campos = document.getElementsByTagName('input');
            for (var i = 0, len =  campos.length-1; i < len; i++) {
                if (campos[i].value == "" || campos[i].value == " ") {
                    bandera = true;
            }
            }
                //Objeto a registrar
      
                 
                  nuevoUsuario = new Usuario(document.frmRegistro.nombre.value, document.frmRegistro.apellidos.value,
                      document.frmRegistro.dui.value, document.frmRegistro.nit.value, document.frmRegistro.fecha.value, document.frmRegistro.placa.value,seleccion ,document.frmRegistro.selfab.value,
                      document.frmRegistro.selmod.value, document.frmRegistro.txtanio.value, document.frmRegistro.fallas.value);
                 
                  if (bandera == false) {
                      nuevoUsuario.registrar();
                      }else{
                        alert("Revise los formatos de los valores ingresados", "Error");            
                  }
                      mostrar();
                
           

        }, false);
    }
    else if(btnenviar.attachEvent){
        btnenviar.attachEvent("onclick", function(){
            var chkvalue, selvalue, nuevoUsuario;
            var radiofield = document.frmRegistro.elements["chkgender"];

            var seleccion = showRadioSelected(document.frmRegistro.radcolor);

            //Al producirse en evento change en el elemento select
            //invocar a la función addOptions para volver a llenar
            //el select dependiente con los datos adecuados
            var select = document.getElementById("selfab");
            if(select.addEventListener){
                select.addEventListener("change", function(){
                    addOptions(marcas[this.options[this.selectedIndex].text],
                    document.frmRegistro.selmod);
                }, false);
            }
            else{
                select.attachEvent("onchange", function(){
                    addOptions(marcas[this.options[this.selectedIndex].text],
                    document.frmRegistro.selmod);
                });
            }            

            //deterina la selección de rol
            //selvalue = document.frmRegistro.seldegree.options[frmRegistro.seldegree.selectedIndex].value;

            //Validaciones
            if (valoresAceptados.test(document.frmRegistro.dui.value)){
                bandera = false;
              } else {
                bandera = true;
                alert("El DUI sólo puede formarse por números", "Error");
            }
            console.log(valoresAceptados);
            if (document.frmRegistro.dui.value.length == 8) {
            bandera =false;
            }else{
            bandera = true;
            alert("El DUI debe contener sólo 8 dígitos", "Error");
            }
      
            //validación NIT
            if (valoresAceptados.test(document.frmRegistro.nit.value)){
                bandera = false;
              } else {
                bandera = true;
                alert("El NIT sólo puede formarse por números", "Error");
            }
      
            if (document.frmRegistro.nit.value.length == 14) {
            bandera =false;
            }else{
            bandera = true;
            alert("El NIT debe contener sólo 14 dígitos", "Error");
            }
            //Validación placa
            if (valoresAceptados2.test(document.frmRegistro.placa.value) || valoresAceptados3.test(document.frmRegistro.placa.value) && document.frmRegistro.placa.value.length == 6){
                bandera = false;
              } else {
                bandera = true;
                alert("La Placa se puede ingresar con números y letras, con 6 carácteres.", "Error");
            }
      
            var campos = document.getElementsByTagName('input');
            for (var i = 0, len =  campos.length-1; i < len; i++) {
                if (campos[i].value == "" || campos[i].value == " ") {
                    bandera = true;
            }
            }
                //Objeto a registrar
      
                 
                  nuevoUsuario = new Usuario(document.frmRegistro.nombre.value, document.frmRegistro.apellidos.value,
                      document.frmRegistro.dui.value, document.frmRegistro.nit.value, document.frmRegistro.fecha.value, document.frmRegistro.placa.value,seleccion ,document.frmRegistro.selfab.value,
                      document.frmRegistro.selmod.value, document.frmRegistro.txtanio.value, document.frmRegistro.fallas.value);
                 
                  if (bandera == false) {
                      nuevoUsuario.registrar();
                      }else{
                        alert("Revise los formatos de los valores ingresados", "Error");            
                  }
                      mostrar();
        });
    }
}

function showRadioSelected(radiogroup){
    var seleccionado;
    var numradios = radiogroup.length;
    for(var i=0; i<numradios; i++){
        if(radiogroup[i].checked){
            seleccionado = radiogroup[i].value;
        }
    }
    return seleccionado;
}

//Inicializando matriz para manejar las marcas y sus respectivos modelos
var marcas = new Array(7);
marcas["Toyota"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4 Runner", "Hilux"];
marcas["Nissan"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder", "Patrol", "X-Trail", "Frontier"];
marcas["Hyundai"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "i30"];
marcas["Volkswagen"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg", "Saveiro"];
marcas["Chevrolet"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy", "Avalanche", "Trailblazer"];
marcas["Honda"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot", "RidgeLine"];
marcas["Mitsubishi"] = ["Lancer", "Galant", "Eclipse", "Montero", "Nativa", "Outlander", "L200"];

//funciones usadas para establecer los valores del objeto
function addOptions(optionList, optionMenu){
    var i=0;
    removeOptions(optionMenu); //Limpia las opciones
    for(i=0; i<optionList.length; i++){
        optionMenu[i] = new Option(optionList[i], optionList[i]);
    }
}

function removeOptions(optionMenu){
    for(i=0; i<optionMenu.options.length; i++){
        optionMenu.options[i] = null;
    }

}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}

//Definiendo la clase Usuario a través del uso de sintexis de función

function Usuario(nombre, apellido, dui, nit, fecha, placa, color, fabrica, modelo, año ,fallas){

    //Propiedades de la clase
    this.nombre = nombre;
    this.apellidos = apellido;
    this.dui = dui;
    this.nit = nit;
    this.fabrica = fabrica;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
    this.placa = placa;
    this.fecha = fecha;
    this.fallas = fallas;

    //Métodos de la clase
    this.registrar = function(){

        nombreLocal.push(this.nombre);
        apellidosLocal.push(this.apellidos);
        duiLocal.push(this.dui);
        nitLocal.push(this.nit);
        placaLocal.push(this.placa);
        fallasLocal.push(this.fallas);
        fechaLocal.push(this.fecha);
        añoLocal.push(this.año);
        colorLocal.push(this.color);
        modeloLocal.push(this.modelo);
        fabricaLocal.push(this.fabrica);

        localStorage.setItem("nombre",JSON.stringify(nombreLocal));
        localStorage.setItem("apellido",JSON.stringify(apellidosLocal));
        localStorage.setItem("dui",JSON.stringify(duiLocal));
        localStorage.setItem("nit",JSON.stringify(nitLocal));
        localStorage.setItem("placa",JSON.stringify(placaLocal));
        localStorage.setItem("color",JSON.stringify(colorLocal));
        localStorage.setItem("modelo",JSON.stringify(modeloLocal));
        localStorage.setItem("fabrica",JSON.stringify(fabricaLocal));
        localStorage.setItem("año",JSON.stringify(añoLocal));
        localStorage.setItem("fecha",JSON.stringify(fechaLocal));
        localStorage.setItem("fallas",JSON.stringify(fallasLocal));
    };

    /*this.setcod = function(){
        var fecha = new Date();
        var year = fecha.getFullYear();
        var letras = this.letras();
        //var alet = this.rand();

        //contruir ID
        //this.id = letras + year + alet;
    }*/

    this.letras = function(){
        var arre = this.apellidos + '';
        var a, b, fin;
        var letr = arre.split(' ');

        if(letr[1] == null){
            a = letr[0];
            b = letr[0];
            fin = a.charAt(0) + b.charAt(0);
        }else{
            a = letr[0];
            b = letr[1];
            fin = a.charAt(0) + b.charAt(0);
        }
        fin = fin.toUpperCase();
        return fin;
    };
    
    /*this.rand = function(){
        var lok;
        lok = Math.random() * (9999 - 1000) + 1000;
        lok = parseInt(lok);
        return lok;
    };*/

    /*this.mostrar = function(){
        var tbody = document.getElementById("tbody");
        var tbody = document.getElementById("tbody");

        tbody.innerHTML = '';
    
        nombreLocal = JSON.parse(localStorage.getItem("nombre"));
        apellidosLocal = JSON.parse(localStorage.getItem("apellido"));
        duiLocal = JSON.parse(localStorage.getItem("dui"));
        modeloLocal = JSON.parse(localStorage.getItem("modelo"));
        colorLocal = JSON.parse(localStorage.getItem("color"));
        añoLocal = JSON.parse(localStorage.getItem("año"));
        fechaLocal = JSON.parse(localStorage.getItem("fecha"));
        fallasLocal = JSON.parse(localStorage.getItem("fallas"));
        fabricaLocal = JSON.parse(localStorage.getItem("fabrica"));
        nitLocal = JSON.parse(localStorage.getItem("nit"));
        placaLocal = JSON.parse(localStorage.getItem("placa"));
    
        cant = placaLocal.length;
    for(var i = 0; i < cant ; i++){
        var fila = document.createElement("tr");
    
        var celdaNombre = document.createElement("td"),
        celdaApe = document.createElement("td"),
        celdaDui = document.createElement("td"),
        celdaAño = document.createElement("td"),
        celdaColor = document.createElement("td"),
        celdaModelo = document.createElement("td"),
        celdaFabrica = document.createElement("td"),
        celdaNit = document.createElement("td"),
        celdaPlaca = document.createElement("td"),
        celdaFalla = document.createElement("td"),
        celdaFecha = document.createElement("td");
    
        var txtNombre = document.createTextNode(nombreLocal[i]),
        txtApe = document.createTextNode(apellidosLocal[i]),
        txtPlaca = document.createTextNode(placaLocal[i]),
        txtModelo = document.createTextNode(modeloLocal[i]),
        txtDui = document.createTextNode(duiLocal[i]),
        txtNit = document.createTextNode(nitLocal[i]),
        txtAño = document.createTextNode(añoLocal[i]),
        txtFecha = document.createTextNode(fechaLocal[i]),
        txtFallas = document.createTextNode(fallasLocal[i]),
        txtColor = document.createTextNode(colorLocal[i]),
        txtFabrica = document.createTextNode(fabricaLocal[i]);
        
        celdaNombre.appendChild(txtNombre);
        celdaApe.appendChild(txtApe);
        celdaColor.appendChild(txtColor);
        celdaFalla.appendChild(txtFallas);
        celdaNit.appendChild(txtNit);
        celdaDui.appendChild(txtDui);
        celdaModelo.appendChild(txtModelo);
        celdaFabrica.appendChild(txtFabrica);
        celdaAño.appendChild(txtAño);
        celdaPlaca.appendChild(txtPlaca);
        celdaFecha.appendChild(txtFecha);
    
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApe);
        fila.appendChild(celdaColor);
        fila.appendChild(celdaModelo);
        fila.appendChild(celdaFabrica);
        fila.appendChild(celdaFalla);
        fila.appendChild(celdaPlaca);
        fila.appendChild(celdaAño);
        fila.appendChild(celdaFecha);
        fila.appendChild(celdaNit);
        fila.appendChild(celdaDui);
    
        tbody.appendChild(fila); 
    }
    };*/

}

function mostrar(){
    var tbody = document.getElementById("tbody");

    tbody.innerHTML = '';

    var nombreLocal;
    var apellidosLocal;;
    var duiLocal;
    var modeloLocal;
    var colorLocal;
    var añoLocal;
    var fechaLocal;
    var fallasLocal;
    var fabricaLocal;
    var nitLocal;
    var placaLocal;

    nombreLocal = JSON.parse(localStorage.getItem("nombre"));
    apellidosLocal = JSON.parse(localStorage.getItem("apellido"));
    duiLocal = JSON.parse(localStorage.getItem("dui"));
    modeloLocal = JSON.parse(localStorage.getItem("modelo"));
    colorLocal = JSON.parse(localStorage.getItem("color"));
    añoLocal = JSON.parse(localStorage.getItem("año"));
    fechaLocal = JSON.parse(localStorage.getItem("fecha"));
    fallasLocal = JSON.parse(localStorage.getItem("fallas"));
    fabricaLocal = JSON.parse(localStorage.getItem("fabrica"));
    nitLocal = JSON.parse(localStorage.getItem("nit"));
    placaLocal = JSON.parse(localStorage.getItem("placa"));

    cant = placaLocal.length;
for(var i = 0; i < cant ; i++){
    var fila = document.createElement("tr");

    var celdaNombre = document.createElement("td"),
    celdaApe = document.createElement("td"),
    celdaDui = document.createElement("td"),
    celdaAño = document.createElement("td"),
    celdaColor = document.createElement("td"),
    celdaModelo = document.createElement("td"),
    celdaFabrica = document.createElement("td"),
    celdaNit = document.createElement("td"),
    celdaPlaca = document.createElement("td"),
    celdaFalla = document.createElement("td"),
    celdaFecha = document.createElement("td");

    var txtNombre = document.createTextNode(nombreLocal[i]),
    txtApe = document.createTextNode(apellidosLocal[i]),
    txtPlaca = document.createTextNode(placaLocal[i]),
    txtModelo = document.createTextNode(modeloLocal[i]),
    txtDui = document.createTextNode(duiLocal[i]),
    txtNit = document.createTextNode(nitLocal[i]),
    txtAño = document.createTextNode(añoLocal[i]),
    txtFecha = document.createTextNode(fechaLocal[i]),
    txtFallas = document.createTextNode(fallasLocal[i]),
    txtColor = document.createTextNode(colorLocal[i]),
    txtFabrica = document.createTextNode(fabricaLocal[i]);
    
    celdaNombre.appendChild(txtNombre);
    celdaApe.appendChild(txtApe);
    celdaColor.appendChild(txtColor);
    celdaFalla.appendChild(txtFallas);
    celdaNit.appendChild(txtNit);
    celdaDui.appendChild(txtDui);
    celdaModelo.appendChild(txtModelo);
    celdaFabrica.appendChild(txtFabrica);
    celdaAño.appendChild(txtAño);
    celdaPlaca.appendChild(txtPlaca);
    celdaFecha.appendChild(txtFecha);

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApe);
    fila.appendChild(celdaColor);
    fila.appendChild(celdaModelo);
    fila.appendChild(celdaFabrica);
    fila.appendChild(celdaFalla);
    fila.appendChild(celdaPlaca);
    fila.appendChild(celdaAño);
    fila.appendChild(celdaFecha);
    fila.appendChild(celdaNit);
    fila.appendChild(celdaDui);

    tbody.appendChild(fila); 
}
}
