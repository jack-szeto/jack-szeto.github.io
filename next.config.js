/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    styledComponent: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development"
    },
    images: {
        disableStaticImages: true
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
