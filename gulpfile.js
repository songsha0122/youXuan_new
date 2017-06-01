var gulp = require("gulp");
//д�����Ƶ�����
gulp.task("copytosever",function(){
	gulp.src(["*.php","*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/1701xiangmu"));
});

gulp.task("copytoseverjs",function(){
	gulp.src(["js/*.js"]).pipe(gulp.dest("D:/phpStudy/WWW/1701xiangmu/js"));
});

gulp.task("watch",function(){
	gulp.watch(["*.php","*.html"],["copytosever"]);
	gulp.watch(["js/*.js"],["copytoseverjs"]);
});

//var gulp=require('gulp');
//var uglify = require("gulp-uglify");
//压缩
//gulp.task("changeUglify",function(){
//	//src后（）里的是要压缩的文件的路径
//	gulp.src("js/amdMain.js")
//	.pipe(uglify())//压缩
//	//dist/js是将压缩的文件存放的路径
//	.pipe(gulp.dest("dist/"));
//});
//监听
//gulp.task("watch",function(){
//	gulp.watch("js/amdMain.js",["changeUglify"]);
//})
//运行watch监听
//gulp watch

//gulp.task("copy-html",function(){
//	//src后（）里的是要压缩的文件的路径
//	gulp.src("*.html")
//	.pipe(uglify())//压缩
//	//dist/js是将压缩的文件存放的路径
//	.pipe(gulp.dest("dist/"));
//});
