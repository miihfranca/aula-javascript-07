//1)   Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:

//a)       O número de caracteres da string.

//b)      A string com todas suas letras em maiúsculo.

//c)       O número de vogais da string.

//d)      A string com todas suas letras em minúsculo.

//e)      Fazer a busca pela palavra humanidade e exibir o index onde ela está.

let texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo."
console.log(texto.length)
console.log(texto.toUpperCase())
console.log(texto.match().length)
console.log(texto.toLowerCase())
console.log(texto.indexOf("humanidade"))


//2)      Percorrer os números pares menores que 100.

//a)       Adicionar em um array.

//b)      Transformar o array em string.

//c)       Exibir no console.

let numeros = []
for (let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        numeros.push(i)
        console.log(numeros)
    }
}