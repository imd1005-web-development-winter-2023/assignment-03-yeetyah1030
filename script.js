// getting hmtl elements and storing them in variables
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");
let newItem = document.getElementById("input-item");

// creating an empty array for todo items to be stored
let items = [];

// this function displays todo list items
function displayList() {
  // clearing the html element "todoList"
  todoList.innerHTML = "";
  /* for loop going through each item in the array and creating "li", "span", and
  "deleteBtn" elements inside of it. */
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    // using textContent to set the text inside span and deleteBtn elements
    span.textContent = item;
    deleteBtn.textContent = "x";
    /* deleteBtn event listens for when the user clicks the 'x' button
    and deletes the todo item and displays the list again with the item removed*/
    deleteBtn.addEventListener("click", () => {
      items.splice(i, 1);
      displayList();
  });
    // when span is clicked todo list item will display strikethrough
    span.addEventListener("click", () => {
      span.classList.toggle("strikethrough");
  });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

// adding click event listener onto button
addBtn.addEventListener("click", () => {
  // remove whitespace from both ends of item string
  const item = newItem.value.trim();
  /* if there is a new item, the button pushes it into the items[] array
  and calls the renderList() function to display the new item */
  if (item) {
    items.push(item);
    newItem.value = "";
    displayList();
  }
});

// does the same event as click but when enter is pressed you can add a new todo item
newItem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
  const item = newItem.value.trim();
  if (item) {
    items.push(item);
    newItem.value = "";
    displayList();
  }
}
});

