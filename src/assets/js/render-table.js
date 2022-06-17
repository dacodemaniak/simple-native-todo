import { TemplateHelper } from './helpers/template-helper.js';
import { TodoService } from './services/todo-service.js';

export class RenderTable {
    constructor() {
        this.service = new TodoService();
    }

    render() {
        const todos = this.service.findAll();

        if (todos.length) {
            todos.forEach((todo) => {
                this.addRow(todo);
            });
        }
    }

    addRow(todo) {
        // Cloner le contenu du template
        const clone = new TemplateHelper().read('todo-row');

        // Lister les td du clone
        const columns = clone.querySelectorAll('td');

        // Changer l'ID du checkbox de la première colonne
        const checkbox = columns[0].querySelector('input[type="checkbox"]');
        const checkboxId = 'todo-' + todo.id;
        checkbox.setAttribute('id', checkboxId);

        // Change le contenu de la seconde colonne : titre
        columns[1].textContent = todo.title;
        columns[2].textContent = todo.date.getDate() + '-' + todo.date.getMonth() + '-' + todo.date.getFullYear();

        // Je dois raccrocher le clone complet au tableau (dans tbody)
        document.querySelector('table tbody').appendChild(clone);
    }
}