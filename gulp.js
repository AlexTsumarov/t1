var gulp = require('gulp');
var scp = require('gulp-scp');
 
gulp.task('default', function () {
    gulp.src('*')
        .pipe(scp({
            host: 'nl-wag-epam01.meteogroup.net',
            user: 'alexandrt',
            password: 'AleTsu2016',
            port: 22,
            path: '~/dir'
        }));
});
