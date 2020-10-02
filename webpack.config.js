//Webpack es una herramienta que nos ayuda a compilar multiples archivos(Js,HTML,CSS,imagenes) en uno solo(o a veces un poco más) que tendrá todo nuestro código listo para producción.
//Instalación de Webpack: npm i webpack webpack-cli html-webpack-plugin html-loader --save-dev

// path es un módulo de node
const path = require('path');
//Instanciar el plugin que instalé
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//creamos un nuevo módulo que vamos a exportar con la configuración
//el resolve que nos va a permite detectar el directorio en donde estamos y le pasamos de segundo parámetro un directorio en el cuál vamos a guardar los archivos.
//test con esa expreg es para identificar los archivos de js y jsx y el otro test para identificar archivos html
//Dentro de los loader tienen que haber loaders previamente instalados en el test de css con esa expreg identifica los archivos css o scss(sass)
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
};

//Después de esta mondá, vamos al package.json para crear el script que va a compilar el proyecto "build"; "webpack--mode production". cuando corramos ese script nos crea la carpeta dist con el bundle con el archivo bundle que tiene todo el proyecto compilado y el html que es una copia del index y añade la linea del script

//Después, para probar lo que estamos construyendo vamos a construir un entorno de desarrollo local para ver los cambios en tiempo real .npm i webpack-dev-server --save-dev. Después de instalarlo, vamos a package para hacerse su script

//Después de toda esta monda le instaló mini-css-extract-plugin el cual permite extraer el css del bundle para poder crear un nuevo archivo de css. despues el css-loader y añadió la compatibilidad con sas con node-sass sass-loader
