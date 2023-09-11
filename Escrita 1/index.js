
/**
 * 
 * Pergunte ao usuário quantos bichos de estimação ele tem e guarde esse dado em uma variável.
 * 
 * Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!".
 * 
 * Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.
 * Dica: coloque um "prompt" dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
 * Por fim, imprima no console o "array" completo, com os nomes dos bichos.
 * 
**/

let quantiaPets = Number(prompt(`Quantos pets você tem?`))
let listaPets = []

if(quantiaPets === 0){
    console.log(`Que pena! Você pode adotar um pet!`)
}
else{
    while(quantiaPets > 0){
        listaPets.push(prompt(`Insira o nome de seus pets, um por cada prompt.`))
        quantiaPets -= 1
    }
    console.log(listaPets)
}