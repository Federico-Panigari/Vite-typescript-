import type Atleta  from "./types";
import { eliminaAtleta, getAtletiVisibili, impostaInSquadra } from "./state";

const container = document.querySelector<HTMLDivElement>("#atleti-list")!;

function creaCard(atleta: Atleta): HTMLElement {
  // TODO: crea un <div class="card"> che contiene:
  //   - <img> con src = atleta.foto e alt = atleta.nome
  //   - <h3> con il nome
  //   - <p> con la disciplina
  //   - una checkbox "In squadra" (al change -> impostaInSquadra + renderAtleti)
  //   - un pulsante "Elimina" (al click -> eliminaAtleta + renderAtleti)
  // Se l'atleta e' in squadra, aggiungi la classe "in-squadra" alla card.
const card = document.createElement("div");
    card.className = "card";

    // Se l'atleta è in squadra aggiungo la classe
    if (atleta.inSquadra) {
        card.classList.add("in-squadra");
    }

    // Immagine
    const img = document.createElement("img");
    img.src = atleta.foto;
    img.alt = atleta.nome;

    // Nome
    const h3 = document.createElement("h3");
    h3.textContent = atleta.nome;

    // Disciplina
    const p = document.createElement("p");
    p.textContent = atleta.disciplina;

    // Checkbox "In squadra"
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = atleta.inSquadra;

    checkbox.addEventListener("change", () => {
        impostaInSquadra(atleta.id, checkbox.checked);
        renderAtleti();
    });

    const label = document.createElement("label");
    label.textContent = " In squadra";
    label.prepend(checkbox);

    // Pulsante "Elimina"
    const button = document.createElement("button");
    button.textContent = "Elimina";

    button.addEventListener("click", () => {
        eliminaAtleta(atleta.id);
        renderAtleti();
    });

    // Inserisco gli elementi nella card
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(label);
    card.appendChild(button);

    return card;
}

export function renderAtleti(): void {
  // TODO: svuota il container e aggiungi una card per ogni atleta visibile.
  container.innerHTML ="";
  for (const atleta of getAtletiVisibili()){
    container.appendChild(creaCard(atleta))
  }

}
