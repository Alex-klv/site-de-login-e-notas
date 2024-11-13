function processaLogin(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "Paulo Pimentel" && senha == "nota10"){
        window.location.href = "ALUNOS.html";
    }
    else{
        alert('Senha ou Usuario incorreto');
    }
}

function recuperarSenha(){
    alert('Eu não fiz essa função, desculpa 🙃');
}

//______________________________________________________________________________________________________________

let linhaAtual = null; // Variável para armazenar a linha que está sendo editada

// Função para salvar as informações do aluno e editar
function Salvar() {
    // Obtém os valores dos campos de entrada
    const nomeAluno = document.getElementById("nome_estudante").value;
    const Matrícula = document.getElementById("matrícula").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    if (nomeAluno == "" || Matrícula == "") {
        alert('Valores inválidos.');
        return;
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert('Valor de nota incorreto.');
        return;
    } else if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
        alert('Valor de nota incorreto.');
        return;
    }

    // Calcula a média das notas
    const media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

    if (linhaAtual) {
        linhaAtual.cells[0].innerText = Matrícula;
        linhaAtual.cells[1].innerText = nomeAluno;
        linhaAtual.cells[2].innerText = nota1;
        linhaAtual.cells[3].innerText = nota2;
        linhaAtual.cells[4].innerText = nota3;
        linhaAtual.cells[5].innerText = nota4;
        linhaAtual.cells[6].innerText = media;

        linhaAtual = null;
    } else {
        // Cria uma nova linha para a tabela
        const tabelaNotas = document.getElementById("grades-table-body");
        const novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `
            <td>${Matrícula}</td>
            <td>${nomeAluno}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${nota3}</td>
            <td>${nota4}</td>
            <td>${media}</td>
            <td>
                <button onclick="editarLinha(this)">Editar</button>
                <button onclick="removerLinha(this)">Remover</button>
            </td>
        `;

        tabelaNotas.appendChild(novaLinha);
    }

    document.getElementById("matrícula").value = "";
    document.getElementById("nome_estudante").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
}

function editarLinha(botao) {
    
    linhaAtual = botao.parentNode.parentNode;

    document.getElementById("matrícula").value = linhaAtual.cells[0].innerText;
    document.getElementById("nome_estudante").value = linhaAtual.cells[1].innerText;
    document.getElementById("nota1").value = linhaAtual.cells[2].innerText;
    document.getElementById("nota2").value = linhaAtual.cells[3].innerText;
    document.getElementById("nota3").value = linhaAtual.cells[4].innerText;
    document.getElementById("nota4").value = linhaAtual.cells[5].innerText;
}

function removerLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.remove();
}