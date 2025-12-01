'use strict';

var index = require('./index-D8Z8g-ZY.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.38.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('mycomponents.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["boton-green.cjs",[[257,"boton-green",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-primary.cjs",[[257,"boton-primary",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-red.cjs",[[257,"boton-red",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=mycomponents.cjs.js.map
