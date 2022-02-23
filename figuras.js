// Codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
//     );
    
const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(altura, base) {
    return (altura * base) / 2;
} 
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Circulo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("El pi del circulo es: " + PI);

// Circunferencia
function perimetroCiculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
} 
// console.log("El perimetro del circulo es: " + perimetroCiculo + "cm");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
} 
// console.log("El área del circulo es: " + areaCirculo + "cm");
console.groupEnd();

// aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}