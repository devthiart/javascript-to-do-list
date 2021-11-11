import { carregaTarefa } from './carregaTarefa.js';
import BotaoConcluir from './concluirTarefa.js';
import BotaoDeletar from './deletarTarefa.js';

/* See more about data-attributes: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes */
const listaTarefas = document.querySelector('[data-list]');
const inputNovaTarefa = document.querySelector('[data-form-input]');
const calendario = document.querySelector('[data-form-date]');

export const handleNovoItem = event => {
  event.preventDefault();
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

  const valor = inputNovaTarefa.value;

  const data = moment(calendario.value);
  const horario = data.format('HH:mm');
  const dataFormatada = data.format('DD/MM/YYYY');
  const concluida = false;

  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida
  }

  const tarefasAtualizadas = [...tarefas, dados];

  const novaTarefa = Tarefa(dados);

  listaTarefas.appendChild(novaTarefa);

  /* See more: https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API */
  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

  inputNovaTarefa.value = " ";

  carregaTarefa();
}

export const Tarefa = ({ valor, horario, concluida }, id) => {
  const novaTarefa = document.createElement('li');
  
  const conteudo = `<p class="content">${horario} * ${valor}</p>`;
  if( concluida ) {
    novaTarefa.classList.add('done');
  }
  novaTarefa.classList.add('task');
  
  novaTarefa.innerHTML = conteudo;

  novaTarefa.appendChild(BotaoConcluir(carregaTarefa, id));
  novaTarefa.appendChild(BotaoDeletar(carregaTarefa, id));
  
  return novaTarefa;
}