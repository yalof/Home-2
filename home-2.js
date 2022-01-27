'use strict';


let surName = prompt('Ваша фамилия:');
while (surName === '') {
    alert(`Вы не ввели фамилию. Попробуйте еще раз:`);   //как иначе выводить ошибку?кроме alert
    surName = prompt('Ваша фамилия:');
};
let yourName = prompt('Ваше имя:');
while (yourName === '') {
    alert(`Вы не ввели имя. Попробуйте еще раз:`);
    yourName = prompt('Введите Ваше имя:');
};

let fatherName = prompt('Ваше отчество:');
while (fatherName === '') {
    alert(`Вы не ввели отчество. Попробуйте еще раз:`);
    fatherName = prompt('Ваше отчество:');
};


const fullName = `${surName} ${yourName} ${fatherName}`;

let age = +prompt('Ваш возраст в годах:');
while (isNaN(age) || age < 1) {
    alert(`Попробуйте еще раз:`);
    age = +prompt('Ваш возраст:', '');
};
const ageYears = age;
const ageDays = age * 365;
const ageFiveYears = age + 5;
let retirement = null;


const youMale = confirm('Ваш пол - мужской?');
const male = youMale ? 'мужcкой' : 'женский';
if ((youMale && age >= 65) || (!youMale && age >= 55)) {
    retirement = 'да';
} else {
    retirement = 'нет';
};


/*function valid (valueForAge){ 
    if (valueForAge === Number) {
        return true;
    } else {
        return false
    }*/

alert(`
    Ваше Ф.И.О.: ${fullName} \n
    Ваш возраст в годах: ${ageYears} \n
    Ваш возраст в днях: ${ageDays} \n
    Через 5 лет вам будет: ${ageFiveYears} \n
    Ваш пол: ${male} \n
    Вы на пенсии: ${retirement}
`);







