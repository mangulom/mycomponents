import type { Components, JSX } from "../types/components";

interface BotonBlack extends Components.BotonBlack, HTMLElement {}
export const BotonBlack: {
    prototype: BotonBlack;
    new (): BotonBlack;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
