import { r as registerInstance, a as createEvent, h } from './index-DrWDGzri.js';

const botonBlackCss = ":host{display:inline-block}.btn{--black-light:#555555;--black-medium:#333333;--black-dark:#1a1a1a;--black-darker:#000000;position:relative;z-index:2;color:#fff;height:52px;width:auto;padding:0 24px;border-radius:8px;cursor:pointer;transition:transform 0.12s ease;font-size:0.95rem;overflow:hidden;border:1px solid rgba(0,0,0,0.4);font-family:'Poppins', sans-serif !important;display:inline-flex;align-items:center;justify-content:center;gap:12px;vertical-align:middle;line-height:52px}.btn span,.btn .btn-text{display:flex;align-items:center;line-height:1}.btn::before{content:\"\";position:absolute;inset:3px;border-radius:6px;border:1px solid;z-index:1;pointer-events:none}.btn::after{content:\"\";position:absolute;top:calc(var(--y) - 40px);left:calc(var(--x) - 40px);width:80px;height:80px;background:radial-gradient(circle, rgba(255,255,255,0.22), rgba(255,255,255,0.02));border-radius:50%;pointer-events:none;transition:top 0.08s ease, left 0.08s ease, opacity 0.15s ease;z-index:0;opacity:0}.btn:hover::after{opacity:1}.btn:hover:not(:disabled){filter:brightness(1.07);transform:translateY(-1px)}.btn-black-light{background:var(--black-light);border-color:var(--black-light);color:#fff}.btn-black-medium{background:var(--black-medium);border-color:var(--black-medium);color:#fff}.btn-black-dark{background:var(--black-dark);border-color:var(--black-dark);color:#fff}.btn-black-darker{background:var(--black-darker);border-color:var(--black-darker);color:#fff}.btn:disabled{cursor:not-allowed;opacity:0.5;filter:none}.icon-circle{width:24px;height:24px;border-radius:50%;background:white;color:#333333;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:6px;position:relative;top:0}.icon-circle svg{width:14px;height:14px}button{display:flex;align-items:center;justify-content:center;border:none;background:transparent;padding:0}";

const BotonBlack = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clicked = createEvent(this, "clicked", 7);
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
};
BotonBlack.style = botonBlackCss;

export { BotonBlack as boton_black };
//# sourceMappingURL=boton-black.entry.esm.js.map
