function primeNumber(a) {
    for (var i = 2; i <= a; i++) {
        if (i == a) {
            return "YES";
        }
        if (a % i == 0) {
            return "NO";
        }
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//น.ส.บัวชมพู ฤกษ์สุทธิรัตน์
//660610768