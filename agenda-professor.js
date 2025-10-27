document.getElementById('enviar').addEventListener('click', async (event) => {
    const nome = document.getElementById('nome-atividade').value;
    const dataInput = document.getElementById('data-input').value;
    const hora = document.getElementById('hora-input').value;
    
    if (!nome || !dataInput || !hora) {
        alert('Por favor, preencha todos os campos');
        return;
    }
    
    const [ano, mes, dia] = dataInput.split('-');
    const data = `${dia}/${mes}/${ano}`;
    
    try {
        const response = await fetch('https://backend-info1.vercel.app/v2/tarefas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, data, horario: hora })
        });
        
        if (response.ok) {
            alert('Atividade criada com sucesso!');
            document.getElementById('nome-atividade').value = '';
            document.getElementById('data-input').value = '';
            document.getElementById('hora-input').value = '';
        } else {
            alert('Erro ao criar atividade');
        }
    } catch (error) {
        console.error('Erro de rede:', error);
        alert('Erro de conexão');
    }

});
