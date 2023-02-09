const Numero_de_mes = prompt("ingrese numero de un mes");

   if (Numero_de_mes >= 1 && Numero_de_mes <= 12) {
    
   if (Numero_de_mes == 12 || Numero_de_mes == 1 || Numero_de_mes == 2) {
       alert("invierno");
    }

    if (Numero_de_mes == 3 || Numero_de_mes == 4 || Numero_de_mes == 5) {
        alert("primavera");
    }

    if (Numero_de_mes == 6 || Numero_de_mes == 7 || Numero_de_mes == 8) {
        alert("verano");
    }

       if (Numero_de_mes == 9 || Numero_de_mes == 10 || Numero_de_mes == 11) { alert("otoño"); }
}
   else { alert("valor invalido"); }

let Nombre = "Erick Fernando Ortiz Pérez";
let Numero_de_carnet = 23003920;
alert(Nombre + " " + Numero_de_carnet);

