import { handleNovoItem } from "./components/criaTarefa.js";
import { carregaTarefa } from "./components/carregaTarefa.js";

const botaoNovaTarefa = document.querySelector('[data-form-button]');

botaoNovaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();