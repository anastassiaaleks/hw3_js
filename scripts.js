// Задание 1
console.log('Задание 1');

for (let nums = 1; nums<=50; nums++) {
    console.log(nums);
}
console.log('');
for (let nums1 = 35; nums1>=8; nums1--) {
    console.log(nums1);
}

// Задание 2
console.log('');
console.log('Задание 2');

for (let nums2 = 89; nums2>=11; nums2--) {
    console.log(nums2);
}

// Задание 3
console.log('');
console.log('Задание 3');

let sum = 0;
for (let i = 0; i<=100; i++) {
    sum=sum+i;
}
console.log('Сумма чисел от 0 до 100 = ', sum);

// Задание 4
console.log('');
console.log('Задание 4');

let a = prompt('Задание 4. Введите число', 5);
sum = 0;
for (i = 1; i<=a; i++) {
    sum = 0;
    for (let j=1; j<=i; j++) {
        sum += j;
    }
    console.log('Sum '+ i +' = '+ sum);
}

// Задание 5
console.log('');
console.log('Задание 5');

for (i=8; i<=56; i++) {
    if (i%2 !==0) {
        continue;
    }
    console.log(i);
}

// Задание 6
console.log('');
console.log('Задание 6');

console.log('Таблица умножения');
for (i=2; i<=10; i++) {
    console.log('');
    for (j=2; j<=10; j++) {
        console.log(i + '*' + j +'='+ i*j)    
    } 
}

// Задание 7
console.log('');
console.log('Задание 7');

let n=1000;
let num=0;
for(i=1; n>0; i++) {
    n=n/2;
    if (n<50) {
        num=i;
        console.log('Число = '+n);
        console.log('Количество итераций = '+num);
        break;
    }
}

// Задание 8
console.log('');
console.log('Задание 8');

sum=0;
let avr=0;
let r=0
let k=1;
for(i=1; k=1; i++) {
    n=prompt('Задание 8. Введите число.', 0);
    if (n>0 || n<0) {
        n=Number(n);
        sum=sum+n;
        r=r+1
        avr=sum/r;
    } else if (n==0 || n=='') {
        console.log('Сумма = '+sum);
        console.log('Среднее арифметическое = '+avr);
        break;
    } else {
        alert('Ошибка ввода');
    } 
}

// Задание 9
console.log('');
console.log('Задание 9');

let m='4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let mArr=m.split(' ');
let min=mArr[0];
let max=0;
for (i=0; i<mArr.length; i++) {
    if (mArr[i]>=max) {
        max=mArr[i];
    } else if (mArr[i]<=min) {
        min=mArr[i];
    } else continue;
}
console.log('max = '+max);
console.log('min = '+min);


// Задание 10
console.log('');
console.log('Задание 10');

n=prompt('Задание 10. Введите число', 7623);
console.log('a.');
for (i=0; i<n.length; i++) {
    console.log(n[i]);
}

console.log('');
console.log('b.');
console.log('В числе '+n+' '+n.length+' цифры.')

console.log('');
console.log('с.');
sum=0;
for (i=0; i<n.length; i++) {
    sum=Number(sum)+Number(n[i]);  
}
console.log('Сумма цифр в числе '+n+' = '+sum);