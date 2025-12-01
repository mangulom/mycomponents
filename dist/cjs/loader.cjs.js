'use strict';

var index = require('./index-Q_CtBSf3.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await index.globalScripts();
  return index.bootstrapLazy([["boton-black.cjs",[[257,"boton-black",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-green.cjs",[[257,"boton-green",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-orange.cjs",[[257,"boton-orange",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-primary.cjs",[[257,"boton-primary",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-purple.cjs",[[257,"boton-purple",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-red.cjs",[[257,"boton-red",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]],["boton-yellow.cjs",[[257,"boton-yellow",{"color":[1],"disabled":[4],"texto":[1],"icon":[1],"mouseX":[32],"mouseY":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map
