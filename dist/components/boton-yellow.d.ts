import type { Components, JSX } from "../types/components";

interface BotonYellow extends Components.BotonYellow, HTMLElement {}
export const BotonYellow: {
    prototype: BotonYellow;
    new (): BotonYellow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
