// Delete and Completed 
const ul = document.getElementById("list-item");
ul.addEventListener('click', function (e) {
    if (e.target.classList.contains("delete")) {
        const li = e.target.closest("li");
        li.remove();
    }
    if (e.target.classList.contains("completed")) {
        const li = e.target.closest("li");
        const div = li.children[2];
        div.innerHTML = `
        <span class="hover:cursor-pointer delete bg-red-500 px-2 py-1 rounded-lg hover:bg-red-700 text-white">delete</span>
        <button class=" bg-stone-300 rounded-lg py-1  px-2" disabled>Completed</button>`;
    }
});
let counter = 1;
// Add todo
const addTodo = document.forms['addTodo'];
addTodo.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = addTodo.querySelector("input");
    if (input.value === "") {
        alert("you must enter a text")
    } else {
        const inputToUpperCase = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        ul.innerHTML += ` <li class="hover:bg-stone-100 p-3 items-center sm:text-sm font-bold flex">
                    <span class="pr-2 pt-1 text-md">${counter++}</span>
                    <span id="todo" class="no-scrollbar overflow-x-scroll pt-1 w-full">${inputToUpperCase}</span>
                        <div id="function" class="flex flex-none space-x-2">
                            <span class="hover:cursor-pointer delete bg-red-500 px-2 py-1 rounded-lg hover:bg-red-700 text-white">delete</span>
                            <span class="hover:cursor-pointer completed bg-green-500 px-2 py-1 rounded-lg hover:bg-green-700 text-white">Completed</span>
                        </div>
                </li>`
        input.value = '';
    }
});

// Search todos
const searchTodo = document.forms["searchTodos"];
const searchInput = searchTodo.querySelector("input");
const todos = document.querySelectorAll("li");
searchTodo.addEventListener("keyup", function (e) {
    const searchText = searchInput.value.toLowerCase();
    const todoTex = document.querySelectorAll("#todo");
    todoTex.forEach(function (todo) {
        const todoText = todo.textContent.toLowerCase();
        if (todoText.includes(searchText)) {
            todo.parentElement.style.display = "flex";
        }
        else {
            todo.parentElement.style.display = "none";
        }
    })
})