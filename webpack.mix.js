let mix = require('laravel-mix');

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

mix.autoload({
        jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"]})
   .js('resources/assets/js/app.js', 'public/js')
   .extract(['lodash', 'axios', 'vue', 'jquery', 'bootstrap-sass'])
   .sass('resources/assets/sass/app.scss', 'public/css');
