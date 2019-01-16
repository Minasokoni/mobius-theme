/* eslint-disable */

const { src, dest, task, watch } = require( 'gulp' )
const sass = require( 'gulp-sass' )
const postcss = require( 'gulp-postcss' )
const cssnano = require( 'gulp-cssnano' )
const autoprefixer = require( 'autoprefixer' )

function build() {
  return src( 'src/*.scss' )
    .pipe( sass() )
    .pipe( postcss( [ autoprefixer() ] ) )
    .pipe( cssnano() )
    .pipe( dest( './lib' ) )
}

function watchCSS() {
  return watch( 'src/**/*.scss', build )
}

task( build )
task( watchCSS )
