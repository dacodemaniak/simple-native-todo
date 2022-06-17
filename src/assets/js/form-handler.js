export class FormHandler {
    constructor() {
        this.formFields = new Map();

        this.formFields
            .set(
                'todo-title',
                {
                    required: true
                }
            )
            .set(
                'todo-detail',
                {
                    required: false
                }
            )
            .set(
                'todo-date',
                {
                    required: true
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
            }
        )
    }

    checkForm(event) {
        let isChecked = true;

        const button = document.getElementById('submit-button');
        // Boucler sur un map
        this.formFields.forEach((value, key) => {
            if (value.required) {
                const field = document.getElementById(key);
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