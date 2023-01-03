let num = +prompt('Введите число')
let pow = +prompt('Введите степень')

let num1 = num;

for(let i = 1; i < pow; i++){
    num1 = num1 * num
}
alert(num1);