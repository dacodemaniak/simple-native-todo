/**
 * button-group.js
 *  Handle button group ui feature
 */
export class ButtonGroup {
    constructor() {
        /**
         * @var boolean
         * Determine open or closed status
         */
        this.isExpanded = false;
    }

    init() {
        // Try to get menu-trigger object
        const buttonGroups = document.querySelectorAll('.menu-trigger');
        console.log(`${buttonGroups.length} button groups`);
    }

}