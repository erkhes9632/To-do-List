const input = document.getElementById("Input");
const button_add = document.getElementById("Button-add");
const All_lists = document.getElementById("All-lists");
const Mid_sentense = document.querySelector("#Mid-sentense");

function add_all() {
  const input_value = input.value;
  const All_list = document.createElement("div");

  Mid_sentense.style = "display:none";

  All_list.innerHTML = `
    <div style="justify-content:space-between;padding:5px;height:30px;display:flex;margin-top:15px;border:solid;border-radius:10px;background-color:darksalmon;">
    <input class="checkbtn" type="checkbox"/><div class="todo_text" style="display:flex;align-items:center;width:200px">${input_value}</div>
    <button class="deletebtn" style="border:solid;border-radius:5px;background-color:indianred">Delete</button></div>`;
  All_lists.appendChild(All_list);
  All_list.classList.add("All-list");

  const deletebtn = All_list.querySelector(".deletebtn");
  deletebtn.addEventListener("click", function () {
    All_lists.removeChild(All_list);
  });

  const checkbtn = All_list.querySelector(".checkbtn");
  const todo_text = All_list.querySelector(".todo_text");
  checkbtn.addEventListener("change", function () {
    checkbtn.checked
      ? (todo_text.style.textDecoration = "line-through")
      : (todo_text.style.textDecoration = "");
  });

  input.value = "";
}

button_add.addEventListener("click", add_all);
addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    add_all();
  }
});
