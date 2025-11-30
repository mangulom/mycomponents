import { h } from "@stencil/core";
export class BotonPrimary {
    constructor() {
        this.color = 'medium-blue';
        this.disabled = false;
        this.texto = 'Aceptar';
        this.mouseX = 0;
        this.mouseY = 0;
        this.handleClick = () => {
            if (!this.disabled) {
                this.clicked.emit();
            }
        };
        this.handleMouseMove = (event) => {
            const rect = event.target.getBoundingClientRect();
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
        };
    }
    render() {
        return (h("button", { key: 'c6bea8eff6700064cc97aeeeccd9a91a2506a61e', class: `btn btn-${this.color}`, disabled: this.disabled, onClick: this.handleClick, onMouseMove: this.handleMouseMove, style: {
                '--mx': `${this.mouseX}px`,
                '--my': `${this.mouseY}px`
            } }, this.texto));
    }
    static get is() { return "boton-primary"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["boton-primary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["boton-primary.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'light-blue'\r\n    | 'medium-blue'\r\n    | 'dark-blue'\r\n    | 'darker-blue'",
                    "resolved": "\"dark-blue\" | \"darker-blue\" | \"light-blue\" | \"medium-blue\"",
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
                "defaultValue": "'medium-blue'"
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
//# sourceMappingURL=boton-primary.js.map
