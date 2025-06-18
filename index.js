const input = document.getElementById("Input");
const button_add = document.getElementById("Button-add");
const All_lists = document.getElementById("All");

function add_all() {
  const input_value = input.value;
  const All_list = document.createElement("div");
  All_list.innerHTML = `
    <div style="display:flex">
      <input type="checkbox" />
      <div>${input_value}</div>
      <button>Delete</button>
    </div>
  `;
  All_lists.appendChild(All_list);
  All_list.classList.add("All");
}
button_add.addEventListener("click", add_all);
