const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// src/polly.js --mode development --libraryTarget commonjs2 --target web --devtool false -o src/dist/main.js
module.exports = {
  entry: './src/polly.js',
  //devtool: 'inline-source-map', // js lets us know witch bundle part of source code got error
  mode: 'development',
  devtool: false,
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), // Define o diretório de saída
    filename: 'main.js', // Define o nome do arquivo de saída
    libraryTarget: 'commonjs2', // Define o formato do módulo (commonjs2)
    globalObject: 'this', // Define o objeto global para o ambiente web
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
};
