
fetch('https://backend-info1.vercel.app/v2/alunos')
.then(resposta => resposta.json())
.then(resposta => {
    console.log(resposta)
    resposta.forEach(item => {
        const elementoaluno = document.createElement('li')
        elementoaluno.classList.add('boletimelemento')
        elementoaluno.textContent = item.nome
        document.getElementById('nomesboletim').appendChild(elementoaluno)

        const elementoalunonota1 = document.createElement('li')
        elementoalunonota1.classList.add('boletimelemento')
        const inputnota1 = document.createElement('input')
        inputnota1.classList.add('inputboletim')
        document.getElementById('notas1trim').appendChild(elementoalunonota1)
        elementoalunonota1.appendChild(inputnota1)
        inputnota1.value = item.trim1

        const elementoalunonota2 = document.createElement('li')
        elementoalunonota2.classList.add('boletimelemento')
        const inputnota2 = document.createElement('input')
        inputnota2.classList.add('inputboletim')
        document.getElementById('notas2trim').appendChild(elementoalunonota2)
        elementoalunonota2.appendChild(inputnota2)
        inputnota2.value = item.trim2

        const elementoalunonota3 = document.createElement('li')
        elementoalunonota3.classList.add('boletimelemento')
        const inputnota3 = document.createElement('input')
        inputnota3.classList.add('inputboletim')
        document.getElementById('notas3trim').appendChild(elementoalunonota3)
        elementoalunonota3.appendChild(inputnota3)
        inputnota3.value = item.trim3
    });
  })