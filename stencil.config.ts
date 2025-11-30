import { Config } from '@stencil/core';

export const config: Config = {
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

