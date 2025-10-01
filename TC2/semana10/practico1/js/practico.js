let requeridas = [63432909, 65432123, 55555555];

requeridas.push(12345678);

console.log(requeridas);

let cant = 0
for (i = 0; i < requeridas.length; i++) {
    if (requeridas[i] > 58076109) {
        cant = cant + 1;
    }
}

console.log(cant);