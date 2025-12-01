import type { Components, JSX } from "../types/components";

interface BotonGreen extends Components.BotonGreen, HTMLElement {}
export const BotonGreen: {
    prototype: BotonGreen;
    new (): BotonGreen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
