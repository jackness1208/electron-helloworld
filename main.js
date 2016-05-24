
// 'use strict';
var
    app = require('app'),
    BrowserWindow = require('browser-window'),
    globalShortcut = require('global-shortcut'),
    mainWindow = null,
    ipc = require('ipc');

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        resizable: false,
        
        frame: false,
        width: 800, 
        height: 600
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

    globalShortcut.register('q', function(){
        mainWindow.webContents.send('global-shortcut', 0);

    });
});

ipc.on('close-main-window', function(){
    app.quit();
});
