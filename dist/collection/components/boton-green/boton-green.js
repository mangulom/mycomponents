import { h } from "@stencil/core";
export class BotonGreen {
    constructor() {
        this.color = 'green-medium';
        this.disabled = false;
        this.texto = 'Aceptar';
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
    renderIcon() {
        if (this.icon === 'save') {
            return (h("svg", { viewBox: "0 0 448 512", fill: "currentColor" }, h("path", { d: "M433.94 129.94l-83.88-83.88A48 48 0 0 0 316.12 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V163.88a48 48 0 0 0-14.06-33.94zM224 416a64 64 0 1 1 64-64a64 64 0 0 1-64 64zm96-304v64a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h224a16 16 0 0 1 11.31 4.69L316.69 92a16 16 0 0 1 3.31 9z" })));
        }
        return null;
    }
    render() {
        return (h("button", { key: '521c60c50cc060af306312b999d6eabac0d52f88', class: `btn btn-${this.color}`, disabled: this.disabled, onClick: this.handleClick, onMouseMove: this.handleMouseMove, style: {
                '--x': `${this.mouseX}px`,
                '--y': `${this.mouseY}px`
            } }, this.icon ? (h("span", { class: "icon-circle" }, this.renderIcon())) : null, h("span", { key: '2a17e958f77b16ce03f95d898c6e9d7209167f64', class: "btn-text" }, this.texto)));
    }
    static get is() { return "boton-green"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["boton-green.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["boton-green.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'green-light'\r\n    | 'green-medium'\r\n    | 'green-dark'\r\n    | 'green-darker'",
                    "resolved": "\"green-dark\" | \"green-darker\" | \"green-light\" | \"green-medium\"",
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
                "defaultValue": "'green-medium'"
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
                    "text": ""
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
//# sourceMappingURL=boton-green.js.map
