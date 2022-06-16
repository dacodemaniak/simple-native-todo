export class ButtonGroupHandler {
    constructor(buttonGroup) {
        this.buttonGroup = buttonGroup;
    }
    init() {
        this.buttonGroup.addEventListener(
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
    }
}