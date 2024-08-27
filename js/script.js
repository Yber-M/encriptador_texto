let msjEntrada;
let textIncriptado;
let textDesencriptado;
let textCopy;

function encriptarTexto() {
    document.getElementById('mensajeAccion').innerHTML = "Texto Encriptado";
    msjEntrada = document.getElementById('cajaInput').value;
    const infoSpan = document.querySelector('.encriptador__input__info span');

    if (!validarTexto(msjEntrada)) {
        infoSpan.classList.add('error');
        setTimeout(() => {
            infoSpan.classList.remove('error');
        }, 3000);

        return;

    } else {
        textIncriptado = msjEntrada
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById('cajaOutput').value = textIncriptado;
        mostrarResultados();
    }
}

function desencriptarTexto() {
    document.getElementById('mensajeAccion').innerHTML = 'Texto Desencriptado'
    msjEntrada = document.getElementById('cajaInput').value;
    const infoSpan = document.querySelector('.encriptador__input__info span');

    if (!validarTexto(msjEntrada)) {
        infoSpan.classList.add('error');
        setTimeout(() => {
            infoSpan.classList.remove('error');
        }, 3000);

        return;

    } else {
        textDesencriptado = msjEntrada
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById('cajaOutput').value = textDesencriptado;
        mostrarResultados();
    }
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function mostrarResultados() {
    document.querySelector('.encriptador__output__hidden').style.display = 'none';
    document.querySelector('.encriptador__output__caja').style.display = 'block';
}

function copiarText() {
    const textCopy = document.getElementById('cajaOutput').value;
    navigator.clipboard.writeText(textCopy).then(() => {
        const mensaje = document.querySelector('.encriptador__output__copy');
        mensaje.classList.add('show');

        // Ocultar el mensaje después de 2 segundos
        setTimeout(() => {
            mensaje.classList.remove('show');
        }, 2000);
        estrcturaInicial();
    }).catch(error => {
        console.log('Error al copiar texto', error);
    });
}


function estrcturaInicial() {
    document.querySelector('.encriptador__output__hidden').style.display = 'block';
    document.querySelector('.encriptador__output__caja').style.display = 'none';
    document.getElementById('cajaInput').value = '';
}