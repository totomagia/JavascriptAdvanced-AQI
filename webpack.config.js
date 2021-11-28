// Plugin che ci permette di utilizzare un template nel codice sorgente e ottimizzarlo per la versione che andrà online
const HtmlWebpackPlugin = require("html-webpack-plugin")
// Libreria che ci permette di utilizzare le Environment Variables durante lo sviluppo locale
const Dotenv = require('dotenv-webpack')
// Modulo di NodeJS che dà la possibilità di interagire con file e cartelle locali
const path = require('path')


module.exports = (env, argv) => {
  const entryPath = argv.mode === 'development' ? './src/js/index_dev.js' : './src/js/index.js'
  return {
    entry: {
      main: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: './dist',
      open: true
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Air Pollution",
        template: path.resolve(__dirname, './src/index.html'),
      }),
      new Dotenv()
    ]
  }
};