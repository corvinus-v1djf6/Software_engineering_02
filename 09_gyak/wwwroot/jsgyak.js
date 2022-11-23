window.onload = () => {
    console.log("betöltődött")
}

for (var sor = 0; sor < 10; sor++) {
    let arr = [];
    let eredmeny = [];
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
        if (oszlop === 0 || oszlop === sor - 1) {
            arr.push(1);
        } else {
            arr.push((eredmeny[sor - 2][oszlop - 1] + eredmeny[sor - 2][oszlop]));
        }
    }
    eredmeny.push(arr);
    return eredmeny;
}


var faktorialis = function (n) {
    let er = 1;
    for (let i = 1; i <= n; i++) {
        er = er * i;
    }
    return er;
}

var faktorialis2 = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * faktorialis2(n - 1)
    }
}