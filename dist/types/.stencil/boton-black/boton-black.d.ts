import { EventEmitter } from '../../stencil-public-runtime';
export declare class BotonBlack {
    color: 'light-black' | 'medium-black' | 'dark-black' | 'darker-black';
    disabled: boolean;
    texto: string;
    /** nombre del icono FA */
    icon: 'save' | 'new' | 'edit' | 'delete' | 'pdf' | 'excel' | 'view' | 'search' | 'filter' | 'undo' | null;
    clicked: EventEmitter<void>;
    mouseX: number;
    mouseY: number;
    private handleClick;
    private handleMouseMove;
    private renderIcon;
    render(): any;
}
