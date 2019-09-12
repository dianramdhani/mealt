const
    path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
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
                    test: /\.(png|jp(e*)g)$/,
                    loader: 'url-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [] })
        ]
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