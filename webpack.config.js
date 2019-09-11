const
    path = require('path'),
    targetPath = 'mealt/www/dist',
    app = {
        entry: './app.js',
        output: {
            path: path.resolve(__dirname, targetPath),
            filename: 'app.js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: '[path][name].[ext]'
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    },
    style = {
        entry: './style.js',
        output: {
            path: path.resolve(__dirname, targetPath),
            filename: 'style.js',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    };

module.exports = [app, style];