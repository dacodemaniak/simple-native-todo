/**
 * main.js
 *  Entry point of the frontend application
 */
class Main {
    constructor() {
        console.log(`Hello Main class !`);
    }
}

document.addEventListener(
    'DOMContentLoaded', // Document was fully loaded in the browser
    (event) => { // Callback function
        const app = new Main();
    }
);