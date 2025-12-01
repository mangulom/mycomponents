import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-DrWDGzri.js';
export { s as setNonce } from './index-DrWDGzri.js';

/*
 Stencil Client Patch Browser v4.38.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["boton-black",[[257,"boton-black",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-green",[[257,"boton-green",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-orange",[[257,"boton-orange",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-primary",[[257,"boton-primary",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-purple",[[257,"boton-purple",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-red",[[257,"boton-red",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-yellow",[[257,"boton-yellow",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]]], options);
});
//# sourceMappingURL=mycomponents.esm.js.map
