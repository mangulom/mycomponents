import { b as bootstrapLazy } from './index-Dnx41rRo.js';
export { s as setNonce } from './index-Dnx41rRo.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["boton-primary",[[257,"boton-primary",{"color":[1],"disabled":[4],"texto":[1],"mouseX":[32],"mouseY":[32]}]]]], options);
};

export { defineCustomElements };
//# sourceMappingURL=loader.js.map
