const dias = [];
for (let i = 1; i <= 35; i++) {
    const diaElement = document.getElementById(`dia${i}`);
    dias.push(diaElement);
}

const mestexto = document.getElementById('mestexto');

const setamenos = document.getElementById('seta-');
const setamais = document.getElementById('seta+');

function atualizarCalendario() {
    for (let i = 0; i < dias.length; i++) {
        dias[i].textContent = " ";
    }
    
    let anoatual = new Date().getFullYear();
    let primeirodia = new Date(anoatual, mesatual - 1, 1);
    let primeirodias = primeirodia.getDay();
    
    let ultimodia = new Date(anoatual, mesatual, 0).getDate();
    
    let diaAtual = 1;
    for (let i = primeirodias; i < primeirodias + ultimodia; i++) {
        if (i < dias.length) {
            dias[i].textContent = diaAtual;
            diaAtual++;
        }
    }
    
    mestexto.textContent = meses[mesatual - 1];
}

setamais.addEventListener('click', () => {
    if (mesatual < 12) {
        mesatual++;
    } else {
        mesatual = 1;
    }
    atualizarCalendario();
});

setamenos.addEventListener('click', () => {
    if (mesatual > 1) {
        mesatual--;
    } else {
        mesatual = 12;
    }
    atualizarCalendario();
});

adicionar = 1;
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesatual = new Date().getMonth() + adicionar;

atualizarCalendario();