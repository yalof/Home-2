"use strict";

const form = document.querySelector("#form");
const todo = document.querySelector("#todo");
const inputText = document.querySelector("#inputText");
const btnSubmit = document.querySelector("#btnSubmit");
const btnClearAll = document.querySelector("#btnClearAll");
const modal = document.querySelector("#modal");
const inputmodal = document.querySelector("#inputModal");
const btnModalSubmit = document.querySelector(".btnModalSubmit");
const btnExit = document.querySelector(".btnExit");

let data = [];

function getBtn(btn) {
  btn.innerHTML = ""; //очищение содержимого блока чтобы не дублировались новые задачи по неск раз

  data.forEach((task) => {
    btn.innerHTML += `                          
    <div class='${task.done ? "card card_done" : "card"}' id=${task.id}> 
    ${task.title}
    <button class='btnDelete'> <strong> Delete </strong> </button>
    <button class='btnDone'> <strong> Done </strong> </button>
    <button class='btnEdit'> <strong> Edit </strong> </button>
    </div>
    `;
  });
}

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault(); //перезагрузка отменяется. отменяет действие браузера по умолчанию

  data.push({
    title: inputText.value,
    done: false,
    id: Date.now(),
  });

  getBtn(todo);

  form.reset(); //очищает инпут
});

btnClearAll.addEventListener("click", (event) => {
  event.preventDefault();
  data = [];
  todo.innerHTML = "";
});

todo.addEventListener("click", (event) => {
  //ниже для проверки чтобы только для кнопки работало
  if (event.target.classList.contains("btnDelete")) {
    const card = event.target.closest(".card"); //находит род.элемент,ближ. с классом кард
    const cardId = +card.id; //ищем по айди элемент // + чтобы добавлялись значения вниз, а не переписывались заново
    const cardIndexInData = data.findIndex((task) => task.id === cardId);
    data.splice(cardIndexInData, 1);

    getBtn(todo);
  }

  if (event.target.classList.contains("btnDone")) {
    const card = event.target.closest(".card");
    const cardId = +card.id;
    const cardIndexInData = data.findIndex((task) => task.id === cardId);
    data[cardIndexInData].done = !data[cardIndexInData].done;

    getBtn(todo);
  }

  if (event.target.classList.contains("btnEdit")) {
    modal.classList.toggle("visible");
    let title = card.querySelector(".title");
    const info = title.textContent;
    const inputmodal = querySelector("#inputModal");
    inputmodal.value = info;
    modal.classList.add("visible"); //для видимого модального окна
    const cardId = +card.id;
    const cardIndexInData = data.findIndex((task) => task.id === cardId);
    const el = data[cardIndexInData];
  }
});

const closeModal = () => {
  btnExit.addEventListener("click", (event) => {
    modal.classList.remove("visible");
    getBtn(todo);
  });
  closeModal();
};

// const edit = () => {
//   btnModalSubmit.addEventListener("click", (event) => {
//     event.preventDefault();
//     let newTitle = info;
//     let el = data[cardIndexInData];
//     el.title = newTitle;
//     data.splice(cardIndexInData, 1, el);
//     closeModal();
//     getBtn();
//   });
//   edit(cardIndexInData);
// };

const edit = (event) => {
  let newTitle = inputModal.value;
  let title = card.querySelector(".title");
  const cardIndexInData = data.findIndex((task) => task.id === cardId);
  let el = data[cardIndexInData];
  el.title = newTitle;
  //let el = data[0];
  data.splice(cardIndexInData, 1, el);
  console.log(el);
  console.log(inputModal.value);
  closeModal();
  getBtn(todo);
};
edit();
//btnModalSubmit.removeEventListener("click", edit);
btnModalSubmit.addEventListener("click", edit);
