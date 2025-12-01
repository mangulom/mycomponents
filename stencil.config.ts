import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'assets/css/all.min.css',
  namespace: 'mycomponents',
  bundles: [],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader'
    },
    {
      type: 'dist-custom-elements'
    }
  ]
};

