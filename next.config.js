const debug = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: function () {
        return {
            '/': {
                page: '/'
            }
        }
    },
    assetPrefix: ! debug ? '/' : '',
    reactStrictMode: true,
    styledComponent: true,
    images: {
        loader: 'akamai',
        path: '',
        domains: ['picsum.photos']
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/sounds/',
                    outputPath: 'static/sounds/',
                    name: '[name].[ext]',
                    esModule: false
                }
            }
        });

        return config
    }
}

module.exports = nextConfig
