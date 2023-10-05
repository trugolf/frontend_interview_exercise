module.exports = {
  chainWebpack(config) {
    // Set up all the aliases we use in our app.
    config.resolve.alias.clear().merge(require("./aliases.config").webpack); // eslint-disable-line

    config.module
      .rule('mjs$')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  },
  publicPath: '/',
  outputDir: './dist/',
  assetsDir: 'assets',
};
