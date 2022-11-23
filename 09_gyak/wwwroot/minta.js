console.log("minta fut!")

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}

for (var i = 0; i < 10; i++) {
    console.log(`${i} : ${faktoriálisR(i)}`)
}

function számítás() {
    let n = document.getElementById("nTb").value;
    let n2 = parseInt(n)
    if (n2) {
        let er = faktoriális(n)
        document.getElementById("eredményDiv").innerText = er;
    } else {
        document.getElementById("eredményDiv").innerText = "rossz paraméter";
    }

}