// 1
const userAge = prompt('enter the year when you born');
let currentYear = 2023;
let currentAge = currentYear - userAge;
if (userAge === null){
    console.log('user entered no data');
} else {
    console.log(`user is ${currentAge} years old`);
}
let userCity = prompt('enter the city where you live');
let capCityUa = 'Kyiv';
let capCityUk = 'London';
let capCityUs = 'Washington'
if (userCity === null) {
    console.log('user entered no data');
} else if (userCity === capCityUa){
    console.log('User live in capital of Ukraine');
} else if (userCity === capCityUk) {
    console.log('User live in capital of United Kingdom');
} else if (userCity === capCityUs) {
    console.log('User live in capital of USA');
} else {
    console.log(`User live in ${userCity}`);
}
let userHobby = prompt('enter your hobby');
let hobbyFb = 'Football';
let hobbyBb = 'Basketball';
let hobbyBx = 'Box'
if (userHobby === null) {
    console.log('user entered no data');
} else if (userHobby === hobbyFb){
    console.log('user wanna be like Messi');
} else if (userHobby === hobbyBb){
    console.log('user wanna be like Michael Jordan');
} else if (userHobby === hobbyBx){
    console.log('user wanna be like Mike Tyson');
} else {
    console.log(`user likes ${userHobby}`);
}

if (userAge, userCity, userHobby === null) {
    alert(`It's a pity that you not shared your age:${userAge}, where you live: ${userCity}, you favorite sport: ${userHobby}`)
} else if(userCity === capCityUa, userHobby === hobbyFb){
    alert (`Your age: ${currentAge}, your city:${userCity} - capital of Ukraine, your sport: ${userHobby} - you wanna be like Messi`)
} else if(userCity === capCityUk, userHobby === hobbyBb){
    alert (`Your age: ${currentAge}, your city:${userCity} - capital of United Kingdom, your sport: ${userHobby} - you wanna be like Michael Jordan`)
} else if(userCity === capCityUs, userHobby === hobbyBx){
    alert(`Your age: ${currentAge}, your city:${userCity} - capital of United States of Amerika, your sport: ${userHobby} - you wanna be like Mike Tyson`)
} else {
    alert(`Your age: ${currentAge}, your city:${userCity}, your sport: ${userHobby}`)
}