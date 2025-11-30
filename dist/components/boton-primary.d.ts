import type { Components, JSX } from "../types/components";

interface BotonPrimary extends Components.BotonPrimary, HTMLElement {}
export const BotonPrimary: {
    prototype: BotonPrimary;
    new (): BotonPrimary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
