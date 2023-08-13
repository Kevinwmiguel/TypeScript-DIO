var a: boolean = true
let b: string = 'b'
const c: number = 2



interface Pessoa {
    name: string,
    age: number,
    profisional?: string
}

const pessoa: Pessoa = {
    name: 'Kevin',
    age: 24
}

const outraPessoa: Pessoa = {
    name: 'Paulo',
    age: 34,
    profisional: 'Programador'
}



if (c > 2){
    console.log("Maior que 2")
} else if (c === 2) {
    console.log("num É 2")
} else {
    console.log('num menor que 2')
}

const tuser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Voce pode visualizar'
}

function validateUser(user:string){
    console.log(tuser[user as keyof typeof tuser])
}

const user: string = 'admin'

validateUser(user)
validateUser('student')
validateUser('viewer')  

//For
for (let i = 0; i < 5; i++){
    console.log(i)
}

let n: number = 0
//while
while(n < 6){
    console.log(n)
    n+=2
}



const arrayPessoa: Array<Pessoa> = [pessoa, outraPessoa]

console.log(arrayPessoa[0])

const array: Array<number> = [1,2,3,4,5,6]

console.log(array.length)

const buscaNum = array.find(num => num == 5)


// PARA CADA ELEMENTO NO ARRAY - ESPERA UMA FUNCAO DE  CALLBACK
array.forEach(num => {if (num > 2){
    console.log(num)
}} )

// igual ao for each - ESPERA UMA FUNCAO DE  CALLBACK
array.map(num => console.log(num*99))