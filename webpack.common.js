const path = require('path');
const Dotenv = require('dotenv-webpack');

const defaultInclude = path.resolve(__dirname, 'src')

module.exports = {
    // mode: 'development',
    entry: './src/js/index.js',
    // TODO: Explain Source Map
    // devtool: 'inline-source-map',
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                include: defaultInclude,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env', {
                                targets: {
                                    esmodules: true
                                }
                            }],
                            '@babel/preset-react']
                    }
                }
            },
            {
                test: [/\.s[ac]ss$/i, /\.css$/i],
                include: defaultInclude,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [new Dotenv()],
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
};