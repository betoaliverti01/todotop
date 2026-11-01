/**
 * TodoTop - Task Widget Logic
 * Estilo retrô, sem frameworks, com persistência via LocalStorage.
 */

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    const pendingCountEl = document.getElementById('pendingCount');
    const completedCountEl = document.getElementById('completedCount');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');

    // Estado da aplicação
    let tasks = JSON.parse(localStorage.getItem('todotop_tasks')) || [];

    /**
     * Salva as tarefas no LocalStorage do navegador.
     */
    function saveTasks() {
        localStorage.setItem('todotop_tasks', JSON.stringify(tasks));
        updateStats();
    }

    /**
     * Atualiza os contadores no rodapé.
     */
    function updateStats() {
        const pending = tasks.filter(t => !t.completed).length;
        const completed = tasks.filter(t => t.completed).length;
        pendingCountEl.textContent = pending;
        completedCountEl.textContent = completed;

        // Mostra/oculta estado vazio
        if (tasks.length === 0) {
            emptyState.classList.remove('hidden');
            emptyState.classList.add('flex');
        } else {
            emptyState.classList.add('hidden');
            emptyState.classList.remove('flex');
        }
    }

    /**
     * Renderiza a lista de tarefas na tela.
     */
    function renderTasks() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `task-item flex items-center justify-between p-3 border-2 border-[#5B534D] bg-white rounded-sm shadow-sm ${task.completed ? 'task-completed' : ''}`;

            li.innerHTML = `
                <div class="flex items-center gap-3 overflow-hidden">
                    <input type="checkbox" ${task.completed ? 'checked' : ''}
                           class="w-5 h-5 accent-[#5B534D] cursor-pointer"
                           onchange="toggleTask(${index})">
                    <span class="task-text font-mono text-[#5B534D] truncate ${task.completed ? 'opacity-60' : ''}">${task.text}</span>
                </div>
                <button onclick="removeTask(${index})"
                        class="ml-2 p-1 bg-[#D98C7C] border-2 border-[#5B534D] text-[#5B534D] font-bold hover:bg-[#C57A6B] transition-colors text-[10px]">
                    REMOVER
                </button>
            `;
            taskList.appendChild(li);
        });

        updateStats();
    }

    /**
     * Adiciona uma nova tarefa.
     */
    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;

        tasks.push({
            text: text,
            completed: false,
            id: Date.now()
        });

        taskInput.value = '';
        saveTasks();
        renderTasks();
    }

    // Tornamos as funções globais para que os atributos onchange/onclick do HTML as encontrem
    window.toggleTask = (index) => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    };

    window.removeTask = (index) => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    // Eventos
    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    clearCompletedBtn.addEventListener('click', () => {
        tasks = tasks.filter(t => !t.completed);
        saveTasks();
        renderTasks();
    });

    // Inicialização
    renderTasks();
});
