import * as path from 'path';
import plumber from 'gulp-plumber';

export function json() {
	return app.gulp.src(app.path.src.json)
		.pipe(plumber())
		.pipe(app.gulp.dest(app.path.build.json))
}