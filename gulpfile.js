var gulp = require("gulp"),
    fs = require("fs"),
    path = require("path"),
    url = require("url"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    run = require("run-sequence"),
    browserSync = require('browser-sync').create(),
    gulp_jspm = require("gulp-jspm"),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({ browsers: ['last 2 versions'] }),
    // workflow variables
    dev = false;

// reload
gulp.task('reload', function (done) {
    if (dev) {
        browserSync.reload();
    }
    done();
});

// scripts
gulp.task('scripts', function (done) {
    return run('jspm', 'reload', done);
});

gulp.task("jspm", function () {
    return gulp.src('./src/scripts/bootstrap.ts')
        .pipe(sourcemaps.init())
        .pipe(gulp_jspm({ selfExecutingBundle: true, plugin: true, lowResSourceMaps: true }))
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./dist/assets/js"));
});

gulp.task("vendor", function () {
    return gulp.src(['./node_modules/gsap/src/minified/TweenMax.min.js', './node_modules/pixi.js/bin/pixi.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./dist/assets/js"));
});

// css
gulp.task('css', function (done) {
    return run('less', 'reload', done);
});

gulp.task('less', function (done) {
    return gulp.src('./src/less/app.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/assets/css'));
});

// html
gulp.task('processhtml', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('html', function (done) {
    return run('processhtml', 'reload', done);
});

// data
gulp.task('processdata', function () {
    return gulp.src('src/data/**/*.*')
        .pipe(gulp.dest('./dist/assets/data'))
});

gulp.task('data', function (done) {
    return run('processdata', 'reload', done);
});

//fonts
gulp.task('fonts', function () {
    return gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('./dist/assets/fonts'))
});

//img
gulp.task('processimages', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('./dist/assets/img'))
});

gulp.task('images', function (done) {
    return run('processimages', 'reload', done);
});

// browsersync / server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// watch
gulp.task('watch', function (done) {
    gulp.watch(["./src/scripts/**/*.ts", "./src/scripts/*.ts"], ['scripts']);
    gulp.watch("./src/less/*.less", ['css']);
    gulp.watch("./src/data/**/*.*", ['data']);
    gulp.watch("./src/img/**/*.*", ['images']);
    gulp.watch("./src/*.html", ['html']);
});

// cli
gulp.task('default', function (done) {
    dev = true;
    return run(['scripts', 'vendor', 'css', 'data', 'images', 'html', 'fonts'], 'browser-sync', 'watch', done);
});