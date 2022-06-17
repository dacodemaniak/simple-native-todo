import { ButtonGroup } from "./button-group.js";
/**
 * main.js
 *  Entry point of the frontend application
 */
class Main {
    constructor() {
        
    }

    uiHandler() {
        const buttonGroup = new ButtonGroup();
        buttonGroup.init();
    }
}

document.addEventListener(
    'DOMContentLoaded', // Document was fully loaded in the browser
    (event) => { // Callback function
        const app = new Main();
        app.uiHandler();

        // Déclenche un timeout qui masquera la div .outerbox
        setTimeout(
            () => {
                const outerBox = document.querySelector('div.outer-box');
                const classList = outerBox.classList;
                classList.add('animate__animated');
                classList.add('animate__zoomOutDown');
            }, // Handler la fonction qui s'exécute quand le compte à rebours est expiré
            2500
        )
    }
);