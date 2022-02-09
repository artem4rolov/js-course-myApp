/* Задание на урок:
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

"use strict";

let numberOfFlims;

function start() {
    numberOfFlims = +prompt("Сколько фильмов вы уже посмотрели?");

    while(numberOfFlims == '' || numberOfFlims == null || isNaN(numberOfFlims)) {
        numberOfFlims = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFlims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    
        const a = prompt("Один из последних просмотренных фильмов?"),
              b = prompt("На сколько оцените его?");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();



//Первое задание
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

//Второе задание
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

