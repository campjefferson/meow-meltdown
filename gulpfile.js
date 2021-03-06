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
    autoprefix = new LessPluginAutoPrefix({
        browsers: ['last 2 versions']
    }),
    process = require('child_process').exec,
    argv = require('yargs').argv;
// workflow variables
dev = false,
    controller = false;

// reload
gulp.task('reload', function (done) {
    if (dev) {
        browserSync.reload();
    }
    done();
});

// scripts
gulp.task('scripts:game', function (done) {
    return run('jspm:game', 'reload', done);
});

gulp.task('scripts:controller', function (done) {
    return run('jspm:controller', 'reload', done);
});

gulp.task("jspm:game", function () {
    return gulp.src('./src/scripts/bootstrap-game.ts')
        .pipe(sourcemaps.init())
        .pipe(gulp_jspm({
            selfExecutingBundle: true,
            plugin: true,
            lowResSourceMaps: true
        }))
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./dist/assets/js"));
});

gulp.task("jspm:controller", function () {
    return gulp.src('./src/scripts/bootstrap-controller.ts')
        .pipe(sourcemaps.init())
        .pipe(gulp_jspm({
            selfExecutingBundle: true,
            plugin: true,
            lowResSourceMaps: true
        }))
        .pipe(concat('bundle-controller.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./dist/assets/js"));
});

gulp.task("vendor", function () {
    return gulp.src([
            './src/js/socket.io.js', 
            './node_modules/howler/dist/howler.js',
            './node_modules/gsap/src/minified/TweenMax.min.js', 
            './node_modules/pixi.js/bin/pixi.js']
        )
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
    return gulp.src('src/img/static/*.*')
        .pipe(gulp.dest('./dist/assets/img'))
});

gulp.task('processspritesheets', function () {
    return gulp.src('src/img/spritesheet/output/*.*')
        .pipe(gulp.dest('./dist/assets/img/spritesheet'))
});

gulp.task('images', function (done) {
    return run('processimages', 'reload', done);
});

gulp.task('spritesheets', function (done) {
    return run('processspritesheets', 'reload', done);
});

gulp.task('processsounds', function () {
    return gulp.src('./src/audio/sound/*.{m4a,mp3,ogg,webm}')
        .pipe(gulp.dest('./dist/assets/audio/sound'))
});

gulp.task('processaudiosprites', function () {
    return gulp.src('./src/audio/sprite/*.{json,m4a,mp3,ogg,webm}')
        .pipe(gulp.dest('./dist/assets/audio/sprite'))
});

gulp.task('audiosprite', function (done) {
    var path = argv.s === undefined ? 'sfx' : argv.s;
    return process('audiosprite -f "howler" -c 1 -g 2 -r 44100 -e "m4a,ogg,webm" -b 48 -o src/audio/sprite/' + path + ' src/audio/sprite/' + path + '/*', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
});

gulp.task('audio', function (done) {
    return run('processaudiosprites', 'processsounds', 'reload', done);
})

// browsersync / server
gulp.task('browser-sync', function () {
    browserSync.init({
        port: controller ? 5000 : 3000,
        server: {

            baseDir: "./dist",
            index: controller ? "controller.html" : "index.html"
        }
    });
});

// watch
gulp.task('watch:game', function (done) {
    gulp.watch(["./src/scripts/**/*.ts", "./src/scripts/*.ts"], ['scripts:game']);
    gulp.watch("./src/less/*.less", ['css']);
    gulp.watch("./src/data/**/*.*", ['data']);
    gulp.watch("./src/img/static/*.*", ['images']);
    gulp.watch("./src/img/spritesheet/output/*.json", ['spritesheets']);
    gulp.watch("./src/*.html", ['html']);
});

gulp.task('watch:controller', function (done) {
    gulp.watch(["./src/scripts/**/*.ts", "./src/scripts/*.ts"], ['scripts:controller']);
    gulp.watch("./src/less/*.less", ['css']);
    gulp.watch("./src/data/**/*.*", ['data']);
    gulp.watch("./src/img/static/*.*", ['images']);
    gulp.watch("./src/img/spritesheet/output/*.json", ['spritesheets']);
    gulp.watch("./src/*.html", ['html']);
});

// cli
gulp.task('default', function (done) {
    dev = true;
    return run(['scripts:game', 'vendor', 'css', 'data', 'images', 'spritesheets', 'audio', 'html', 'fonts'], 'browser-sync', 'watch:game', done);
});

gulp.task('dev:game', function (done) {
    dev = true;
    return run(['scripts:game', 'vendor', 'css', 'data', 'images', 'spritesheets', 'audio', 'html', 'fonts'], 'browser-sync', 'watch:game', done);
});

gulp.task('dev:controller', function (done) {
    dev = true;
    controller = true;
    return run(['scripts:controller', 'vendor', 'css', 'data', 'images', 'spritesheets', 'html', 'fonts'], 'browser-sync', 'watch:controller', done);
});

gulp.task('build:controller', function (done) {
    return run(['scripts:controller', 'vendor', 'css', 'data', 'images', 'spritesheets', 'html', 'fonts'], done);
});

gulp.task('build:game', function (done) {
    return run(['scripts:game', 'vendor', 'css', 'data', 'images', 'spritesheets', 'audio', 'html', 'fonts'], done);
});

gulp.task('build:all', function (done) {
    return run(['scripts:game', 'scripts:controller', 'vendor', 'css', 'data', 'images', 'spritesheets', 'audio', 'html', 'fonts'], done);
});