import path                           from 'path';
import Webpack                        from 'webpack';

import CleanWebpackPlugin             from 'clean-webpack-plugin';
import ExtractTextPlugin              from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin              from 'html-webpack-plugin';

const defaultEnv = {
    dev: true,
    production: false,
};

export default (env = defaultEnv) => ({
    entry: [
        ...env.dev ? [
            'react-hot-loader/patch',
        ] : [],
        path.join(__dirname, 'src/index.jsx'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        ...env.dev ? [
            // Development ONLY plugins
            new Webpack.HotModuleReplacementPlugin(),
        ] : [
            // Production ONLY Plugins
            new CleanWebpackPlugin(['dist']),
            new Webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true,
            })
        ],
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loader: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                [
                                    'es2015',
                                    { modules: false }
                                ],
                                'react',
                            ],
                            plugins: ['react-hot-loader/babel'],
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.mp3$/,
                loader: "url-loader?mimetype=audio/mpeg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
        ]
    },
    devServer: {
        hot: env.dev,
        hotOnly: true,
        overlay: true,
    },
});
