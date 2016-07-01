'use strict';

var 
    gulp = require('gulp'),
    connect = require('electron-connect').server.create(),
    symdest = require('gulp-symdest'),
    zip = require('gulp-vinyl-zip'),
    electron = require('gulp-atom-electron');
    

gulp.task('default', function(){
    gulp.run('-h');
});

gulp.task('-h', function(){
    console.log([
        '',
        '',
        '  Ustage:' + ' gulp <command>',
        '',
        '',
        '  Commands:',
        '    ' + 'start' + '         start project',
        '',
        '',
        '  Options:',
        '    ' + '-h' + '            output usage information',
        '',
        ''
    ].join('\n'));
});

gulp.task('start', function(){
    connect.start();

    gulp.watch('app.js', connect.restart);
    gulp.watch(['app/**/*.*'], connect.restart);
});

gulp.task('pack', function(){
    

    var 
        system = process.argv[4],
        path = require('path'),
        pkg = require('./package.json'),
        iconPath = '',
        opts = {
            version: '1.2.0',
            // winIcon: path.join(__dirname, 'app/icon/app-icon.ico'),
            // darwinIcon: './app/icon/app-icon.icns',
            platform: 'darwin'
        };

    switch(gulp.env.system){
        case 'windows':
        case 'pc':
            opts.platform = 'win32';
            break;

        case 'mac':
            opts.platform = 'darwin';
            break;

        case 'linux':
            opts.platform = 'linux';
            break;
        default:
            return;
    }

    return gulp.src(['**', '!build/**', '!tool/**'])
        .pipe(electron(opts))
        .pipe(zip.dest('./build/'+ pkg.name +'.'+ pkg.version + '.' + opts.platform + '.zip'));

});
