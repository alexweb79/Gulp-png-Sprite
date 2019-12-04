const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');



function sprites() {
    var spriteData = gulp.src('src/icons/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('build/assets/styles/'));
};

gulp.task('default', gulp.series(
    gulp.parallel(sprites)
));
