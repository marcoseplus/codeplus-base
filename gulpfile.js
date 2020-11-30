'use strict'

const gulp 			= require('gulp') //Gulp
const sourcemaps 	= require('gulp-sourcemaps') //Mapea codigo SASS para debug no console
const sass 			= require('gulp-sass') //SASS
const autoprefixer 	= require('autoprefixer') //Aplica prefixo de navegadores antigos
const postcss 		= require('gulp-postcss') //PostCSS
const mqpacker 		= require('css-mqpacker') //Unifica todas as @medias da mesma condição em apenas uma
const rename        = require('gulp-rename') // Renomeia arquivos
const browserSync   = require('browser-sync').create() //Synca os arquivos com o browser e faz o proxy reverso dos arquivos
const browserify    = require('browserify') //Converte commonJs para ES
const source        = require('vinyl-source-stream')
const buffer        = require('vinyl-buffer')
const babelify      = require('babelify') //Transpila arquivos js para versões antigas do ES
const glob          = require('glob') //Possibilita o uso da escrita do terminal no browserify
const replace       = require('gulp-replace') //Substitui textos de arquivos
const replaceName   = require('gulp-replace-name') //Substitui nome de arquivos
const clean         = require('gulp-clean') //Deleta diretorios ou arquivos

const config = {
    nickName: 'SEU_NOME',
    accountName: 'SEU_NOME'
}

const paths = {
    dist: {
        dest: '/'
    },
    templates: {
        src: './src/templates/**/*.html',
        dest: './build/templates/',
        init: './src/templates_init/**/*.html',
        dest_init: './src/templates',
    },
    styles: {
        input: './src/styles/*.scss',
        dest: './build/arquivos/',
        src: './src/styles/**/*.scss'
    },
    scripts: {
        input: './src/scripts/main.js',
        dest: './build/arquivos/',
        src: './src/scripts/**/*.js'
    },
    images: {
        src: './src/images/*',
        dest: './build/arquivos/'
    }
}

gulp.task('templateInit', () => {
    return gulp.src(paths.templates.init)
    .pipe(replace('{{loja}}', config.nickName))
    .pipe(replaceName(/loja/g, config.nickName))
    .pipe(gulp.dest(paths.templates.dest_init))
})

gulp.task('clean-templateInit', () => {
    return gulp.src('./src/templates_init')
    .pipe(clean({force: true}))
});

gulp.task('style-dev', function () {
    let processors = [
        autoprefixer,
        mqpacker
    ]
    return gulp.src(paths.styles.input)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(rename(`${config.nickName}-style.css`))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
});


gulp.task('script-dev', function () {
    let testFiles = glob.sync(paths.scripts.input)
    return browserify({
            entries: testFiles
        })
        .transform(babelify.configure({
            presets: ['@babel/env']
        }))
        .bundle()
        .pipe(source(`${config.nickName}-script.js`))
        .pipe(buffer())
        .pipe(gulp.dest(paths.scripts.dest))
})


const watchDev = () => {
	gulp.watch(paths.styles.src, gulp.series('style-dev')).on('change', browserSync.reload)
	gulp.watch(paths.scripts.src, gulp.series('script-dev')).on('change', browserSync.reload)
}

gulp.task('dev', gulp.parallel( 'style-dev', 'script-dev', watchDev));
gulp.task('start', gulp.series( 'templateInit', 'clean-templateInit'));
