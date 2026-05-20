function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
};
buggyFunction();
console.log(wtf);


1. o bug estava com : e nao é preciso.

2. não é possivel recuperar globalmente um scope que esta dentro da funçao, nem mesmo os que estao dentro de um bloco. Esses sao apenas recuperados dentro de onde estao. por isso que a variavel wtf esta bugando.