// Operaciones con Variables
// const numero1 = 10;
// const numero2 = 30;
// const resultado = numero1 + numero2;
// // la variable resultado tenga el valor de 40
// console.log(resultado);
// const resultadoMultiplicacion = numero1 * numero2;
// //la variable resultadoMultiplicacion tenga el valor de 300
// console.log(resultadoMultiplicacion);
// const resultadoDivision = numero2 / numero1;
// // la variable resultadoDivision tenga el valor de 3
// console.log(resultadoDivision);
// const resultadoResta = numero2 - numero1;
// // la variable tenga el valor de 20
// console.log(resultadoResta);
// const nombre = prompt("Ingrese su nombre");
// console.log(nombre);

// const num1 = parseInt(prompt("Ingrese numero 10"));
// const num2 = parseInt(prompt("Ingrese numero 20"));
// const num3 = parseInt(prompt("Ingrese numero 30"));
// console.log(num1);
// console.log(num2);
// console.log(num3);
// const res1 = num1 + num2 + num3;
// console.log(res1);
// const promedio = res1 / 4;
// console.log(promedio);
// const precio1 = parseFloat(prompt("Ingrese precio Yerba"));
// const precio2 = parseFloat(prompt("Ingrese precio Aceite"));
// const sumapr = precio1 + precio2;
// console.log(sumapr);


// const nomb = prompt("Ingrese un nombre");
// const salut = prompt("Ingrese un Saludo");
// const saludoCompleto = salut + " " + nomb;
// console.log(saludoCompleto);

// AREA DE UN TRIANGULO
let baseTriangulo = parseFloat(prompt("Ingrese en centimetros la base del triangulo"));
let alturaTriangulo = parseFloat(prompt("Ingrese en centimetros la altura del triangulo"));
areaTriangulo = (baseTriangulo / 2) * alturaTriangulo;
console.log(areaTriangulo);

// PERIMETRO DE UN CUADRADO
let ladoCuadrado = parseFloat(prompt("Ingrese en centimetros el lado del cuadrado"));
perimetroCuadrado = ladoCuadrado * 4;
console.log(perimetroCuadrado);

// CONVERSION GRADOS CELCIOS A GRADOS FARENHEIT
let gradosCelcius = parseFloat(prompt("Ingrese la temperatura en grados Celcius"));
celciusEnFarenheith = (gradosCelcius * 1.8) + 32;
console.log(celciusEnFarenheith);

// BIENVENIDA CON NOMBRE Y APELLIDO

let name = prompt("Ingrese su nombre")
let surname = prompt("Ingrese su apellido")
const calidaBienvenida = "Sea usted muy bienvenido/a señor/a" + " " + name + " " + surname;
console.log(calidaBienvenida);

// SUMA DE TRS NUMEROS Y PROMEDIO

let n1 = parseInt(prompt("Ingrese un numero entero"));
let n2 = parseInt(prompt("Ingrese un numero entero"));
let n3 = parseInt(prompt("Ingrese un numero entero"));
const suma = n1 + n2 + n3;
const promedio3 = suma / 3;
console.log(promedio3);

// CONVERSION A DIVISAS EXTRANJERAS

let pesos = parseFloat(prompt("Ingrese el monto en pesos"));
const dolar = 1230;
const pesosDolar = pesos / dolar;
console.log(pesosDolar);
const euro = 1066.29
const pesosEuro = pesos / euro;
console.log(pesosEuro);
const libra = 1278.27;
const pesosLibra = pesos / libra;
console.log(pesosLibra);



