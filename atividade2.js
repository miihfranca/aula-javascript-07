//1)      Criar variáveis strings e concatenar:

//a)       Criar uma variável chamada palavra1 e que tenha a string com o valor “Aprendendo” dentro dela.

//b)      Criar mais uma variável chamada palavras com a string com o valor “strings em JavaScript”

//c)       Exibir no console a frase “Aprendendo strings em JavaScript”.

//d)      Lembrando de ter todos os espaços.

let palavra1 = "Aprendendo"
let palavra2 = "strings em JavaScript"
console.log("${palavra1 } ${palavras}")




//2)      Criar variáveis strings:

//a)       Criar 3 variáveis com os nomes palavra1, palavra2, palavra3, cada uma contendo uma palavra igual ao nome da variável correspondentes (ex.: let palavra1= “palavra1”);

//b)      Criar mais 3 variáveis chamadas frase1, frase2, frase2. Cada uma iniciará com “Esta é a frase com a ” mais a palavra correspondente.

//c)       Exibir a seguinte string de múltiplas linhas:

//Esta é a frase com a palavra1.

//Esta é a frase com a palavra2.

//Esta é a frase com a palavra3.

let palavra1 = "palavra1"
let palavra2 = "palavra2"
let palavra3 = "palavra3"
let frase1 = "Esta é a frase com a "
let frase2 = "Esta é a frase com a "
let frase3 = "Esta é a frase com a "

console.log("${frase1} ${palavra1}")
console.log("${frase2} ${palavra2}")
console.log("${frase3} ${palavra3}")


//   Dado o array

// let vetor = ["a", "b", "a","a","c","b"]

//a)       Criar uma variável com o array ordenado de forma crescente;

//b)      Exibir no console.

//c)       Criar uma variável com o array ordenado de forma inversa.

//d)      Exibir no console

let vetor = ["a", "b", "a","a","c","b"]
console.log(vetor.sort())
let inverso = vetor.reverse()
console.log(inverso)