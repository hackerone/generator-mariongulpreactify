/*
  Run all build tasks.
*/

var gulp = require('gulp');

gulp.task('build', ['browserify', 'copy-bower-files', 'copy-less', 'copy-images', 'copy-fonts', 'copy-html']);
