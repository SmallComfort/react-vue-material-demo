const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    build: './src/index.js',
    vendor: ['react', 'react-dom', 'react-vue']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },

  devServer: {
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules/vue-material'),
          path.resolve(__dirname, 'src'),
        ],
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.vue$/,
        loader: 'react-vue-loader',
        options: {
          vue: './vue.config.js',
          loaders: {
            sass: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.theme$/,
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '/assets/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.vue', '.js']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}