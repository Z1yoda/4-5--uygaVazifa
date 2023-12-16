// 1-masala a dan b gacha sonlar kopaytmasi
console.log("1-masala");

let a = 2;
let b = 6;
let kopaytma = 1;

while (a <= b) {
  kopaytma *= a;
  a++;
}
console.log(kopaytma);

// 2-masala Berilgan sonni necha xonali ekanini aniqlovchi algoritm tuzing
console.log("2-masala");

let son = 785984;
let xonalarSoni = 0;

while (son >= 1) {
  son = son / 10;
  xonalarSoni++;
}

console.log(xonalarSoni);

// 3-masala sonni faktorialini topuvchi algoritm tuzing
console.log("3-masala");
let bir = 1;
let number = 10;
let faktorial = 1;

while (bir <= number) {
  faktorial *= bir;
  bir++;
}
console.log(faktorial);

// 4-masala foydalanuvchi parol kiritishini so'raydigan, parolni tekshiradigan dastur yozing
console.log("4-masala");

let password = 12345;
let parol = +prompt("Parolni kiriting");
let urinishlarSoni = 0;

while (password != parol) {
  parol = prompt("try again");
  urinishlarSoni++;
}
parol = alert("To'g'ri parol kiritildi");
console.log("To'g'ri parol kiritildi");

// 5-masala birinchi n ta tub sonning yig'indisini hisoblovchi algoritm tuzing
console.log("5-masala");
let n = parseInt(prompt("Enter n:"));
let yigindi = 0;
let counter = 0;
let numberr = 2;

while (counter < n) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(numberr); i++) {
    if (numberr % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    yigindi += numberr;
    counter++;
  }
  numberr++;
}

console.log("Yigindi: ", yigindi);

// 6-masala sonni teskari tartibda yozuvchi algoritm yozing
console.log("6-masala");

let son1 = 12345;
let teskariSon = 0;

while (son1 !== 0) {
  let raqam = son1 % 10;
  teskariSon = teskariSon * 10 + raqam;
  son1 = Math.trunc(son1 / 10);
}

console.log("Teskari tartibda:", teskariSon);
