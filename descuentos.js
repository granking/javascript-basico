function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDescuento = (100 - descuento) / 100;
    return ( precio * porcentajeDescuento);
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount');
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById('ResultP');
    resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
}