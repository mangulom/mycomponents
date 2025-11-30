import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const botonPrimaryCss = ":host{display:inline-block}:host{--inner-border-light:#ffffff;--inner-border-dark:#0d104d}.btn{position:relative;z-index:2;color:#fff;padding:12px 22px;border-radius:6px;cursor:pointer;transition:transform .12s ease, background .12s ease;font-size:0.95rem;overflow:hidden;border:none}.btn::before{content:\"\";position:absolute;inset:3px;border-radius:6px;z-index:1;pointer-events:none;opacity:1}.btn::after{content:\"\";position:absolute;width:85px;height:85px;background:radial-gradient(\r\n    circle,\r\n    rgba(255, 255, 255, 0.50),\r\n    rgba(255, 255, 255, 0.05)\r\n  );border-radius:50%;top:calc(var(--my) - 45px);left:calc(var(--mx) - 45px);pointer-events:none;z-index:0;transition:opacity .15s ease;opacity:0}.btn:hover::after{opacity:1}.btn:hover{transform:translateY(-2px)}.btn-light-blue{background-color:#add8e6;color:#0d104d}.btn-light-blue::before{border:2px solid var(--inner-border-light)}.btn-medium-blue{background-color:#4682b4}.btn-medium-blue::before{border:2px solid var(--inner-border-dark)}.btn-dark-blue{background-color:#1e90ff}.btn-dark-blue::before{border:2px solid var(--inner-border-dark)}.btn-darker-blue{background-color:#00008b}.btn-darker-blue::before{border:2px solid var(--inner-border-light)}";

const BotonPrimary$1 = /*@__PURE__*/ proxyCustomElement(class BotonPrimary extends HTMLElement {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.clicked = createEvent(this, "clicked", 7);
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
    static get style() { return botonPrimaryCss; }
}, [257, "boton-primary", {
        "color": [1],
        "disabled": [4],
        "texto": [1],
        "mouseX": [32],
        "mouseY": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["boton-primary"];
    components.forEach(tagName => { switch (tagName) {
        case "boton-primary":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BotonPrimary$1);
            }
            break;
    } });
}

const BotonPrimary = BotonPrimary$1;
const defineCustomElement = defineCustomElement$1;

export { BotonPrimary, defineCustomElement };
//# sourceMappingURL=boton-primary.js.map

//# sourceMappingURL=boton-primary.js.map