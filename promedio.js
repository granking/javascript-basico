
function calcularMediaArtmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (nuevoElemento, valorAcomulado = 0) {
            return valorAcomulado + nuevoElemento;
        }
    );

    return (sumaLista / lista.length);
}



console.log(calcularMediaArtmetica([1,5,9,5,8,78,55,44,55,88,66,11,22,33,44,55]));

