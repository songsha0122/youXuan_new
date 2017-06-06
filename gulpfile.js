// var gulp = require("gulp");
д�����Ƶ�����
// gulp.task("copytosever",function(){
	// gulp.src(["*.php","*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/1701xiangmu"));
// });

// gulp.task("copytoseverjs",function(){
	// gulp.src(["js/*.js"]).pipe(gulp.dest("D:/phpStudy/WWW/1701xiangmu/js"));
// });

// gulp.task("watch",function(){
	// gulp.watch(["*.php","*.html"],["copytosever"]);
	// gulp.watch(["js/*.js"],["copytoseverjs"]);
// });

var gulp = require("gulp");
//var sass = require("gulp-sass");
//写个复制的任务
gulp.task("copytosever",function(){
	gulp.src(["*.php","*.html","*.sass"]).pipe(gulp.dest("D:/phpStudy/WWW/lianxi/youXuan_new/youXuan_new"));
});

gulp.task("copytoseverjs",function(){
	gulp.src(["js/*.js"]).pipe(gulp.dest("D:/phpStudy/WWW/lianxi/youXuan_new/youXuan_new"));
});
gulp.task("copytosevercss",function(){
	gulp.src(["css/*.css"]).pipe(gulp.dest("D:/phpStudy/WWW/lianxi/youXuan_new/youXuan_new"));
});
gulp.task("copytoseverimg",function(){
	gulp.src(["img/*.img"]).pipe(gulp.dest("D:/phpStudy/WWW/lianxi/youXuan_new/youXuan_new"));
});
gulp.task("watch",function(){
	gulp.watch(["*.php","*.html","*.sass"],["copytosever"]);
	gulp.watch(["js/*.js"],["copytoseverjs"]);
	gulp.watch(["css/*.css"],["copytosevercss"]);
	gulp.watch(["img/*.img"],["copytoseverimg"]);
});
