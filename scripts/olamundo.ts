var p = document.createElement('p');
var ola: string = "DevDojo vocês são f***";
p.textContent = ola;
document.body.appendChild(p);

let num: number = 10;
let bool: boolean = true;
let str: string = "A beatiful message";
let str2: string = 'A beatiful message with aspas simples';
let str3: string = `${str2} 
                    to Felipe`;
console.log(str3);

function func():void{};

if(bool != null){};
if(bool != undefined){};

if(bool){
    //var i: number; //Variavel se torna global
    let i: number;
    for(i=0;i<3;i++){
        console.log(i);
    }
    console.log("Valor do I dentro do escopo: "+i);
}
//console.log("Valor do I fora do escopo "+i);

//Array
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//Tupla
let tuple:[string,number];
tuple = ["Felipe",24];
console.log("Tupla: "+tuple[0]);

//Enumaração
enum Day{Monday,Tuesday}
let dia: Day = Day.Monday;
console.log("Day: "+Day[dia]);