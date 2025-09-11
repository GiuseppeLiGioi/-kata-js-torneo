function renderTables(){

    let fase1Section = document.getElementById("fase1")
    
    let table1 = document.createElement("table")
    table1.className = "table-tournament";
    
    let firstRow = document.createElement("tr")
    
    let arrayFirstRow = ["Nome", "Potenza", "Arma"];
    
    arrayFirstRow.forEach((colName) => {
        let th = document.createElement("th")
        th.textContent = colName;
        firstRow.appendChild(th)
    })
    table1.appendChild(firstRow)
    
    copyFighters.forEach((f) => {
        let row = document.createElement("tr");
    
        let tdName = document.createElement("td");
        tdName.textContent = f.name;
        row.appendChild(tdName);
    
         let tdPower = document.createElement("td");
        tdPower.textContent = f.power;
        row.appendChild(tdPower);
    
         let tdWeapon = document.createElement("td");
        tdWeapon.textContent = f.weapon;
        row.appendChild(tdWeapon);
    
    
        table1.appendChild(row);
    })
    
    fase1Section.appendChild(table1)
    
    
    
    
    let fase2Section = document.getElementById("fase2")
    
    let table2 = document.createElement("table")
    table2.className = "table-tournament";
    
    let firstRow2 = document.createElement("tr")
    let arrayFirstRow2 = ["Nome", "Potenza", "Arma", "Potenza post allenamento"];
    
    arrayFirstRow2.forEach((colName) => {
    let th = document.createElement("th")
    th.textContent = colName
    firstRow2.appendChild(th)
    })
    table2.appendChild(firstRow2)
    
    
    copyFighters.forEach((f) => {
        let row = document.createElement("tr")
    
        let tdName = document.createElement("td")
        tdName.textContent = f.name;
        row.appendChild(tdName);
    
        let tdPower = document.createElement("td")
        tdPower.textContent = f.power;
        row.appendChild(tdPower);
    
        let tdWeapon = document.createElement("td")
        tdWeapon.textContent = f.weapon;
        row.appendChild(tdWeapon);
    
        let tdPowerAfterTraining = document.createElement("td")
        tdPowerAfterTraining.textContent = f.powerAfterTraining;
        row.appendChild(tdPowerAfterTraining);
    
        table2.appendChild(row)
    })
    
    fase2Section.appendChild(table2)
    
    
    
    
    let fase3Section = document.getElementById("fase3")
    
    let table3 = document.createElement("table")
    table3.className = "table-tournament";
    
    let firstRow3 = document.createElement("tr")
    let arrayFirstRow3 = ["Nome", "Potenza", "Arma", "Potenza post allenamento"];
    
    arrayFirstRow3.forEach((colName) => {
    let th = document.createElement("th")
    th.textContent = colName
    firstRow3.appendChild(th)
    })
    table3.appendChild(firstRow3)
    
    
    qualifiedFighters.forEach((f) => {
        let row = document.createElement("tr")
    
        let tdName = document.createElement("td")
        tdName.textContent = f.name;
        row.appendChild(tdName);
    
        let tdPower = document.createElement("td")
        tdPower.textContent = f.power;
        row.appendChild(tdPower);
    
        let tdWeapon = document.createElement("td")
        tdWeapon.textContent = f.weapon;
        row.appendChild(tdWeapon);
    
        let tdPowerAfterTraining = document.createElement("td")
        tdPowerAfterTraining.textContent = f.powerAfterTraining;
        row.appendChild(tdPowerAfterTraining);
    
        table3.appendChild(row)
    })
    
    fase3Section.appendChild(table3)
    
    
    
    
    
    
    
    
    
    let fase4Section = document.getElementById("fase4")
    
    let table4 = document.createElement("table")
    table4.className = "table-tournament";
    
    let firstRow4 = document.createElement("tr")
    let arrayFirstRow4 = ["Nome", "Potenza", "Arma", "Potenza post allenamento"];
    
    arrayFirstRow4.forEach((colName) => {
    let th = document.createElement("th")
    th.textContent = colName
    firstRow4.appendChild(th)
    })
    table4.appendChild(firstRow4)
    
    
    winnerFighters.forEach((f) => {
        let row = document.createElement("tr")
    
        let tdName = document.createElement("td")
        tdName.textContent = f.name;
        row.appendChild(tdName);
    
        let tdPower = document.createElement("td")
        tdPower.textContent = f.power;
        row.appendChild(tdPower);
    
        let tdWeapon = document.createElement("td")
        tdWeapon.textContent = f.weapon;
        row.appendChild(tdWeapon);
    
        let tdPowerAfterTraining = document.createElement("td")
        tdPowerAfterTraining.textContent = f.powerAfterTraining;
        row.appendChild(tdPowerAfterTraining);
    
        table4.appendChild(row)
    })
    
    fase4Section.appendChild(table4)
    
    
    
    
    
    
    
    
    
    
    
    let fase5Section = document.getElementById("fase5")
    
    let table5 = document.createElement("table")
    table5.className = "table-tournament";
    
    let firstRow5 = document.createElement("tr")
    let arrayFirstRow5 = ["Nome", "Potenza", "Arma", "Potenza post allenamento"];
    
    arrayFirstRow5.forEach((colName) => {
    let th = document.createElement("th")
    th.textContent = colName
    firstRow5  .appendChild(th)
    })
    table5.appendChild(firstRow5)
    
    
    podio.forEach((f) => {
        let row = document.createElement("tr")
    
        let tdName = document.createElement("td")
        tdName.textContent = f.name;
        row.appendChild(tdName);
    
        let tdPower = document.createElement("td")
        tdPower.textContent = f.power;
        row.appendChild(tdPower);
    
        let tdWeapon = document.createElement("td")
        tdWeapon.textContent = f.weapon;
        row.appendChild(tdWeapon);
    
        let tdPowerAfterTraining = document.createElement("td")
        tdPowerAfterTraining.textContent = f.powerAfterTraining;
        row.appendChild(tdPowerAfterTraining);
    
        table5.appendChild(row)
    })
    
    fase5Section.appendChild(table5)
}






let startBtn = document.getElementById("startBtn")
let resetBtn = document.getElementById("resetBtn")


startBtn.addEventListener("click", () => {
    startTournament();
    renderTables();
})
resetBtn.addEventListener("click", resetTournament);