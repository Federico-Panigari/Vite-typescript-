import './style.css'
import { somma } from './matematica.ts'
import type { user } from './user.ts'
import type { Todo } from './todo.ts'



//calcolatrice e user
somma(5,3)

const utente: user= {
  nome: "Federico",
  eta: 19
}


//Todo
type Filtro ="tutte" | "attive" | "completate";


let todos : Todo[]= []

let filtroCorrente: Filtro ="tutte"

const input = document.querySelector<HTMLInputElement>("#todo-input")!
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn")!
const list = document.querySelector<HTMLULListElement>("#todo-list")!

// Evento click
addBtn.addEventListener("click", () => {
  const testo = input.value.trim();
  if (testo === "") return;

  const nuova: Todo = {
    id: Date.now(),
    testo,
    completata: false,
  };

  todos.push(nuova);
  input.value = "";
  salva();
  renderTodos();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});


//evento render lista
function renderTodos() {
  list.innerHTML = "";

  const daMostrare = todos.filter((t) => {
    if (filtroCorrente === "attive") return !t.completata;
    if (filtroCorrente === "completate") return t.completata;
    return true;
  });

  for (const todo of daMostrare) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completata;
    checkbox.addEventListener("change", () => {
      todo.completata = checkbox.checked;
      salva();
      renderTodos();
    });

    const span = document.createElement("span");
    span.textContent = todo.testo;
    if (todo.completata) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";
    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      salva();
      renderTodos();
    });

    li.append(checkbox, span, deleteBtn);
    list.appendChild(li);
  }
} 


document.querySelector("#filter-all")!.addEventListener("click", () => {
  filtroCorrente = "tutte";
  renderTodos();
});

document.querySelector("#filter-active")!.addEventListener("click", () => {
  filtroCorrente = "attive";
  renderTodos();
});

document.querySelector("#filter-done")!.addEventListener("click", () => {
  filtroCorrente = "completate";
  renderTodos();
});


function salva() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function carica() {
  const salvati = localStorage.getItem("todos");
  if (salvati) {
    todos = JSON.parse(salvati) as Todo[];
  }
}

carica();
renderTodos();

/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>calcolatrice</h1>

 <br><br/>

<h1>To-Do-List</h1>

    <form>
      <label for="nuovaTask">nuova task</label>
      <input type="string" id="nuovaTask" name="nuovaTask"> 
    </form> 
    </br>
    <button id="bottone">Aggiungi</button> 

    <ul id="${lista}">
    
    </ul>

`*/

