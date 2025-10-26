const dias = [];
for (let i = 1; i <= 42; i++) {
    const diaElement = document.getElementById(`dia${i}`);
    if (diaElement) {
        dias.push(diaElement);
    }
}

const mestexto = document.getElementById('mestexto');
const setamenos = document.getElementById('seta-');
const setamais = document.getElementById('seta+');

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesatual = new Date().getMonth() + 1;

function atualizarCalendario() {
    const anoatual = new Date().getFullYear();
    const primeirodia = new Date(anoatual, mesatual - 1, 1);
    const primeirodias = primeirodia.getDay();
    const ultimodia = new Date(anoatual, mesatual, 0).getDate();
    const ultimodiaanterior = new Date(anoatual, mesatual - 1, 0).getDate();
    const diaNumeros = [];

    dias.forEach(dia => {
        const tarefaElement = dia.querySelector('.tarefa');
        dia.textContent = "";
        if (tarefaElement) dia.appendChild(tarefaElement);
        dia.style.color = "var(--primary-blue)";
    });

    for (let i = 0; i < primeirodias; i++) {
        const diaNumero = ultimodiaanterior - primeirodias + i + 1;
        dias[i].textContent = diaNumero;
        dias[i].style.color = "var(--faded-blue)";
        diaNumeros.push(diaNumero);
    }

    for (let i = 0; i < ultimodia; i++) {
        const diaIndex = primeirodias + i;
        if (diaIndex < dias.length) {
            dias[diaIndex].textContent = i + 1;
            dias[diaIndex].style.color = "var(--primary-blue)";
        }
    }

    for (let i = primeirodias + ultimodia; i < dias.length; i++) {
        dias[i].textContent = i - primeirodias - ultimodia + 1;
        dias[i].style.color = "var(--faded-blue)";
    }

    if (mestexto) mestexto.textContent = meses[mesatual - 1];
    carregarTarefas(anoatual, diaNumeros.length);
}

async function carregarTarefas(anoatual, diasAnteriores) {
    try {
        const response = await fetch('https://backend-info1.vercel.app/v2/tarefas');
        const tarefas = await response.json();
        
        document.querySelectorAll('.tarefa').forEach(tarefa => tarefa.remove());
        
        tarefas
            .filter(tarefa => {
                const [, mes, ano] = tarefa.data.split('/');
                return parseInt(mes) === mesatual && parseInt(ano) === anoatual;
            })
            .forEach(tarefa => {
                const [dia] = tarefa.data.split('/');
                const diaElement = document.getElementById(`dia${parseInt(dia) + diasAnteriores}`);
                
                if (diaElement && !diaElement.querySelector('.tarefa')) {
                    const circulo = document.createElement('div');
                    circulo.classList.add('tarefa');
                    diaElement.appendChild(circulo);
                    
                    let tooltipTimeout;
                    
                    circulo.addEventListener('mouseenter', () => {
                        tooltipTimeout = setTimeout(() => {
                            const tooltip = document.createElement('div');
                            tooltip.classList.add('tarefadiv');
                            tooltip.innerHTML = `
                                <h3 class="nomeatividadediv">${tarefa.nome}</h3>
                                <div class="divisaodiv"></div>
                                <h3 class="dataatividadediv">${tarefa.data}</h3>
                                <div class="divisaodiv"></div>
                                <h3 class="horaatividadedix">${tarefa.horario}</h3>
                            `;
                            circulo.parentElement.appendChild(tooltip);
                        }, 300);
                    });
                    
                    circulo.addEventListener('mouseleave', () => {
                        clearTimeout(tooltipTimeout);
                        const tooltip = circulo.parentElement.querySelector('.tarefadiv');
                        if (tooltip) tooltip.remove();
                    });
                }
            });
    } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
    }
}

if (setamais) {
    setamais.addEventListener('click', () => {
        mesatual = mesatual < 12 ? mesatual + 1 : 1;
        atualizarCalendario();
    });
}

if (setamenos) {
    setamenos.addEventListener('click', () => {
        mesatual = mesatual > 1 ? mesatual - 1 : 12;
        atualizarCalendario();
    });
}

atualizarCalendario();
