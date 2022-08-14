const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack configuration
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    // inject CSS to page
                    { loader: 'style-loader' },
                    // translate CSS into CommonJS modules
                    { loader: 'css-loader' },
                    // run PostCSS actions
                    { 
                        loader: 'postcss-loader',
                        options: {
                            // for postcss version less than 7.x
                            postcssOptions: {
                                plugins: function () {
                                    return [require('autoprefixer')];
                                }
                            }
                        } 
                    },
                    // compile Sass to CSS
                    { loader: 'sass-loader' }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html'
        }),
    ],
}