"use strict";
let input = document.querySelector(".message"),
    btn = document.querySelector(".add"),
    list = document.getElementById("list_todo");



let arr = [];


btn.addEventListener("click", function(params) {
    let newTodo = {
        todo: input.value,
        checked: false,
    };
    input.value = "";

    arr.push(newTodo);
    displayMassege();
});



function displayMassege() {
    let displayMasseges = "";
    arr.forEach(function(item, i) {
        displayMasseges += `
        <li>
            <hr>
            <input type="checkbox" id="item_${i}"}>

            <label for="item_${i}">${item.todo}</label>
    
        </li>

        `;

    });

    list.innerHTML = displayMasseges;
}