"use strict";

/* 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
[]() */

/* const dropdownItemEl = document.querySelectorAll(".dropdown-item");

dropdownItemEl.forEach((element) => {
  element.classList.add("super-dropdown");
}); */

/* 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
[]() */

/* const btnEl = document.querySelector("div.dropdown button.btn");

const btnElClass = btnEl.classList;
let count = 0;

btnElClass.forEach((element) => {
  if (element.toLowerCase() === "btn-secondary") {
    btnElClass.remove(element);
  } else {
    count++;
  }
});
if (count === btnElClass.length) {
  btnEl.classList.add("btn-secondary");
} */

/* 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
[]() */

/* const dropdownMenuEl = document.querySelector("div.menu");
dropdownMenuEl.classList.remove('dropdown-menu'); */

/* 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
[]() */

/* const dropdownEl = document.querySelector("div.menu");
dropdownEl.insertAdjacentHTML("afterend", '<a href="#">link</a>');
 */
/* 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
[]() */

/* const dropdownMenuButtonEl = document.querySelector("#dropdownMenuButton");
dropdownMenuButtonEl.setAttribute('id', 'superDropdown'); */

/* 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
[]() */

/* const ariaLabelledbyEl = document.querySelector("[aria-labelledby='dropdownMenuButton']");
ariaLabelledbyEl.setAttribute('data-dd', 3); */

/* 7. Удалите атрибут type у элемента с классом "dropdown-toggle". */

/* const dropdownToggleEl = document.querySelector("div.dropdown button.dropdown-toggle");
dropdownToggleEl.removeAttribute('type');
 */
