const optionsRenaming = {
    'contactForm' : {
        'Op1' : 'Correo electrónico',
        'Op2' : 'Celular',
    },
    'formOfPayment' : {
        'Op1' : 'Efectivo',
        'Op2' : 'Mercado Pago',
        'Op3' : 'Tarjeta de debito',
        'Op4' : 'Tarjeta de credito',
    },
    'shippingMethod' : {
        'Op1' : 'Correo Argentino',
        'Op2' : 'OCA',
        'Op3' : 'Andreani',
        'Op4' : 'Ocasa',
        'Op5' : 'Crucero Express',
        'Op6' : 'Otro',
    },
};

const optionSelect = (typeOfSelect , numOption) => {
    return (optionsRenaming[typeOfSelect][numOption]);
}


export default optionSelect