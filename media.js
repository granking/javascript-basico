function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (nuevoElemento, valorAcumulado = 0) {
        return valorAcumulado + nuevoElemento;
        }
    );
    return sumaLista / lista.length;
}

const lista1 = [
    100,
    200,
    500,
    600,
    400000000,
];

const listaOrdenada = lista1.sort(function (a, b){
    return a - b;
})

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return 1;
    }else {
        return 0;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista[mitadLista1 -1];
    const elemento2 = lista[mitadLista1];

    const promedioElemento1y2 = calcularMediaArtmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;

}else {
    mediana = lista1[mitadLista1];
}