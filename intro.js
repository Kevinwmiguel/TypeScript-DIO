var a = true;
var b = 'b';
var c = 2;
var pessoa = {
    name: 'Kevin',
    age: 24
};
var outraPessoa = {
    name: 'Paulo',
    age: 34,
    profisional: 'Programador'
};
if (c > 2) {
    console.log("Maior que 2");
}
else if (c === 2) {
    console.log("num É 2");
}
else {
    console.log('num menor que 2');
}
var tuser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Voce pode visualizar'
};
function validateUser(user) {
    console.log(tuser[user]);
}
var user = 'admin';
validateUser(user);
validateUser('student');
validateUser('viewer');
//For
for (var i = 0; i < 5; i++) {
    console.log(i);
}
var n = 0;
//while
while (n < 6) {
    console.log(n);
    n += 2;
}
var arrayPessoa = [pessoa, outraPessoa];
console.log(arrayPessoa[0]);
var array = [1, 2, 3, 4, 5, 6];
console.log(array.length);
var buscaNum = array.find(function (num) { return num == 5; });
// PARA CADA ELEMENTO NO ARRAY - ESPERA UMA FUNCAO DE  CALLBACK
array.forEach(function (num) {
    if (num > 2) {
        console.log(num);
    }
});
// igual ao for each - ESPERA UMA FUNCAO DE  CALLBACK
array.map(function (num) { return console.log(num * 99); });
