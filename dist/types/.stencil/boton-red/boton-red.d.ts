import { EventEmitter } from '../../stencil-public-runtime';
export declare class BotonPrimary {
    color: 'light-red' | 'medium-red' | 'dark-red' | 'darker-red';
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
