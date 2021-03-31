'use strict';
const path = require('path'); // usando o modulo path. Quando estiver usando o EPS6 é mas vantajoso usar o const ao invés de var ou let

module.exports = { // Exportar objeto
 entry: path.join(__dirname, 'src','index'), // Arquivo de entrada, usamos o path.join para juntar os valores (dirname,src e index) para funcionar em qualquer sistemas operacional
 output: {
   path: path.join(__dirname, 'dist'), //  tbm usamos path.join  e depois gera o bundle no diretorio dist
   filename: 'bundle.js', // arquivo de saida
   publicPath: '/static/', //Local onde o webpack-dev-server vai ficar assistindo nosso arquivo de desenvolvimento, ou seja, ele não gera um arquivo fisico e sim um arquivo virtual em memoria
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  }
  
   
}

