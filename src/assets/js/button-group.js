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
        const buttonGroups = document.querySelectorAll('a.menu-trigger, button.menu-trigger');

        // Sets event handler to each button group
        buttonGroups.forEach((buttonGroup) => {
            buttonGroup.addEventListener(
                'click',
                (event) => {
                    // Get next ul following the item clicked (sibling element)
                    const childNodes = [...event.target.parentNode.childNodes]
                        .filter((childNode) => childNode.tagName === 'UL');
                    
                    const optionsList = childNodes[0];
                    const expandedValue = optionsList.getAttribute('data-expanded');
                    if (expandedValue === 'true') {
                        optionsList.setAttribute('data-expanded', false);
                        optionsList.style.display = 'none';
                        event.target.setAttribute('data-expanded', false);
                    } else {
                        optionsList.setAttribute('data-expanded', true);
                        optionsList.style.display = 'block';
                        event.target.setAttribute('data-expanded', true);
                    }
                }
            )
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