import { h } from "@stencil/core";
export class BotonBlack {
    constructor() {
        this.color = 'black-medium';
        this.disabled = false;
        this.texto = 'Aceptar';
        /** nombre del icono FA */
        this.icon = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.handleClick = () => {
            if (!this.disabled) {
                this.clicked.emit();
            }
        };
        this.handleMouseMove = (event) => {
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
        };
    }
    /** SVG real en Shadow DOM */
    renderIcon() {
        if (this.icon === 'save') {
            return (h("svg", { viewBox: "0 0 448 512", fill: "currentColor", width: "16", height: "16", style: { display: 'block' } }, h("path", { d: "M433.94 129.94l-83.88-83.88A48 48 0 0 0 316.12 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V163.88a48 48 0 0 0-14.06-33.94zM224 416a64 64 0 1 1 64-64a64 64 0 0 1-64 64zm96-304v64a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h224a16 16 0 0 1 11.31 4.69L316.69 92a16 16 0 0 1 3.31 9z" })));
        }
        return null;
    }
    render() {
        return (h("button", { key: '5b5a7649b8a06fbd128d861b12ff6bc720700e01', class: `btn btn-${this.color}`, disabled: this.disabled, onClick: this.handleClick, onMouseMove: this.handleMouseMove, style: {
                '--x': `${this.mouseX}px`,
                '--y': `${this.mouseY}px`
            } }, this.icon ? (h("span", { class: "icon-circle" }, this.renderIcon())) : null, h("span", { key: '71c8fb4193064780385355842ec5eeddc46a0375', class: "btn-text" }, this.texto)));
    }
    static get is() { return "boton-black"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["boton-black.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["boton-black.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'black-light'\r\n    | 'black-medium'\r\n    | 'black-dark'\r\n    | 'black-darker'",
                    "resolved": "\"black-dark\" | \"black-darker\" | \"black-light\" | \"black-medium\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'black-medium'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "texto": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "texto",
                "defaultValue": "'Aceptar'"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'save' | null",
                    "resolved": "\"save\" | null",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "nombre del icono FA"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "mouseX": {},
            "mouseY": {}
        };
    }
    static get events() {
        return [{
                "method": "clicked",
                "name": "clicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=boton-black.js.map
