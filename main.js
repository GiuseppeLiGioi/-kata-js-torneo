
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
    f.powerAfterTraining = f.power;
})

//Creo logica per assegnare ad ogni combattente un'arma casuale.
console.log("=== FASE 1: scelta dell'arma ===")
copyFighters.forEach(f => {
    let index = randomGenerate(0, copyWeapons.length - 1);

    let selectedWeapon = copyWeapons[index];
    f.weapon = selectedWeapon.name;
    copyWeapons.splice(index, 1)

})
//mostra in console l'output sotto forma di tabella
console.table(copyFighters)


console.log("=== FASE 2: Allenamento ===")

copyFighters.forEach(f => {
    let increment = randomGenerate(1, 100);
    f.powerAfterTraining = f.power * increment;

})

console.table(copyFighters)




console.log("=== FASE 3: Qualificazione ===")

let qualifiedFighters = copyFighters.filter((f) => f.powerAfterTraining > 2000)

console.table(qualifiedFighters)



console.log("=== FASE 4: Combattimento ===")
//creiamo il nuovo combattente che prenderà parte solo se sono dispari i qualificati.
let newFighter = {name: "Robot", powerAfterTraining: 4000, weapon:{name: "Laser", power: 100}}

if(qualifiedFighters.length % 2 !== 0){
    qualifiedFighters.push(newFighter);
}
let winnerFighters = [];

for(let i = 0; i < qualifiedFighters.length; i+=2){
    if(qualifiedFighters[i].powerAfterTraining > qualifiedFighters[i + 1].powerAfterTraining){
        console.log(`Vince il combattimento ${qualifiedFighters[i].name} contro ${qualifiedFighters[i + 1].name}`)
        winnerFighters.push(qualifiedFighters[i])
    } else if(qualifiedFighters[i].powerAfterTraining < qualifiedFighters[i + 1].powerAfterTraining){
        console.log(`Vince il combattimento ${qualifiedFighters[i + 1].name} contro ${qualifiedFighters[i].name}`)
         winnerFighters.push(qualifiedFighters[i + 1])
    }else{
        console.log(`Vince il combattimento ${qualifiedFighters[i].name} contro ${qualifiedFighters[i + 1].name} sfruttando il fattore casa.`)
         winnerFighters.push(qualifiedFighters[i])
    }
    
}
console.log("-------------------------------")
console.log("Tabella che mostra i vincitori di ogni incontro")
console.table(winnerFighters)




console.log("-------------------------------")
console.log("=== FASE 5: Premiazione - Podio ===")

winnerFighters.sort((a,b) => {
    return b.powerAfterTraining - a.powerAfterTraining
})
//una volta ordinati in maniera decrescente con il metodo slice, accorcio l'array affinchè ci siano solo i primi tre elementi (i primi tre classificati).
let podio = winnerFighters.slice(0, 3)
console.table(podio)
