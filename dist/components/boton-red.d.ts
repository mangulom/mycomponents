import type { Components, JSX } from "../types/components";

interface BotonRed extends Components.BotonRed, HTMLElement {}
export const BotonRed: {
    prototype: BotonRed;
    new (): BotonRed;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
