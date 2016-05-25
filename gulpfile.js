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
    gulp.watch(['app/**/*.*'], connect.reload);
    // gulp.watch(['app/pages/index/index.html'], electron.reload);
});

gulp.task('pack', function(){
    var 
        system = process.argv[4],
        pkg = require('./package.json'),
        iconPath = '';

    switch(system){
        case 'windows':
            iconPath = './app/icon/app-icon.ico';
            break;

        case 'mac':
            iconPath = './app/icon/app-icon.icns';
            break;
    }


    // var 
    //     cmdStr = [
    //         'electron-packager ./',
    //         pkg.name,
    //         '--all',
    //         '--out ~/Desktop/'+ pkg.name,
    //         '--version '+ pkg.version,
    //         '--overwrite',
    //         '--icon=' + iconPath
    //     ].join(' ');

    // fn.runCMD(cmdStr, function(){
    //     console.log(['==============', 'done'].join('\n'));
    // }, __dirname);
});
