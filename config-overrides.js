/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'babel-plugin-root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ]),
);
