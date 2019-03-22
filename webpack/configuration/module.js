import ExtractTextPlugin from 'extract-text-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

console.log(process.env);

/* export default {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.less$/, // Can be: .scss or .styl or .less
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            // Enables CSS Modules
            modules: true,
            // Number of loaders applied before CSS loader
            importLoaders: 1,
            // Formatting CSS Class name
            localIdentName: '[name]_[local]_[hash:base64]',
            // Enable/disable sourcemaps
            sourceMap: true,
            // Enable/disable minification
            // minimize: true
          }
        },
        {
          loader: 'less-loader'
        }
      ]
    }
  ]
}; */

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }
];

if(isProduction) {
  rules.push({
    test: /\.less/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader?modules=true&localIdentName=[name]_[local]_[hash:base64]',
        'less-loader'
      ]
    })
  })
} else {
  rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          // Enables CSS Modules
          modules: true,
          // Number of loaders applied before CSS loader
          importLoaders: 1,
          // Formatting CSS Class name
          localIdentName: '[name]_[local]_[hash:base64]',
          // Enable/disable sourcemaps
          sourceMap: true,
          // Enable/disable minification
          // minimize: true
        }
      },
      {
        loader: 'less-loader'
      }
    ]
  })
}

export default { rules };
