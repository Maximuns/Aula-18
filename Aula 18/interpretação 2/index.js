
// Leia o c�digo abaixo

const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30 ]

for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?
//18
// b) Se eu quisesse acessar o �ndice de cada elemento dessa lista, a sintaxe "for...of..." � suficiente? Se sim, o que poderia ser usado para fazer isso?
//if numero > numero desejado 