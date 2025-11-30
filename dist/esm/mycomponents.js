import { p as promiseResolve, b as bootstrapLazy } from './index-Dnx41rRo.js';
export { s as setNonce } from './index-Dnx41rRo.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.38.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["boton-primary",[[257,"boton-primary",{"color":[1],"disabled":[4],"texto":[1],"mouseX":[32],"mouseY":[32]}]]]], options);
});
//# sourceMappingURL=mycomponents.js.map
