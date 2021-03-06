module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.(css|scss)$/,
          loader: 'style-loader!css-loader?modules',
        },
        {
          test: /\.(png|jpg|svg)$/,
          loader: 'url-loader?limit=8192',
        },
      ],
    },
  },
}
