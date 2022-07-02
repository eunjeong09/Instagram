module.exports = {
  // publicPath : 'https://github.com/junjunwon/MyPofolgram.git',
  // outputDir: "docs",
  // 빌드 관련 추가
  publicPath: process.env === 'production' ? '/mypofolgram-front/' : '/',
  outputDir: 'docs',
  indexPath: "../static/index.html",
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules', './src/assets'],
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // target : 'https://myportfoliogram.herokuapp.com/',
        ws: true,
        changeOrigin: true
      }
    },
    // disableHostCheck: true,
    port: 8079
  }
}
