// Codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
    );
    
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("El pi del circulo es: " + PI);

// Circunferencia
const perimetroCiculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCiculo + "cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + "cm");
console.groupEnd();
