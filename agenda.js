document.addEventListener('DOMContentLoaded', function() {
    const dias = [];
    for (let i = 1; i <= 42; i++) {
        const diaElement = document.getElementById(`dia${i}`);
        if (diaElement) {
            dias.push(diaElement);
        }
    }

    console.log("Elementos dias encontrados:", dias.length);

    const mestexto = document.getElementById('mestexto');
    const setamenos = document.getElementById('seta-');
    const setamais = document.getElementById('seta+');

    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let mesatual = new Date().getMonth() + 1;

    function atualizarCalendario() {
        for (let i = 0; i < dias.length; i++) {
            dias[i].textContent = "";
            dias[i].style.color = "#008BEF";
            dias[i].style.opacity = "1";
        }
        
        let anoatual = new Date().getFullYear();
        
        let primeirodia = new Date(anoatual, mesatual - 1, 1);
        let primeirodias = primeirodia.getDay();
        
        let ultimodia = new Date(anoatual, mesatual, 0).getDate();
        
        let ultimodiaanterior = new Date(anoatual, mesatual - 1, 0).getDate();
        
        const cor_fundo = "#A6CEEB"
        console.log("Mês atual:", mesatual);
        console.log("Primeiro dia da semana:", primeirodias);
        console.log("Último dia anterior:", ultimodiaanterior);
        console.log("Último dia atual:", ultimodia);
        
        for (let i = 0; i < primeirodias; i++) {
            let diaNumero = ultimodiaanterior - primeirodias + i + 1;
            dias[i].textContent = diaNumero;
            dias[i].style.color = cor_fundo;
            console.log(`Dia ${i}: ${diaNumero} (mês anterior)`);
        }
        
        let diaAtual = 1;
        for (let i = primeirodias; i < primeirodias + ultimodia; i++) {
            if (i < dias.length) {
                dias[i].textContent = diaAtual;
                dias[i].style.color = "#008BEF";
                console.log(`Dia ${i}: ${diaAtual} (mês atual)`);
                diaAtual++;
            }
        }
        
        let diaProximoMes = 1;
        for (let i = primeirodias + ultimodia; i < dias.length; i++) {
            dias[i].textContent = diaProximoMes;
            dias[i].style.color = cor_fundo;
            console.log(`Dia ${i}: ${diaProximoMes} (próximo mês)`);
            diaProximoMes++;
        }
        
        if (mestexto) {
            mestexto.textContent = meses[mesatual - 1];
        }
    }

    if (setamais) {
        setamais.addEventListener('click', () => {
            if (mesatual < 12) {
                mesatual++;
            } else {
                mesatual = 1;
            }
            atualizarCalendario();
        });
    }

    if (setamenos) {
        setamenos.addEventListener('click', () => {
            if (mesatual > 1) {
                mesatual--;
            } else {
                mesatual = 12;
            }
            atualizarCalendario();
        });
    }

    // Inicializar calendário
    atualizarCalendario();
});
