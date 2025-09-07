
let copyFighters = fighters.map(f => ({name: f.name, power: f.power}))
let copyWeapons = weapons.map(w => ({name: w.name, power: w.power}))

let numCasual = 0;
const randomGenerate = (min, max) => {
    numCasual = Math.floor(Math.random() * (max - min + 1)) + min;
    return numCasual;
}

//FASE 1. Assegno ad ogni combattente una proprietà weapon, dove salvare la sua arma casuale.
copyFighters.forEach(f => {
    f.weapon = "";
})

//Creo logica per assegnare ad ogni combattente un'arma casuale.
console.log("FASE 1: scelta dell'arma...")
copyFighters.forEach(f => {
    let index = randomGenerate(0, copyWeapons.length - 1);

    let selectedWeapon = copyWeapons[index];
    f.weapon = selectedWeapon.name;
    copyWeapons.splice(index, 1)

})
//mostra in console l'output sotto forma di tabella
console.table(copyFighters)

