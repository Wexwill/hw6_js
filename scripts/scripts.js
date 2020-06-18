    // Task 1

console.log('Task 1');
    
function task1() {
    let str = ('aaa@bbb@ccc');

    console.log(str.replace(/@/g, '!'));
}
task1();
console.log('');

    // Task 2

console.log('Task 2');

function task2() {
    let date = ('2025-12-31'),
        date1 = date.replace(/(2025)-(12)-(31)/g, '$3/$2/$1');
    
    console.log(date1);
}
task2();
console.log('');

    // Task 3

console.log('Task 3');

function task3() {
    let str = ('я учу javascript!');

    console.log(str.substring(2, 6));
    console.log(str.substring(6, 16));

    console.log(str.substr(2, 3));
    console.log(str.substr(6, 10));

    console.log(str.slice(2, 6));
    console.log(str.slice(6, 16));
}
task3();
console.log('');

    // Task 4

console.log('Task 4');

function task4() {
    let array = [4, 2, 5, 19, 0, 10],
        summa = 0;

    for (let i = 0; i < array.length; i++) {
        summa = summa + Math.pow(array[i], 3);
    }
    console.log(Math.sqrt(summa));
}
task4();
console.log('');

    // Task 5

console.log('Task 5');

function task5(a, b) {
    let c = Math.abs(a - b);
    console.log(c);
}
task5(3, 5);
task5(6, 1);
console.log('');

    // Task 6

console.log('Task 6');

function task6() {
    let date = new Date();
    // date.setDate(1);
    console.log(date.toLocaleString('ru'));
}
task6();
console.log('');

    // Task 7

console.log('Task 7');

function task7() {
    let str = ('aa aba abba abbba abca abea');
    
    console.log(str.match(/ab+a/gi));
}
task7();
console.log('');

    // Task 8

console.log('Task 8');

function task8() {
    let phone = '+375(33)660-08 33',
        check1 = /^(\+?375)[-\(\s]?(25|29|33|44)[-\)\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$/g;
        check2 = /^\+?(\d)/g;

    console.log(phone);
    console.log(check1.test(phone));
    console.log(check2.test(phone));
}
task8();
console.log('');

    // Task 9

console.log('Task 9');

function task9() {
    let url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3',
        regexp = /^(?<Domain>https?:\/\/[\w\d-.]+)\/(?<Adres>.+)\?(?<Parameters>.*)\#(?<Hash>.+)/;
        
        console.log(url.match(regexp));
}
task9();
console.log('');

    // Task 10

console.log('Task 10');

function task10() {
    let str = 'hello  hello  hello      hello   world',
        regexp = /\b(\w+)\b/g,
        result = str.match(regexp),
        newarray = Array.from(new Set(result));

    return newarray.join(' ');

}
console.log(task10());
