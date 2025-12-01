import { EventEmitter } from '../../stencil-public-runtime';
export declare class BotonGreen {
    color: 'green-light' | 'green-medium' | 'green-dark' | 'green-darker';
    disabled: boolean;
    texto: string;
    icon: 'save' | null;
    clicked: EventEmitter<void>;
    mouseX: number;
    mouseY: number;
    private handleClick;
    private handleMouseMove;
    private renderIcon;
    render(): any;
}
