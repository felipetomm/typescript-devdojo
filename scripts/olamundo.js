var p = document.createElement('p');
var ola = "DevDojo vocês são f***";
p.textContent = ola;
document.body.appendChild(p);
var num = 10;
var bool = true;
var str = "A beatiful message";
var str2 = 'A beatiful message with aspas simples';
var str3 = str2 + " \n                    to Felipe";
console.log(str3);
function func() { }
;
if (bool !== null) { }
;
if (bool !== undefined) { }
;
if (bool) {
    //var i: number; //Variavel se torna global
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log("Valor do I dentro do escopo: " + i);
}
//console.log("Valor do I fora do escopo "+i);
//Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Tupla
var tuple;
tuple = ["Felipe", 24];
console.log("Tupla: " + tuple[0]);
//Enumaração
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
})(Day || (Day = {}));
var dia = Day.Monday;
console.log("Day: " + Day[dia]);
//Função
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(add(1, 2, 3));
