let gulp = require('gulp');
var uglify=require('gulp-uglify');

gulp.task("copy-html", async ()=>{
	gulp.watch("index.html")
	.pipe(gulp.dest("F:\\mtxm"));
})
gulp.task("scc", async ()=>{
	gulp.watch("css/**/*")
	.pipe(gulp.dest("F:\\mtxm"));
})
gulp.task("js", async ()=>{
	gulp.watch("js/**/*")
	.pipe(gulp.dest("F:\\mtxm"));
})
gulp.task("imgs", async ()=>{
	gulp.watch("img/*.{jpg,png}")
	.pipe(gulp.dest("F:\\mtxm"));
})
gulp.task("bulid",["copy-html","imgs","css","js"], async ()=>{
	console.log("ok");
})