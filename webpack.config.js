// You can extend default webpack build here. Read more on docs: https://github.com/DivanteLtd/vue-storefront/blob/master/doc/Working%20with%20webpack.md
const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-rtl'),
      require('postcss-flexbugs-fixes'),
      require('autoprefixer')({
        flexbox: 'no-2009'
      })
    ]
  }
};
module.exports = function (config, {isClient, isDev}) {
  if (isDev) config.resolve = wstorm.resolve
  const configLoaders = config.module ? config.module.rules : config.default.module.rules
  configLoaders.push(
    {
      test: /\.css$/,
      use: [
        postcssConfig
      ]
    },
    {
      test: /\.scss$/,
      use: [
        postcssConfig
      ]
    },
    {
      test: /\.sass$/,
      use: [
        postcssConfig
      ]
    }
  )
  return config
}
