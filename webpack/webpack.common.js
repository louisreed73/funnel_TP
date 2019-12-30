const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        bundle: './src/assets/js/index.js'
    //    home: './src/assets/js/home.js',


    },
    output: {
        filename: "assets/js/[name].js",
        chunkFilename: "assets/js/[name]-shared.js"
    },
    module: {
        rules: [
            /* {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=100000"
            }, */
             /* {
                test: /\.(svg|gif|png|jpe?g)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src',
                    publicPath: "/"
                }
            },  */
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: (url, resourcePath) => {
                                // resourcePath - path to css file

                                // Don't handle `img.png` urls
                                if (url.includes('.svg')
                                 || url.includes('.png')
                                 || url.includes('.jpg')
                                 || url.includes('.woff')
                                 || url.includes('.woff2')
                                 ) {
                                    return false;
                                }

                                return true;
                            }

                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env", {


                                    useBuiltIns: "usage"
                                }
                            ]
                        ],
                        plugins: [
                            [
                                '@babel/plugin-proposal-pipeline-operator', {
                                    proposal: "minimal"
                                }
                            ]
                        ]
                    }
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", template: "./src/index.html",
            // inject:true,
            chunks: ["bundle"]
        }),

/*        new HtmlWebpackPlugin({
            filename: "home.html", template: "./src/home.html",
            // inject:true,
            chunks: ["home"]
        }), */
       
        new CopyPlugin([
            { 
                context:'TELEPIZZA_TUNNEL_00',
                from: '../src/assets/imgs/',
                 to: 'assets/imgs/' 
                },
                { 
                    context:'TELEPIZZA_TUNNEL_00',
                    from: '../src/assets/fonts/',
                     to: 'assets/fonts/' 
                    }
          ]),



        new MiniCssExtractPlugin({filename: "assets/css/[name].css"})

    ]
}
