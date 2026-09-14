import './style.css'
import { somma } from './matematica.ts'
import type { user } from './user.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>calcolatrice</h1>

`
somma(5,3)

const utente: user= {
  nome: "Federico",
  eta: 19
}

console.log(utente.eta)
