export class TodoRepository {
    nextId() {
        // Lire la clé "todos" dans LocalStorage
        const todosAsString = localStorage.getItem('todos');
        if (todosAsString === null) {
            return 1;
        } else {
            const todos = JSON.parse(todosAsString);
            return todos.sort((todo1, todo2) => todo2._id - todo1._id)[0]._id + 1;
        }
    }

    add(todo) {
        const todosAsString = localStorage.getItem('todos');
        if (todosAsString === null) {
            const newTodos = [];
            newTodos.push(todo);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        } else {
            const todos = JSON.parse(todosAsString);
            todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }
}