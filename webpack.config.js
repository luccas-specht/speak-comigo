const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// src/polly.js --mode development --libraryTarget commonjs2 --target web --devtool false -o src/dist/main.js
module.exports = {
  entry: './src/polly.js',
  devtool: false,
  target: 'web',
  devtool: 'inline-source-map', // js lets us know witch bundle part of source code got error
  devServer: {
    static: './dist',
    client: {
      progress: false, // shows the progress in console.log
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Define o diretório de saída
    filename: 'main.js', // Define o nome do arquivo de saída
    libraryTarget: 'commonjs2', // Define o formato do módulo (commonjs2)
    globalObject: 'this', // Define o objeto global para o ambiente web
    clean: true,
  },
  /*
  add when have more than one entrypoint on a single HTML page.
  see more: https://webpack.js.org/guides/development/
  https://bundlers.tooling.report/code-splitting/multi-entry/
  https://webpack.js.org/guides/code-splitting/
  optimization: {
    runtimeChunk: 'single',
  },
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // diretorio onde vai pegar o index para gerar
      title: 'Development',
    }),
  ],
};
