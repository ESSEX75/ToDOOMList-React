const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    devServer: {
        port: 4100,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]',
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(svg|png|gif|jpg)$/,
                exclude: /fonts/,
                loader: 'file-loader',
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: 'file-loader',
            },
        ],
    },
    /* Attempt to resolve these extensions in order.
       If multiple files share the same name but have
       different extensions, webpack will resolve the
       one with the extension listed first in the
       array and skip the rest.
     */
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
}

//Посмотреть что такое
//publicPath: '/'
//historyApiFallback: true,

// Оформление кода
//npm install --save-dev --save-exact prettier

//@types/node @types/webpack bundle-loader file-loader html-webpack-plugin ts-loader typescript webpack webpack-cli webpack-dev-server
// @types/react @types/react-dom @types/styled-components react react-dom styled-components
