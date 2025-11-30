'use strict';

var index = require('./index-DyZ1ovXx.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["boton-primary.cjs",[[257,"boton-primary",{"color":[1],"disabled":[4],"texto":[1],"mouseX":[32],"mouseY":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map
