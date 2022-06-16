import { ButtonGroupHandler } from "./button-group-handler.js";

/**
 * button-group.js
 *  Handle button group ui feature
 */
export class ButtonGroup {
    constructor() {}

    init() {
        // Try to get menu-trigger object
        const buttonGroups = document.querySelectorAll('a.menu-trigger, button.menu-trigger');

        // Sets event handler to each button group
        buttonGroups.forEach((buttonGroup) => {
            new ButtonGroupHandler(buttonGroup).init();
        });

        /**
        for (let i = 0; i < buttonGroups.length; i++) {
            // Do your stuff here
        }

        for (const buttonGroup of buttonGroups) {
            // Do your stuff here
        }
        */
    }

}