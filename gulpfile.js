var gulp = require('gulp');
var scp = require('gulp-scp2');
 
console.log('-----------------DEBUG-----------------');
gulp.task('default', function() {
  return gulp.src('**')
  .pipe(scp({
    host: 'nl-wag-epam01.meteogroup.net',
    username: 'alexandrt',
    password: 'AleTsu2016',
    dest: '/home/alexandrt/'
  }))
  .on('error', function(err) {
    console.log('-----------------SOME ERROR OCCUR-----------------');
    console.log(err);
  });
})
