/* global process */
var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    cordovaBuild = require("taco-team-build");
	
var winPlatforms = ["android", "windows", "wp8"],
    osxPlatforms = ["ios"],
    buildArgs = {
        android: ["--release","--device","--gradleArg=--no-daemon"],                // Warning: Omit the extra "--" when referencing platform
        ios: ["--release", "--device"],                                             // specific preferences like "-- --ant" for Android
        windows: ["--release", "--device"],                                         // or "-- --win" for Windows. You may also encounter a
        wp8: ["--release", "--device"]                                              // "TypeError" after adding a flag Android doesn't recognize
    },                                                                              // when using Cordova < 4.3.0. This is fixed in 4.3.0.
    platformsToBuild = process.platform == "darwin" ? osxPlatforms : winPlatforms,  // "Darwin" is the platform name returned for OSX. 
    tsconfigPath = "scripts/tsconfig.json";                                         // This could be extended to include Linux as well.


  gulp.task("scripts", function () {
    // Compile TypeScript code
    gulp.src("scripts/**/*.ts")
        .pipe(ts({
            noImplicitAny: false,
            noEmitOnError: true,
            removeComments: false,
            sourceMap: true,
            out: "appBundle.js",
            target: "es5"
        }))
        .pipe(gulp.dest("www/scripts"));
		
	gulp.task("build", ["scripts"], function () {
    	return cordovaBuild.buildProject(platformsToBuild, buildArgs);
	});
	
	gulp.task("watch", ["scripts"], function () {
    	gulp.watch("scripts/**/*.ts", ["scripts"]);
	});
});