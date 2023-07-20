function changedColor(){
    // создаем переменную element1 и находим htmlElement по id=el
    let element1 = document.getElementById("el");
    //console.log(element1);
    element1.classList.toggle("ice");
}

let btn_id_1 = document.getElementById("btn_id");
// добавляем слушатель событий "клик" на кнопку
// нажали на кнопку - > работает ф-я changedColor
btn_id_1.addEventListener('click', changedColor);

// // --- ДОМАШНЕЕ ЗАДАНИЕ ---

// задание 1
let name_user = prompt("Введите ваше имя");
// alert("Добро пожаловать, " + name_user + "!");

// задание 2
let age_user = prompt("Введите ваш возраст");
     if (age_user < 18) {
         alert("Контент сайта не подходит для вас. Заходите на свой страх и риск!")
     } else if (age_user > 17 && age_user < 25) {
         alert("Не забудь перекусить, студент :)")
     } else if (age_user > 24 && age_user < 50) {
         alert("Вам сюда в самый раз!")
     } else if (age_user > 49) {
         alert("Похвально быть любознательным в таком возрасте")
     }
 alert("Добро пожаловать, " + name_user + "!");

// смена текста и цвета
// function changedColorText(){
//     let element_text = document.getElementById("el_text");
//     console.log(element_text);
//     element_text.classList.toggle("text");
// }
// смена цвета списка
// function changedColor_list(){
//     let element_list = document.getElementById("el_list");
//     element_list.classList.toggle("list");
// }

// let btn_id_text = document.getElementById("btn_text");
// console.log(btn_id_text);
// btn_id_text.addEventListener('click', changedColorText);

// let btn_id_list = document.getElementById("btn_list");
// btn_id_list.addEventListener('click', changedColor_list);