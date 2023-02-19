// 1
let a = 10;
alert(a);
a = 20;
alert(a);

//2
let release = 2007;
alert(`Год выпуска первого IPhone ${release}`);

//3
let founder = "Брендан Айк"
alert(`JavaScript за 10 дней создал ${founder}`)

//4
let x = 10;
let y = 2;

alert(`Сумма ${x + y}`);
alert(`Разность ${x - y}`);
alert(`Произведение ${x * y}`);
alert(`Частное ${x / y}`);

//5
let result = 2 ** 5;
alert(result);

//6
let a = 9;
let b = 2;
alert(a % b);

//7
let num = 1;
num+= 5;
num-= 3;
num*= 7;
num/= 3;
num++;
num--;
alert(num);

//8
let age = Number(prompt("Сколько вам лет?"));
alert(`Ого, да вам ${age}`);

//9.1
let user = {
    name: "Albert",
    age: 32,
    isAdmin: true
}

user["city of residence"] = "Moscow";

//9.2
let name = prompt("Как вас зовут?");
alert(`Вас зовут, ${name}!`)

//9.3
let user = {
    name: "Albert",
    age: 32,
    isAdmin: true
}

user["city of residence"] = "Moscow";

delete user["city of residence"];

//9.4
let user = {
    name: "Albert",
    age: 32,
    isAdmin: true
}

user["city of residence"] = "Moscow";
user.age = 24;

let info = prompt("Какую информацию хотите узнать о пользователе?");

alert(user[info]);

//10
let name = prompt("Как вас зовут?");
alert(`Вас зовут, ${name}!`)