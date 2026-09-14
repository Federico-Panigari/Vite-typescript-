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
let tasks : Todo[]= []

const input = document.querySelector<HTMLInputElement>("#nuovaTask")!
const bottone = document.querySelector<HTMLButtonElement>("#aggiungi")!
const lista = document.querySelector<HTMLUListElement>("#lista")!

// Evento click
bottone.addEventListener("click", () => {

  const testo = input.value

  const nuovaTodo: Todo = {
    testo: testo
  }

  tasks.push(nuovaTodo)

  lista.innerHTML += `<li>${nuovaTodo.testo}</li>`

  input.value = ""
})

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

`

