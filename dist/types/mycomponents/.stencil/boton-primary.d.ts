import { EventEmitter } from '../../stencil-public-runtime';
export declare class BotonPrimary {
    color: 'light-blue' | 'medium-blue' | 'dark-blue' | 'darker-blue';
    disabled: boolean;
    texto: string;
    clicked: EventEmitter<void>;
    mouseX: number;
    mouseY: number;
    private handleClick;
    private handleMouseMove;
    render(): any;
}
