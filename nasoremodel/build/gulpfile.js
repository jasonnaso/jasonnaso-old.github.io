var config = {
      sass:         '../assets/sass/',
      js:           '../assets/js/',
      //TEST//
      // html:         '../', 

      destination:  '../assets/css/'
      
};


///////////////////////////////////////
///////////////Required////////////////
///////////////////////////////////////

var gulp = require('gulp'),

    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    include     = require('gulp-include'),
    sass        = require('gulp-ruby-sass'),
    plumber     = require('gulp-plumber'),
    gutil       = require('gulp-util');
    browserSync = require('browser-sync').create();

    //TEST//
    // minifyHTML = require('gulp-minify-html');

    /////////////////////////////////

  // Handle errors and display in CMD without breaking watch
  var gulp_src = gulp.src;
  gulp.src = function() {
    return gulp_src.apply(gulp, arguments)
      .pipe(plumber(function(error) {
        // Output an error message
        gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
        // emit the end event, to properly end the task
        this.emit('end');
      })
    );
  };


  gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost/projects/nasoremodel/"
    });
});

  // Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "/projects/nasoremodel/"
//         }
//     });
// });


///////////////////////////////////////
///////////////Default Task////////////
///////////////////////////////////////
                                            // , 'minify-html'
    gulp.task('default', ['scripts', 'styles', 'browser-sync'], function() {

        gulp.start('watch');
    });

//////////////////////////////////////
///////////////Styles Task////////////
//////////////////////////////////////

    gulp.task('styles', function() {

        return sass(config.sass + '*.scss', {style: 'compressed'})

            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(config.destination))
            .pipe(browserSync.reload({stream:true}));
    });

///////////////////////////////////////
///////////////Scripts Task////////////
///////////////////////////////////////

gulp.task('scripts', function() {

    return gulp.src(config.js + 'scripts.js')//return?

       .pipe(include())
       .pipe(rename({suffix: '.min' }))
       .pipe(uglify())  //take this away if you want to see line numbers for errors...
       .pipe(gulp.dest(config.js));
    
});
/////////////////////////////////////
///////////////Html Task////////////
/////////////////////////////////////




 //TEST//
// gulp.task('minify-html', function() {
//   console.log("hey");
//   var opts = {
//     conditionals: true,
//     spare:true
//   };
 
//   return gulp.src([config.html + '**/*.php', '!assets','!myPhpTestFolder', '!build', '!html'])

//     .pipe(minifyHTML(opts))
//     .pipe(rename({suffix: '.min' }))
//     .pipe(gulp.dest('../html/test/'));
// });

/////////////////////////////////////
///////////////Watch Task////////////
/////////////////////////////////////

// Watch for changes in files
gulp.task('watch', function() {

    // Watch .scss files
   
   gulp.watch(config.sass + '**/*.scss',   ['styles']);

   // Watch .js files

   gulp.watch(config.js + '**/*.js',   ['scripts']);

   // Watch .html files

   // gulp.watch(config.html + '*.php',  ['minify-html']);

});






