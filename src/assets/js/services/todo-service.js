import { TodoRepository } from "../repositories/todo-repository.js";

export class TodoService {
    constructor() {
        this.repository = new TodoRepository(); // Injection de dépendance
    }

    findAll() {}
    
    add(todo) {
        todo.id = this.repository.nextId();
        console.log(`Service says : ${JSON.stringify(todo)}`);
        this.repository.add(todo);
    }

    update(todo) {}

    remove(todo) {}
}