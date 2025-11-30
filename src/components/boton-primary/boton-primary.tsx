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

  @Event() clicked!: EventEmitter<void>;

  @State() mouseX: number = 0;
  @State() mouseY: number = 0;

  private handleClick = () => {
    if (!this.disabled) {
      this.clicked.emit();
    }
  };

  private handleMouseMove = (event: MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  };

  render() {
    return (
      <button
        class={`btn btn-${this.color}`}
        disabled={this.disabled}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        style={{
          '--mx': `${this.mouseX}px`,
          '--my': `${this.mouseY}px`
        }}
      >
        {this.texto}
      </button>
    );
  }
}
