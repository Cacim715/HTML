const tarefas = [];

const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

function renderizarTarefas() {
  listaTarefas.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;

    checkbox.addEventListener('change', () => {
      tarefa.status = checkbox.checked;
      renderizarTarefas();
    });

    const texto = document.createElement('span');
    texto.textContent = tarefa.descricao;

    if (tarefa.status) {
      texto.classList.add('concluida');
    }

    li.appendChild(checkbox);
    li.appendChild(texto);

    listaTarefas.appendChild(li);
  });
}

adicionarBtn.addEventListener('click', () => {
  const descricao = tarefaInput.value.trim();

  if (descricao !== '') {
    tarefas.push({
      descricao: descricao,
      status: false
    });

    tarefaInput.value = '';
    renderizarTarefas();
  }
});