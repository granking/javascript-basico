const lista1 = [1, 2, 2, 3, 3, 3, 5, 5, 5, 8, 8, 8, 7, 7, 7, 4, 4, 4, 4, 1, 1, 9, 9, 9];

const lista1Count = {};

lista1.map(function (elemento) {
    if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
    }else{
        lista1Count[elemento] = 1;
    }
});

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];