import type { Filtro } from "./types";
import { aggiungiAtleta, impostaFiltro } from "./state";
import { renderAtleti } from "./render";

const nomeInput = document.querySelector<HTMLInputElement>("#atleta-nome")!;
const disciplinaInput = document.querySelector<HTMLInputElement>("#atleta-disciplina")!;
const fotoInput = document.querySelector<HTMLInputElement>("#atleta-foto")!;
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn")!;

// main.ts NON deve contenere logica sui dati:
// solo eventi e chiamate alle funzioni degli altri file.

// TODO: al click su "Aggiungi":
//   1. leggi i tre campi (con trim)
//   2. se nome o foto sono vuoti, esci
//   3. chiama aggiungiAtleta(...)
//   4. svuota i campi
//   5. chiama renderAtleti()

// TODO: collega i tre pulsanti filtro (#filter-all, #filter-squadra, #filter-riserve)
// a impostaFiltro(...) seguito da renderAtleti().
// Suggerimento: una funzione helper evita di ripetere lo stesso codice tre volte.

// Primo render all'apertura della pagina

// Aggiungi atleta
addBtn.addEventListener("click", () => {
    const nome = nomeInput.value.trim();
    const disciplina = disciplinaInput.value.trim();
    const foto = fotoInput.value.trim();

    // Se nome o foto sono vuoti, esco
    if (nome === "" || foto === "") {
        return;
    }

    aggiungiAtleta(nome, disciplina, foto);

    // Svuoto i campi
    nomeInput.value = "";
    disciplinaInput.value = "";
    fotoInput.value = "";

    renderAtleti();
});

// Funzione helper per i filtri
function cambiaFiltro(filtro: Filtro) {
    impostaFiltro(filtro);
    renderAtleti();
}

// Pulsanti filtro
document.querySelector<HTMLButtonElement>("#filter-all")!
    .addEventListener("click", () => {
        cambiaFiltro("tutti");
    });

document.querySelector<HTMLButtonElement>("#filter-squadra")!
    .addEventListener("click", () => {
        cambiaFiltro("inSquadra");
    });

document.querySelector<HTMLButtonElement>("#filter-riserve")!
    .addEventListener("click", () => {
        cambiaFiltro("riserve");
    });

// Primo render all'apertura della pagina
renderAtleti();

