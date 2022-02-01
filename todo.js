'use strict';

const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const inputText = document.querySelector("#inputText");
const btnSubmit = document.querySelector("#btnSubmit");
const btnClearAll = document.querySelector("#btnClearAll");
const myModal = document.querySelector(".myModal");
const btnEdit = document.querySelector("#btnEdit");
const btnClose = document.querySelector("btnClose");

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
    const getCard = () => {
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
  }
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

// ниже кнопку Clear All;

todo.addEventListener("click", (event) => {
  //ниже для проверки чтобы только для кнопки работало
  if (event.target.id === "btnClearAll") {
    const card = event.target.closest(".card");
    const cardId = +card.id;
    data.splice(cardId);
    todo.innerHTML = "";
  }
});

//открывается окно при клике на кнопку Edit и закрывается при клике на Close
form.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (ev.target.id ==="btnEdit") {
    myModal.style.display = "block";
  } else if (ev.target.id ==="btnClose") {
    myModal.style.display = "none";
  }
});


