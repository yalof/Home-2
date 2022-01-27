'use strict';

// ЗАДАЧИ № 1 and № 2

const getForm = document.getElementsByClassName('friends');
 console.log(getForm);

 const getFriendsLeft = document.getElementsByClassName('friends__left');
 console.log(getFriendsLeft);

 const getFriendsRight = document.getElementsByClassName('friends__right');
 console.log(getFriendsRight);


const arrFriends = [getForm, getFriendsLeft];
arrFriends.push(getFriendsRight);
console.log (arrFriends);


// ЗАДАЧА № 3

const addInput = document.createElement('input');
const addButton = document.createElement('button');
  
addButton.onclick = () => {
    addInput = '';
};


// ЗАДАЧА № 4

const content = addInput.innerHTML;
addInput.innerHTML = '<h1>blablabla</h1>';


 