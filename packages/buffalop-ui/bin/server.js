#!/usr/bin/env node --experimental-json-modules --no-warnings

import { serve } from 'esbuild';
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin';
import pkg from '../package.json' assert { type: 'json' }; // -- experiment json module

serve(
  {
    port: 3000,
    servedir: './public',
  },
  {
    entryPoints: ['./src/index.tsx'],
    outdir: './public/build',
    minify: false,
    bundle: true,
    target: 'es2015',
    loader: {
      '.json': 'json',
      '.ts': 'ts',
      '.tsx': 'tsx',
      '.scss': 'css',
    },
    color: true,
    define: { __VERSION__: JSON.stringify(pkg.version) },
    sourcemap: true,
    plugins: [
      // sassPlugin(),
      sassPlugin({
        filter: /.module.(s[ac]ss|css)$/,
        transform: postcssModules({
          //   // ...put here the options for postcss-modules: https://github.com/madyankin/postcss-modules
        }),
      }),
    ],
  },
).then((result) => {
  console.log('- Refresh browser for changes ...');
});
