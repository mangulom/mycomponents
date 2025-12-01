import { EventEmitter } from '../../stencil-public-runtime';
export declare class BotonOrange {
    color: 'orange-ligth' | 'orange-medium' | 'orange-dark' | 'orange-darker';
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
