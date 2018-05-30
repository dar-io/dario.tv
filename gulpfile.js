// gulpfile.js

// Define variables.
var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var cleancss     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var del          = require('del');
var ghPages      = require('gulp-gh-pages');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var imagemin     = require('gulp-imagemin');
var notify       = require('gulp-notify');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var run          = require('gulp-run');
var runSequence  = require('run-sequence');
var sass         = require('gulp-ruby-sass');
var uglify       = require('gulp-uglify');
var svgmin       = require('gulp-svgmin');
// Include paths file.
var paths = require('./_assets/gulp_config/paths');

// Processes SCSS.
gulp.task('build:styles', function() {
    // Compile SCSS, run autoprefixer, and minify CSS.
    return sass(paths.sassFiles + '/main.scss', {
        style: 'compressed',
        trace: true,
        loadPath: [paths.sassFiles]
    }).pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(cleancss())
        .pipe(gulp.dest(paths.jekyllCssFiles))
        .pipe(gulp.dest(paths.siteCssFiles))
        .pipe(browserSync.stream())
        .on('error', gutil.log);
});

// Deletes CSS.
gulp.task('clean:styles', function(callback) {
    del([paths.jekyllCssFiles + '/main.css',
        paths.siteCssFiles + '/main.css'
    ]);
    callback();
});

// Processes JS.
gulp.task('build:scripts', function() {
    // Concatenates and uglifies global JS files and outputs result to the
    // appropriate location.
    return gulp.src([
        paths.jsFiles + '/global/lib' + paths.jsPattern,
        paths.jsFiles + '/global/*.js'
    ])
        .pipe(concat('/scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles));
});

// Deletes processed JS.
gulp.task('clean:scripts', function(callback) {
    del([paths.jekyllJsFiles + '/scripts.min.js', paths.siteJsFiles + '/scripts.min.js']);
    callback();
});

// Optimizes and copies image files.
gulp.task('build:images', function() {
    return gulp.src('_assets/img/**/*')
        // .pipe(imagemin())
        .pipe(gulp.dest(paths.jekyllImageFiles))
        .pipe(gulp.dest(paths.siteImageFiles))
        .pipe(browserSync.stream());
});

// Deletes processed images.
gulp.task('clean:images', function(callback) {
    del([paths.jekyllImageFiles, paths.siteImageFiles]);
    callback();
});

// Optimizes and copies image files.
gulp.task('build:prototypes', function() {
    return gulp.src('_assets/prototypes/**/*')
        // .pipe(imagemin())
        .pipe(gulp.dest('assets/prototypes'))
        .pipe(gulp.dest('_site/assets/prototypes'))
        .pipe(browserSync.stream());
});

// Deletes prototypes.
gulp.task('clean:prototypes', function(callback) {
    del(['assets/prototypes', '_site/assets/prototypes']);
    callback();
});

// Optimizes and copies image files.
gulp.task('build:svg', function() {
    return gulp.src('_assets/svg/**/*')
        // .pipe(svgmin())
        .pipe(gulp.dest('assets/svg'))
        .pipe(gulp.dest('_site/assets/svg'))
        .pipe(browserSync.stream());
});
// Deletes SVG.
gulp.task('clean:svg', function(callback) {
    del(['assets/svg', '_site/assets/svg']);
    callback();
});


// Optimizes and copies image files.
gulp.task('build:lottie', function() {
    return gulp.src('_assets/lottie/**/*')
        // .pipe(svgmin())
        .pipe(gulp.dest('assets/lottie'))
        .pipe(gulp.dest('_site/assets/lottie'))
        .pipe(browserSync.stream());
});
// Deletes SVG.
gulp.task('clean:lottie', function(callback) {
    del(['assets/lottie', '_site/assets/lottie']);
    callback();
});


// Runs jekyll build command.
gulp.task('build:jekyll', function() {
    var shellCommand = 'bundle exec jekyll build --config _config.yml';

    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log);
});

// Deletes the entire _site directory.
gulp.task('clean:jekyll', function(callback) {
    del(['_site']);
    callback();
});

// Main clean task.
// Deletes _site directory and processed assets.
gulp.task('clean', ['clean:jekyll',
    'clean:images',
    'clean:prototypes',
    'clean:svg',
    'clean:lottie',
    'clean:scripts',
    'clean:styles']);

// Builds site anew.
gulp.task('build', function(callback) {
    runSequence('clean',
        ['build:scripts', 'build:images', 'build:prototypes', 'build:svg',  'build:lottie', 'build:styles'],
        'build:jekyll',
        callback);
});

// Builds site anew using local config.
gulp.task('build:local', function(callback) {
    runSequence('clean',
        'build:jekyll:local',
        ['build:scripts', 'build:images', 'build:prototypes', 'build:svg',  'build:lottie', 'build:styles'],
        callback);
});

// Default Task: builds site.
gulp.task('default', ['build']);

// Runs jekyll build command using local config.
gulp.task('build:jekyll:local', function() {
    var shellCommand = 'bundle exec jekyll build --config _config.yml';

    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log);
});

// Special tasks for building and then reloading BrowserSync.
gulp.task('build:jekyll:watch', ['build:jekyll:local'], function(callback) {
    browserSync.reload();
    callback();
});

gulp.task('build:scripts:watch', ['build:scripts'], function(callback) {
    browserSync.reload();
    callback();
});

// Static Server + watching files.
// Note: passing anything besides hard-coded literal paths with globs doesn't
// seem to work with gulp.watch().
gulp.task('serve', ['build:local'], function() {

    browserSync.init({
        server: paths.siteDir,
        ghostMode: false, // Toggle to mirror clicks, reloads etc. (performance)
        logFileChanges: true,
        logLevel: 'debug',
        open: true        // Toggle to automatically open page when starting.
    });

    // Watch site settings.
    gulp.watch(['_config.yml'], ['build:jekyll:watch']);

    // Watch .scss files; changes are piped to browserSync.
    gulp.watch('_assets/styles/**/*.scss', ['build:styles']);

    // Watch .js files.
    gulp.watch('_assets/js/**/*.js', ['build:scripts:watch']);

    // Watch image files; changes are piped to browserSync.
    gulp.watch('_assets/img/**/*', ['build:images']);

    // Watch prototypes files; changes are piped to browserSync.
    gulp.watch('_assets/prototypes/**/*', ['build:prototypes']);

    // Watch svg files; changes are piped to browserSync.
    gulp.watch('_assets/svg/**/*', ['build:svg']);

    // Watch for lottie files; changes are piped to browserSync.
    gulp.watch('_assets/lottie/**/*', ['build:lottie']);

    // Watch posts.
    gulp.watch('_posts/**/*.+(md|markdown|MD)', ['build:jekyll:watch']);

    // Watch html and markdown files.
    gulp.watch(['**/*.+(html|md|markdown|MD)', '!_site/**/*.*'], ['build:jekyll:watch']);
});

// Updates Ruby gems
gulp.task('update:bundle', function() {
    return gulp.src('')
        .pipe(run('bundle install'))
        .pipe(run('bundle update'))
        .pipe(notify({ message: 'Bundle Update Complete' }))
        .on('error', gutil.log);
});

gulp.task('deploy', function () {

  return gulp
    .src(`_site/**/*`)
    .pipe(ghPages());
});
