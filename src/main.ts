import './style.css'
import { somma } from './matematica.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>calcolatrice</h1>

`
somma(5,3)


