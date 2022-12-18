var meds = [];

function addMed() {
    event.preventDefault();
    let newMed = {
        "name": document.getElementById("fname").value,
        "quantidade": document.getElementById("fquantidade").value,
        "class": document.getElementById("fclasse").value,
    }

    resetForm();
    meds.push(newMed);
    renderTable();
}

function removeMed(index){
    meds.splice(index,1);
    renderTable();
}

function renderTable(){
    let table = document.getElementById("dataTable");
    table.innerHTML =  `             <tr>
    <th>ID</th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>
    </tr>`;

    console.log(meds.length);

    for(let i = 0; i < meds.length; i++)
    {


        table.innerHTML = table.innerHTML  +  `<tr>
        <td>${i}</td>
        <td>${meds[i].name}</td>
        <td>${meds[i].quantidade}</td>
        <td>${meds[i].class}</td>
        <td><img src="assets/lixo.png" width="25px" height="25px" onclick="removeMed(${i})"></td>
    </tr>`
    }
}

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("fquantidade").value = "";
    document.getElementById("fclasse").value = "";
}

renderTable();