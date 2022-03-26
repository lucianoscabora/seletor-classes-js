function verde() {
    document.querySelector('#container').classList.add('verde');
    document.querySelector('#container').classList.remove('tirafundo');
}

function azul() {
    document.querySelector('#container').classList.add('azul');
    document.querySelector('#container').classList.remove('tirafundo');
}

function vermelho() {
    document.querySelector('#container').classList.add('vermelho');
    document.querySelector('#container').classList.remove('tirafundo');
}

function borda() {
    document.querySelector('#container').classList.add('borda');
}

function tirafundo() {
    document.querySelector('#container').classList.add('tirafundo');
    document.querySelector('#container').classList.remove('azul');
    document.querySelector('#container').classList.remove('verde');
    document.querySelector('#container').classList.remove('vermelho');
}

function tiraborda() {
    document.querySelector('#container').classList.remove('borda');
}
