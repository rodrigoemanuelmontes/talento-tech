/* Ejercicios JavaScript Nivel 1
Ejercicio 1
Mostrar por consola, tu nombre, apellido, comisión y hobbies
Ejercicio 2
Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir
en la consola debes utilizar el método console.log().
Ejercicio 3
Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un
signo de exclamación.
Ejercicio 4
Escribe un programa que le pida al usuario su nombre y apellido y lo imprima por
consola 
Ejercicio 5
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
con la frase "Tienes X años".
Ejercicio 6
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu
BMI es X".
Ejercicio 7
Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en
tu casa. Mostrar el valor de la variable por la consola.
Ejercicio 8
Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de
la variable por la consola.
Ejercicio 9
Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste
usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola.
Ejercicio 10
Mostrar por la consola los siguientes valores false, 'Hola', 0 y 'Minions' usando la misma variable.
Ejercicios 11
Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.

jercicio 12
Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a
kilogramos
Ejercicio 13
Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre
en la consola.
Ejercicio 14
Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta
“aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario
Ejercicio 15
Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el
aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y
el nuevo sueldo
Ejercicio 16
Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la
matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y
la palabra “no aprobado” en caso contrario
Ejercicio 17
Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números
pueden ser iguales.*/


/*ejercicio1 */
console.log("Nombre y apellido: Rodrigo Montes " + " comisión: 24234" + " hobbies: Programar, ver serie/pelíclas, tocar la guitarra")


/*ejercicio 2*/
let frase;
frase = prompt("ingresa una frase")

console.log(frase)

/*ejercicio 3*/

let nombre;

nombre= prompt("ingresa tu nombre")

console.log("Hola " + nombre + "!")

/*ejercicio 4 */

let nombreyapellido;

nombreyapellido= prompt("ingresa tu nombre y apellido")

console.log(nombreyapellido)

/*ejercicio 5 */

let anioNacimiento;
let anioActual=2024;
let edad;

anioNacimiento = prompt("ingresa tu año de nacimiento")

edad=anioActual-anioNacimiento;

console.log("tu edad es de: " +edad+ " años" )


/*ejercicio 6 */

let altura;
let peso;
let bmi;

altura = prompt("Ingresa tu altura en metros (por ejemplo: 1.75):");
peso = prompt("Ingresa tu peso en kilogramos:");

altura = parseFloat(altura); 
peso = parseFloat(peso);     

bmi = peso / (altura ** 2); 

console.log("Tu BMI es: " + bmi);

/*Ejercicio 7 */

let cantidadDeVentanas= 5;

console.log(cantidadDeVentanas)

/*Ejercicio 8 */

let soyHumano=true;
console.log(soyHumano)

/*Ejercicio 9 */

let miGustoDePizza= "Pizza Napolitana con Jamón";
console.log(miGustoDePizza)

/*Ejercicio 10 */
let variable;


variable = false;
console.log(variable);


variable = 'Hola';
console.log(variable);


variable = 0;
console.log(variable);


variable = 'Minions';
console.log(variable);

/*Ejercicio 11 */
const baseTriangulo = parseFloat(prompt('ingrese la base del triangulo'));
const alturaTriangulo = parseFloat(prompt('ingrese la altura del triangulo'));

let superficieTriangulo = baseTriangulo * alturaTriangulo;

console.log(superficieTriangulo);

/*Ejercicio 12 */

let pesoLibras;
let pesoKilogramos;

pesoLibras = prompt("ingrese su peso en libras para realizar la conversión a kilogramos:")

pesoKilogramos= (pesoLibras*0.4536); 

console.log("Su peso en kilogramos es: " + pesoKilogramos)

/*Ejercicio 13*/

let sueldo;
let sueldoAumento;

sueldo=prompt("ingrese su sueldo")

sueldoAumento= (sueldo * 15 )/100;

console.log("su sueldo con un 15% de aumento es: " + sueldoAumento)

/*Ejercicio 14*/

let notaAlumno;
let aprobado;

notaAlumno = prompt("ingrese su nota, en caso de que apruebes se mostrara true, en caso de que tu nota sea menor a 7 se motrara false: ")

if (notaAlumno<7){
  alert(aprobado=false)   
}
else {
    alert(aprobado=true)
}



/*Ejercicio 15 */
let categoria = parseInt(prompt('Ingresa la categoria del trabajador (1,2,3 o 4):'));
let sueldotrabajor = parseInt(prompt('Ingrese el sueldo del trabajador:'));

let aumento = 0;

switch (categoria) {
    case 1:
        aumento = 0.15; 
        break;
    case 2:
        aumento = 0.10; 
        break;
    case 3:
        aumento = 0.8; 
        break;
    case 4:
        aumento = 0.5 
        break;
    default:
        aumento = null; 
}
if(aumento !== null) {
    let nuevoSueldo = sueldotrabajor + (sueldotrabajor * aumento);
    alert(`Categoria: ${categoria}\n Nuevo sueldo: $${nuevoSueldo.toFixed(2)}`);
}

/*Ejercicio 16 */

function resultadoAlumno() {
   
    let matricula = prompt("Ingresa la matrícula del alumno:");

  
    let suma = 0;
    let calificacion;


    for (let i = 0; i < 5; i++) {
        calificacion = parseFloat(prompt(`Ingresa la calificación ${i + 1}:`));
        suma += calificacion;
    }

    let promedio = suma / 5;

    
    console.log(`\nMatrícula: ${matricula}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);

    
    if (promedio >= 7) {
        console.log("Aprobado");
    } else {
        console.log("No aprobado");
    }
}

resultadoAlumno();

/*Ejercicio 17*/

function mayorDeTres() {
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let num3 = parseInt(prompt("Ingresa el tercer número:"));

 
    if (num1 >= num2 && num1 >= num3) {
        console.log("El mayor es: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("El mayor es: " + num2);
    } else if (num3 >= num1 && num3 >= num2) {
        console.log("El mayor es: " + num3);
    }
}

mayorDeTres();




