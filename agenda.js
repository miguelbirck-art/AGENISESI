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
    const primeirodia = new Date(anoatual, mesatual - 1, 1).getDay();
    const ultimodia = new Date(anoatual, mesatual, 0).getDate();
    const ultimodiaanterior = new Date(anoatual, mesatual - 1, 0).getDate();
    const diaNumeros = [];

    for (let i = 0; i < primeirodia; i++) {
        const diaNumero = ultimodiaanterior - primeirodia + i + 1;
        dias[i].textContent = diaNumero;
        dias[i].style.color = "var(--faded-blue)";
        diaNumeros.push(diaNumero);
    }

    for (let i = 0; i < ultimodia; i++) {
        const diaIndex = primeirodia + i;
        if (diaIndex < dias.length) {
            dias[diaIndex].textContent = i + 1;
            dias[diaIndex].style.color = "var(--primary-blue)";
        }
    }

    for (let i = primeirodia + ultimodia; i < dias.length; i++) {
        dias[i].textContent = i - primeirodia - ultimodia + 1;
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
        
        tarefas.filter(tarefa => {
                const [, mes, ano] = tarefa.data.split('/');
                return parseInt(mes) === mesatual && parseInt(ano) === anoatual;
            }).forEach(tarefa => {
                const [dia] = tarefa.data.split('/');
                const diaElement = document.getElementById(`dia${parseInt(dia) + diasAnteriores}`);
                
                if (diaElement && !diaElement.querySelector('.tarefa')) {
                    const circulo = document.createElement('div');
                    circulo.classList.add('tarefa');
                    diaElement.appendChild(circulo);
                    
                    let tarefadivTimeout;
                    
                    const mostrarTarefadiv = () => {
                        clearTimeout(tarefadivTimeout);
                        if (!diaElement.querySelector('.tarefadiv')) {
                            tarefadivTimeout = setTimeout(() => {
                                const tarefadiv = document.createElement('div');
                                tarefadiv.classList.add('tarefadiv');
                                tarefadiv.innerHTML = `
                                    <h3 class="nomeatividadediv">${tarefa.nome}</h3>
                                    <div class="divisaodiv"></div>
                                    <h3 class="dataatividadediv">${tarefa.data}</h3>
                                    <div class="divisaodiv"></div>
                                    <h3 class="horaatividadedix">${tarefa.horario}</h3>
                                `;
                                diaElement.appendChild(tarefadiv);
                                
                                tarefadiv.addEventListener('mouseenter', mostrarTarefadiv);
                                tarefadiv.addEventListener('mouseleave', esconderTarefadiv);
                            }, 200);
                        }
                    };
                    
                    const esconderTarefadiv = () => {
                        clearTimeout(tarefadivTimeout);
                        tarefadivTimeout = setTimeout(() => {
                            const tarefadiv = diaElement.querySelector('.tarefadiv');
                            if (tarefadiv) tarefadiv.remove();
                        }, 100);
                    };
                    
                    circulo.addEventListener('mouseenter', mostrarTarefadiv);
                    circulo.addEventListener('mouseleave', esconderTarefadiv);
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
