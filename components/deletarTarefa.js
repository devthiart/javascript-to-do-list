const deletarTarefa = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

  tarefasCadastradas.splice(id, 1);

  localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
  atualiza();
}

const BotaoDeletar = (atualiza, id) => {
  const botaoDeletar = document.createElement('button');

  botaoDeletar.classList.add('delete-button');
  botaoDeletar.innerText = 'deletar';
  botaoDeletar.addEventListener('click', () => deletarTarefa(atualiza, id));

  return botaoDeletar;
}

export default BotaoDeletar;