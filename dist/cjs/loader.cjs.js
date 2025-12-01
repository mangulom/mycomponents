'use strict';

var index = require('./index-D8Z8g-ZY.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["boton-green.cjs",[[257,"boton-green",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-primary.cjs",[[257,"boton-primary",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-red.cjs",[[257,"boton-red",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map
