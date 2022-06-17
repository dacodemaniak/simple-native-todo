import { TodoModel } from "./models/todo-model.js";

export class FormHandler {
    constructor() {
        this.formFields = new Map();

        this.formFields
            .set(
                'todo-title',
                {
                    required: true,
                    property: 'title',
                    value: null
                }
            )
            .set(
                'todo-detail',
                {
                    required: false,
                    property: 'detail',
                    value: null
                }
            )
            .set(
                'todo-date',
                {
                    required: true,
                    property: 'date',
                    value: null
                }
            );
    }

    init() {
        const todoForm = document.getElementById('todo-form');
        todoForm.addEventListener(
            'change',
            (event) => {
                this.checkForm(event)
            }
        );
        todoForm.addEventListener(
            'keyup',
            (event) => {
                this.checkForm(event)
            }
        );

        todoForm.addEventListener(
            'submit',
            (event) => {
                event.preventDefault(); // Empêche les données du formulaire de partir vers le serveur
                const todo = new TodoModel();
                this.formFields.forEach((field, key) => {
                    todo[field.property] = field.value;

                });
                // Effacer les champs du formulaire
                this.formFields.forEach((field, key) => {
                    field.value = '';
                    document.getElementById(key).value = '';
                });
                document.getElementById('submit-button').setAttribute('disabled', true);
            }
        )
    }

    checkForm(event) {
        let isChecked = true;

        const button = document.getElementById('submit-button');
        // Boucler sur un map
        this.formFields.forEach((fieldObject, key) => {
            const field = document.getElementById(key);

            // Range la valeur saisie dans l'attribut du champ dans le Map
            fieldObject.value = field.value.trim();

            if (fieldObject.required) {
                
                if (field.value.trim() === '') {
                    isChecked = false;
                }
            }
        });

        if (isChecked) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', true);
        }
        
    }
}