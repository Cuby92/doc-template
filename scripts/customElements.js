// Divider configuration
const dividerConfig = {
    tagName: 'doc-divider', // Name of the HTML tag, e.g. you can change from <doc-divider></doc-divider> to <d-d></d-d>. Note that custom HTML elements have to have colon(-) in the name.

    // Defaults configuratiom
    defaultColor: 'black',  // Default color if not specified in attributes
    defaultSize: 'medium',  // Default size if not specified in attributes

    // Sizes configuration
    sizes: {
        small: {
            length: '15mm',
            thickness: '1pt',
            opacity: 0.6,
            topMargin: '-5mm',
            bottomMargin: '3mm'
        },
        medium: {
            length: '80mm',
            thickness: '1pt',
            opacity: 0.7,
            topMargin: '-5mm',
            bottomMargin: '5mm'
        },
        large: {
            length: '100mm',
            thickness: '2pt',
            opacity: 1,
            topMargin: '-10mm',
            bottomMargin: '7mm'
        }
    }
}

// noSplit element configuration
const noSplitConfig = {
    tagName: 'no-split'
}

// Centering container configuration
const centerConfig = {
    tagName: 'center-content'
}


class Divider extends HTMLElement {
    static get observedAttributes() {
        return ['color', 'size'];
    }
    
    constructor() {
        super();
    }

    applyAttributes() {
        const size = this.getAttribute('size') || dividerConfig.defaultSize;
        const color = this.getAttribute('color') || dividerConfig.defaultColor;

        switch(size) {
            case 'small':
                this.style.setProperty('height', dividerConfig.sizes.small.thickness, 'important');
                this.style.setProperty('width', dividerConfig.sizes.small.length, 'important');
                this.style.setProperty('opacity', dividerConfig.sizes.small.opacity, 'important');
                this.style.setProperty('margin', `${dividerConfig.sizes.small.topMargin} 0 ${dividerConfig.sizes.small.bottomMargin} 0`)
                break;
            case 'medium':
                this.style.setProperty('height', dividerConfig.sizes.medium.thickness, 'important');
                this.style.setProperty('width', dividerConfig.sizes.medium.length, 'important');
                this.style.setProperty('opacity', dividerConfig.sizes.medium.opacity, 'important');
                this.style.setProperty('margin', `${dividerConfig.sizes.medium.topMargin} 0 ${dividerConfig.sizes.medium.bottomMargin} 0`)
                break;
            case 'large':
                this.style.setProperty('height', dividerConfig.sizes.large.thickness, 'important');
                this.style.setProperty('width', dividerConfig.sizes.large.length, 'important');
                this.style.setProperty('opacity', dividerConfig.sizes.large.opacity, 'important');
                this.style.setProperty('margin', `${dividerConfig.sizes.large.topMargin} 0 ${dividerConfig.sizes.large.bottomMargin} 0`)
                break;
            default: 
                this.style.setProperty('size', size, 'important');
                this.style.setProperty('display', 'block', 'important');
                break;
        }
        this.style.setProperty('background-color', color, 'important');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.applyAttributes();
    }

    connectedCallback() {
        this.applyAttributes();
        this.render();
    }

    render() {
        this.style.display = 'block';
        this.innerHTML = '';
    }
}

customElements.define(dividerConfig.tagName, Divider);


class NoSplit extends HTMLElement {  
    constructor() {
        super();
    }

    connectedCallback() {
        this.style.setProperty('page-break-inside', 'avoid')
    }
}

customElements.define(noSplitConfig.tagName, NoSplit);


class Center extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.style.setProperty('width', '100%');
        this.style.setProperty('display', 'flex');
        this.style.setProperty('justify-content', 'center');
        this.style.setProperty('align-items', 'center');
    }
}

customElements.define(centerConfig.tagName, Center);