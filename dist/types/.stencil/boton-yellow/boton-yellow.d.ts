import { EventEmitter } from '../../stencil-public-runtime';
export declare class BotonYellow {
    color: 'light-yellow' | 'medium-yellow' | 'dark-yellow' | 'darker-yellow';
    disabled: boolean;
    texto: string;
    /** nombre del icono FA */
    icon: 'save' | null;
    clicked: EventEmitter<void>;
    mouseX: number;
    mouseY: number;
    private handleClick;
    private handleMouseMove;
    /** SVG real en Shadow DOM */
    private renderIcon;
    render(): any;
}
