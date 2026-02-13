class Divider extends HTMLElement {
    static get observedAttributes() {
        return ['color', 'size'];
    }
    
    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'color') {
        this.style.backgroundColor = newValue || 'black';
        }  else {
            this.style.backgroundColor = 'black';
        }
        if (name === 'size') {
            switch(newValue) {
                case 'small':
                    this.style.height = '1pt';
                    this.style.width = '15mm';
                    this.style.opacity = '0.7';
                    break;
                case 'medium':
                    this.style.height = '1pt';
                    this.style.width = '70mm';
                    this.style.opacity = '1';
                    break;
                case 'large':
                    this.style.height = '2pt';
                    this.style.width = '100mm';
                    this.style.opacity = '1';
                    break;
                default: 
                    this.style.height = newValue;
                    break;
            }
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.style.display = 'block';
        this.innerHTML = '';
    }
}

customElements.define('doc-divider', Divider);