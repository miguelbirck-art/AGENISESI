const notastrim1 = document.getElementById('notas1trim')
const notastrim2 = document.getElementById('notas2trim')
const notastrim3 = document.getElementById('notas3trim')

for (i = 0; i <= 14; i++) {
    const nota1 = document.createElement('li')
    nota1.classList.add('boletimelemento')
    nota1.classList.add('boletimelemento1')
    notastrim1.appendChild(nota1)
    nota1.textContent = Math.floor(Math.random() * (10 - 0));
    if (nota1.textContent < 6) {
        nota1.style.color = '#8B0101'
    }
    const nota2 = document.createElement('li')
    nota2.classList.add('boletimelemento')
    nota2.classList.add('boletimelemento1')
    nota2.textContent = Math.floor(Math.random() * (10 - 0));
    if (nota2.textContent < 6) {
        nota2.style.color = '#8B0101'
    }
    notastrim2.appendChild(nota2)
    const nota3 = document.createElement('li')
    nota3.classList.add('boletimelemento')
    nota3.classList.add('boletimelemento1')
    nota3.textContent = Math.floor(Math.random() * (10 - 0));
    if (nota3.textContent < 6) {
        nota3.style.color = '#8B0101'
    }
    notastrim3.appendChild(nota3)
}
