/* @flow */

import * as fs from 'fs';
import builtinModules from 'builtin-modules';
import { parseParcel } from '@njakob/parcel';
import { hulk } from '@njakob/hulk';
import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupBabel from 'rollup-plugin-babel';
import rollupJSON from 'rollup-plugin-json';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const parcel = parseParcel(pkg);
const external = parcel.dependencies
  .map(dependency => dependency.name.fullName)
  .concat(builtinModules)
  ;

const commitHash = (() => {
  try {
    return fs.readFileSync('.commithash', 'utf-8').trim();
  } catch (err) {
    return 'unknown';
  }
})();

const banner = hulk({
  commitHash,
  name: parcel.name.name,
  version: parcel.version,
  repository: parcel.homepage,
});

export default {
  entry: 'src/index.js',
  sourceMap: true,
  moduleName: 'cli-utils',
  banner,
  external,

  plugins: [
    rollupNodeResolve({
      jsnext: true
    }),
    rollupJSON(),
    rollupBabel({
      babelrc: true,
    }),
  ],

  targets: [
    { dest: 'lib/cli-utils.js', format: 'cjs' },
    { dest: 'lib/cli-utils.es.js', format: 'es' },
  ]
};
