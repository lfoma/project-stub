'use strict';

var Config = require('bem-config');
var bem = require('@bem/gulp');
var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var clone = require('gulp-clone');
var debug = require('gulp-debug');
var co = require('co');
var toArray = require('stream-to-array');

// css
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssUrl = require('postcss-url');
var csso = require('gulp-csso');

// js
var merge = require('merge2');
var uglify = require('gulp-uglify');

// bh
var bhEngine = require('@bem/gulp-bh')({'jsAttrName': 'data-bem', 'jsAttrScheme': 'json'});

var thru = require('through2');

// bemhtml
var bemxjst = require('gulp-bem-xjst');

var config = Config();
var projectPlz = config.get().then(function(conf) {
    return bem({ bemconfig: conf.levels });
});
var bundlePlz = projectPlz.then(function(project) {
    return project.bundle({
        path: 'desktop.bundles/index',
        decl: 'index.bemjson.js'
    });
});

var isProd = process.env.YENV === 'production';

function skip() {
    return thru.obj();
}

gulp.task('css', () => co(function*() {
    let bundle = yield bundlePlz;

    yield toArray(bundle.src({
        tech: 'css',
        extensions: ['.css', '.styl']
    })
    .pipe(stylus())
    .pipe(postcss([
        autoprefixer({
            browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
        }),
        postcssUrl({
            url: function(url, decl, from) {
                return path.relative(
                    path.resolve(process.cwd(), bundle.path()),
                    path.resolve(from, url)
                );
            }
        })
    ]))
    .pipe(isProd ? csso() : skip())
    .pipe(concat(bundle.name() + '.min.css'))
    .pipe(gulp.dest(bundle.path())));
}));

gulp.task('js', () => co(function*() {
    let bundle = yield bundlePlz;

    yield toArray(merge(
        gulp.src(require.resolve('ym')),
        bundle.src({
            tech: 'js',
            extensions: ['.js', '.vanilla.js', '.browser.js']
        })
    )
    .pipe(isProd ? uglify() : skip())
    .pipe(concat(bundle.name() + '.min.js'))
    .pipe(gulp.dest(bundle.path())));
}));

gulp.task('html', () => co(function*() {
    let bundle = yield bundlePlz;

    var tmpl = bundle.src({ tech: 'bemhtml.js', extensions: ['.bemhtml.js', '.bemhtml'] })
        .pipe(thru.obj(function(file, enc, cb) {
            if (path.basename(file.path) === 'i-bem.bemhtml') {
                return cb(null);
            }
            cb(null, file);
        }))
        .pipe(concat(bundle.name()))
        .pipe(bemxjst.bemhtml());

    yield toArray(bundle.bemjson()
        .pipe(bemxjst.toHtml(tmpl))
        .pipe(gulp.dest(bundle.path()))
        .pipe(debug()));
}));

gulp.task('default', gulp.parallel('css', 'js', 'html'));
