const numeros = [];
document.getElementById('agenda-formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    var table = document.getElementById('agenda-lista');

    const inputNumeroTelefone = document.getElementById('telefone')

    if (numeros.includes(inputNumeroTelefone.value)) {
        alert (`Já foi adicionado um contato com esse telefone!`);
        return;
    } else {
        numeros.push(inputNumeroTelefone.value);
    }

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = `<strong>${nome}</strong>`
    cell2.innerHTML = `<strong>${telefone}</strong>`;

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});