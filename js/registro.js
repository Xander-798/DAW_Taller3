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

            //deterina la selección de rol
            //selvalue = document.frmRegistro.seldegree.options[frmRegistro.seldegree.selectedIndex].value;

            //Objeto a registrar
            nuevoUsuario = new Usuario(document.frmRegistro.nombre.value, document.frmRegistro.apellidos.value, 
                document.frmRegistro.dui.value, document.frmRegistro.nit.value, document.frmRegistro.fecha.value, document.frmRegistro.placa.value,seleccion ,document.frmRegistro.selfab.value,
                document.frmRegistro.selmod.value, document.frmRegistro.txtanio.value, document.frmRegistro.fallas.value);

                nuevoUsuario.registrar();
                nuevoUsuario.mostrar();

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

            //Objeto a registrar
            nuevoUsuario = new Usuario(document.frmRegistro.nombre.value, document.frmRegistro.apellidos.value, 
                document.frmRegistro.dui.value, document.frmRegistro.nit.value, document.frmRegistro.fecha.value, document.frmRegistro.placa.value, seleccion ,document.frmRegistro.selfab.value,
                document.frmRegistro.selmod.value, document.frmRegistro.txtanio.value, document.frmRegistro.fallas.value);

                nuevoUsuario.registrar();
                nuevoUsuario.mostrar();
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
        var nombre = [];
        var dui = [];
        var apellidos = [];
        var fabrica = [];
        var nit = [];
        var modelo = [];
        var color = [];
        var año = [];
        var placa = [];
        var fecha = [];
        var fallas = [];

        nombre.push(this.nombre);
        apellidos.push(this.apellidos);
        dui.push(this.dui);
        nit.push(this.nit);
        placa.push(this.placa);
        fallas.push(this.fallas);
        fecha.push(this.fecha);
        año.push(this.año);
        color.push(this.color);
        modelo.push(this.modelo);
        fabrica.push(this.fabrica);

        localStorage.setItem("nombre",JSON.stringify(nombre));
        localStorage.setItem("apellido",JSON.stringify(apellidos));
        localStorage.setItem("dui",JSON.stringify(dui));
        localStorage.setItem("nit",JSON.stringify(nit));
        localStorage.setItem("placa",JSON.stringify(placa));
        localStorage.setItem("color",JSON.stringify(color));
        localStorage.setItem("modelo",JSON.stringify(modelo));
        localStorage.setItem("fabrica",JSON.stringify(fabrica));
        localStorage.setItem("año",JSON.stringify(año));
        localStorage.setItem("fecha",JSON.stringify(fecha));
        localStorage.setItem("fallas",JSON.stringify(fallas));
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

    this.mostrar = function(){
        var tbody = document.getElementById("tbody");

        tbody.innerHTML = '';

        var nombre;
        var duiN;
        var apellidos;
        var fabrica;
        var nit;
        var modelo;
        var color;
        var año;
        var placa;
        var fecha;
        var fallas;

        nombre = JSON.parse(localStorage.getItem("nombre"));
        apellidos = JSON.parse(localStorage.getItem("apellido"));
        duiN = JSON.parse(localStorage.getItem("dui"));
        modelo = JSON.parse(localStorage.getItem("modelo"));
        color = JSON.parse(localStorage.getItem("color"));
        año = JSON.parse(localStorage.getItem("año"));
        fecha = JSON.parse(localStorage.getItem("fecha"));
        fallas = JSON.parse(localStorage.getItem("fallas"));
        fabrica = JSON.parse(localStorage.getItem("fabrica"));
        nit = JSON.parse(localStorage.getItem("nit"));
        placa = JSON.parse(localStorage.getItem("placa"));

        var cant = placa.length;

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

        var txtNombre = document.createTextNode(nombre[i]),
        txtApe = document.createTextNode(apellidos[i]),
        txtPlaca = document.createTextNode(placa[i]),
        txtModelo = document.createTextNode(modelo[i]),
        txtDui = document.createTextNode(duiN[i]),
        txtNit = document.createTextNode(nit[i]),
        txtAño = document.createTextNode(año[i]),
        txtFecha = document.createTextNode(fecha[i]),
        txtFallas = document.createTextNode(fallas[i]),
        txtColor = document.createTextNode(color[i]),
        txtFabrica = document.createTextNode(fabrica[i]);
        
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
    };

}
