Solucion a actividad 1 Unidad 2 : Calculadora de estaciones.
-------------------------------------------------------------

Primero que nada hay que estudiar cada uno de los enunciados que nos pide realizar.
para iniciar nos pide que declaremos una variable esto con el fin de que quede guardado los valores que le pediremos al usuario que ingrese.
en este caso la variable que use fue la variable: **const Numero_de_mes.**
(Yo utilice **const** para declararla porque los numeros del mes no cambian)
 
La manera de obtener estos valores que vamos a guardar es mediante el uso de una herramienta de javascript llamada **prompt()**
la cual genera un cuadro donde podemos pedirle al usuario que ingrese algun valor y este se quedara guardado en nuesta variable ya declarada,
para que el usuario sepa que dato es el que nosotros necesitamos dentro de los parentesis agregamos comillas con el mensaje de texto del valor que requerimos
para que asi aparezca nuestra peticion escrita en la parte superios del cuadro de texto seria **prompt(¨ingrese numero de un mes¨)**

Ahora mos pide que delimitemos el numero de valores que debe ingresar, sabiendo que los numeros del mes van del 1 al 12 debemos asegurarnos
que solamente se ingresen numeros dentro de este rango para eso podemos hacer lo siguiente:
*colocar una condicional llamada **IF** y seguido de nuestra variable mas la limitante dentro de parentesis es decir IF(Numero_de_mes >= 1 && Numero_de_mes <= 12)
 (esto aun no queda delimitado al 100% pero veremos el porque en el ultimo paso escrito en este resumen)

*Ahora nos pide que si el valor esta dentro del margen debemos regresarle al usuario un mensaje que diga la estacion del año dependiendo el numero del mes que escribio.

*Entonces escribiremos **{}** y dentro de estos le daremos la instruccion de la accion a realizar al cumplirse esta condicion.
Ya que en el propio enunciado los meses se encuentran agrupados para cada estacion del año lo que tenemos que hacer es reflejarlo dentro de nuestro codigo
esto mediante condicionales que nos diran si la estacion del año pertenecen a un grupo de meses o a otro por ejemplo:
if(Numero_de_mes == 12 || Numero_de_mes == 1 || Numero_de_mes == 2) 

*Ahora la manera en la que regresamos la estacion en la que se encuentran estos 3 meses es mediante una **alert** la cual contendra el mensaje *Invierno*
ya que esta es la estacion del año a la que pertenecen los 3 meses antes mecionados.

*Ahora repetiremos los pasos con los otros grupos de meses y sus respectivas estaciones del año.

*Ya terminado esto lo que haremos sera agregar otra condiciona llamada **ELSE** que nos perimitira darle instrucciones de lo que debe realizar el codigo si no se cumple 
con nuestra primera condicional que dice que todos los numeros escritos sean unicamente entre 1 y 12 
ya que al no cumplirse no procedera a continuar con el programa y le pediremos que al suceder esto se genere el mensaje que diga **valor invalido** mediante una alert
quedaria de la siguiente manera
else{ alert("Valor invalido");}

Con esto tendriamos realizada la activida.







