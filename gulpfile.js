const gulp = require('gulp');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');



function styles() {
    return gulp.src(['./src/styles/app.scss'])
    .pipe(sass())
    .pipe(gulp.dest('build/assets/styles/'));
}

function sprites() {
    var spriteData = gulp.src('src/icons/**/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      cssFormat: 'scss',
      padding: 5
    }));
    spriteData.css.pipe(gulp.dest('src/styles/common/abstracts/'));
    spriteData.img.pipe(gulp.dest('build/assets/styles/'));
    return spriteData; 
}

gulp.task('default', gulp.series(
    gulp.parallel(styles, sprites)
));
