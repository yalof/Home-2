'use strict';

const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const inputText = document.querySelector("#inputText");
const btnSubmit = document.querySelector("#btnSubmit");
const btnClearAll = document.createElement("button");
const modal = document.createElement("div");

const btnEdit = document.createElement("button");
const btnClose = document.createElement("button");

let data = [];

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault(); //перезагрузка отменяется. отменяет действие браузера по умолчанию

  data.push(inputText.value); // const inputValue был ниже заменен на

  todo.innerHTML = ""; //очищение содержимого блока чтобы не дублировались новые задачи по неск раз

  data.forEach((title, index) => {
    todo.innerHTML += `                          
    <div class='card' id=${index}> 
    ${title} 
    <div class='btnCard'> <button id='btnDelete'> <strong> Delete </strong> </button>
    <button id='btnDone'> <strong> Done </strong> </button>
    </div>
    </div>
    `;
  });

  // + чтобы добавлялись значения вниз, а не переписывались заново

  form.reset(); //очищает инпут
});

//событие на весь блок повесили ниже
todo.addEventListener("click", (event) => {
  //ниже для проверки чтобы только для кнопки работало
  if (event.target.id === "btnDelete") {
    const card = event.target.closest(".card"); //находит род.элемент,ближ. с классом кард
    const cardId = +card.id; //ищем по айди элемент
    data.splice(cardId, 1);

    todo.innerHTML = "";

    data.forEach((title, index) => {
      todo.innerHTML += `                          
    <div class='card' id=${index}> 
    ${title} 
    <div class='btnCard'> <button id='btnDelete'> <strong> Delete </strong> </button>
    <button id='btnDone'> <strong> Done </strong> </button>
    </div>
    </div>
    `;
    });
    console.log(card);
  }
  //console.log('TARGET', event.target) ;  //на чем обрабатывает

  //console.log('CURENT_TARGET', event.currentTarget) ; //вешаем событие  на зел блок (id todo)
});

/// Создаем событие для кнопки Done
todo.addEventListener("click", (event) => {
  if (event.target.id === "btnDone") {
    const card = event.target.closest(".card");
    const cardId = +card.id;
    card.classList.add("activeCard");

    todo.innerHTML = "";
    data.forEach((title, index) => {
      todo.innerHTML += `                          
    <div class='card' id=${index}> 
    ${title} 
    <div class='btnCard'> <button id='btnDelete'> <strong> Delete </strong> </button>
    <button id='btnDone'> <strong> Done </strong> </button>
    </div>
    </div>
    `;
    });
  }
});

// ниже создаем кнопку Clear All
form.appendChild(btnClearAll);
btnClearAll.className = "btnClearAll";
btnClearAll.textContent = "CLEAR";

todo.addEventListener("click", (event) => {
  //ниже для проверки чтобы только для кнопки работало
  if (event.target.className === "btnClearAll") {
    const card = event.target.closest(".card");
    const cardId = +card.id;
    data.splice(cardId);

    todo.innerHTML = "";
  }
});

// создаем кнопку и модальное окно
form.append(btnEdit);
btnEdit.className = "btnEdit";
btnEdit.textContent = "Edit";

form.append(btnClose);
btnClose.className = "btnClose";
btnClose.textContent = "Close";

form.append(modal);
modal.className = "modalClass";
modal.textContent = "This is a modal window";

//открывается окно при клике
btnEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  modal.style.display = "block";
});
// закрытие при клике на кнопку
btnClose.addEventListener("click", (ev) => {
  modal.style.display = "none";
});
