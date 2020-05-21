module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)

  let cfg = ['@babel/preset-env', { bugfixes: true }]
  if (process.env.NODE_ENV === 'test') {
    cfg = [
      '@babel/preset-env',
      {
        targets: {
          node: 8,
        },
      },
    ]
  }
  return {
    presets: [cfg],
    plugins: [
      [
        '@babel/plugin-transform-typescript',
        {
          allExtensions: true,
          allowDeclareFields: true,
          onlyRemoveTypeImports: true,
        },
      ],
    ],
    ignore:
      process.env.NODE_ENV !== 'test'
        ? [
            'src/test.js',
            'src/test.tsx',
            'src/__tests__/*.js',
            'src/__tests__/*.tsx',
            'src/__fixtures__/**/*.js',
            'src/__fixtures__/**/*.tsx',
          ]
        : [],
  }
}
