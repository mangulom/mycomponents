import { Component, Prop, Event, EventEmitter, h, State } from '@stencil/core';

@Component({
  tag: 'boton-primary',
  styleUrl: 'boton-primary.css',
  shadow: true
})
export class BotonPrimary {

  @Prop() color:
    | 'light-blue'
    | 'medium-blue'
    | 'dark-blue'
    | 'darker-blue' = 'medium-blue';

  @Prop() disabled: boolean = false;
  @Prop() texto: string = 'Aceptar';

  /** nombre del icono FA */
  @Prop() icon: 'save' | null = null;

  @Event() clicked!: EventEmitter<void>;

  @State() mouseX: number = 0;
  @State() mouseY: number = 0;

  private handleClick = () => {
    if (!this.disabled) {
      this.clicked.emit();
    }
  };

  private handleMouseMove = (event: MouseEvent) => {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  };

  /** SVG real en Shadow DOM */
  private renderIcon() {
    if (this.icon === 'save') {
      return (
        <svg
          viewBox="0 0 448 512"
          fill="currentColor"
          width="16"
          height="16"
          style={{ display: 'block' }}
        >
          <path d="M433.94 129.94l-83.88-83.88A48 48 0 0 0 316.12 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V163.88a48 48 0 0 0-14.06-33.94zM224 416a64 64 0 1 1 64-64a64 64 0 0 1-64 64zm96-304v64a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h224a16 16 0 0 1 11.31 4.69L316.69 92a16 16 0 0 1 3.31 9z"/>
        </svg>
      );
    }
    return null;
  }

  render() {
    return (
      <button
        class={`btn btn-${this.color}`}
        disabled={this.disabled}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        style={{
          '--x': `${this.mouseX}px`,
          '--y': `${this.mouseY}px`
        }}
      >

        {/* ICONO EN CÍRCULO BLANCO */}
        {this.icon ? (
          <span class="icon-circle">
            {this.renderIcon()}
          </span>
        ) : null}

        {/* TEXTO, envuelto en span para alineación exacta */}
        <span class="btn-text">{this.texto}</span>

      </button>
    );
  }
}
