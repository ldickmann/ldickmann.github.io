const titulo = document.querySelector('h6');
const textos = [
    "Developer",
    "Web Developer",
    "Programmer"
];

let textoIndex = 0;

function typeWriter(elemento, texto) {
    const textoArray = texto.split('');
    let i = 0;

    let escrever = setInterval(() => {
        if (i < textoArray.length) {
            elemento.innerHTML += textoArray[i];
            i++;
        } else {
            clearInterval(escrever);
            setTimeout(() => { apagarTexto(elemento); }, 2000);
        }

    }, 100)
}

function apagarTexto(elemento) {
    let textoAtual = elemento.innerHTML;
    let i = textoAtual.length;

    let apagar = setInterval(() => {
        if (i > 0) {
            elemento.innerHTML = textoAtual.substring(0, i - 1);
            i--;
        } else {
            clearInterval(apagar);
            proximoTexto(); 
        }
    }, 50);
}

function proximoTexto() {
    textoIndex = (textoIndex + 1) % textos.length;
    typeWriter(titulo, textos[textoIndex]);
}

proximoTexto();