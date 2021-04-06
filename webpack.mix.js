const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.react('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

require('laravel-mix-polyfill');

const TargetsPlugin = require('targets-webpack-plugin')
mix.webpackConfig({
    plugins: [
        new TargetsPlugin({
            browsers: ['last 2 versions', 'chrome >= 41', 'IE 11'],
        }),
    ],
});

mix.browserSync({
    files: [
        'resources/**/*',
        'app/**/*',
        'config/**/*',
        'routes/**/*',
        'public/**/*'
    ],
    proxy: 'http://localhost:8000',
})
    .react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .polyfill({
        enabled: true,
        debug: true,
        corejs: 3,
        useBuiltIns: "usage",
        targets: {"firefox": "50", "ie": 11}
    });

if (mix.inProduction()) {
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        }
    });
}
mix.version();
