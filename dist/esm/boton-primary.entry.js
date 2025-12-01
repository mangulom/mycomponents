import { r as registerInstance, c as createEvent, h } from './index-Dnx41rRo.js';

const botonPrimaryCss = ":host{display:inline-block}:host{display:inline-block;--inner-border-light:#ffffff;--inner-border-dark:#0d104d}.btn{position:relative;z-index:2;color:#fff;padding:12px 22px;border-radius:8px;cursor:pointer;transition:transform 0.12s ease;font-size:0.95rem;overflow:hidden;border:2px solid rgba(255,255,255,0.9);font-family:'Poppins', sans-serif}.btn::before{content:\"\";position:absolute;inset:3px;border-radius:6px;border:2px solid;z-index:1;pointer-events:none}.btn::after{content:\"\";position:absolute;top:calc(var(--y) - 40px);left:calc(var(--x) - 40px);width:80px;height:80px;background:radial-gradient(\r\n    circle,\r\n    rgba(255, 255, 255, 0.22),\r\n    rgba(255, 255, 255, 0.02)\r\n  );border-radius:50%;pointer-events:none;transition:top 0.08s ease, left 0.08s ease, opacity 0.15s ease;z-index:0;opacity:0}.btn:hover::after{opacity:1}.btn:hover{transform:translateY(-2px)}.btn-light-blue{background:#009CDE}.btn-medium-blue{background:#0067B8}.btn-dark-blue{background:#003DA5}.btn-darker-blue{background:#00205B}.btn-light-blue::before{border-color:var(--inner-border-dark)}.btn-medium-blue::before{border-color:var(--inner-border-light);}.btn-dark-blue::before,.btn-darker-blue::before{border-color:var(--inner-border-light)}";

const BotonPrimary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clicked = createEvent(this, "clicked");
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
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
        };
    }
    render() {
        return (h("button", { key: '4d95a0dbb9b9706218c55d805957bb915e4d2527', class: `btn btn-${this.color}`, disabled: this.disabled, onClick: this.handleClick, onMouseMove: this.handleMouseMove, style: {
                '--x': `${this.mouseX}px`,
                '--y': `${this.mouseY}px`
            } }, this.texto));
    }
};
BotonPrimary.style = botonPrimaryCss;

export { BotonPrimary as boton_primary };
//# sourceMappingURL=boton-primary.entry.js.map
