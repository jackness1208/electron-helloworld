
// 'use strict';
var
    app = require('app'),
    BrowserWindow = require('browser-window'),
    globalShortcut = require('global-shortcut'),
    client = require('electron-connect').client,
    mainWindow = null,
    submenu = null,
    ipc = require('ipc');

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        resizable: false,
        frame: false,
        width: 800, 
        height: 600
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/pages/index/index.html');

    globalShortcut.register('q', function(){
        mainWindow.webContents.send('global-shortcut', 0);

    });

    client.create(mainWindow);
});

ipc.on('close-main-window', function(){
    app.quit();
});

ipc.on('open-submenu', function(){
    if(submenu){
        return;
    }
    submenu = new BrowserWindow({
        frame: false,
        height: 400,
        width: 200,
        resizable: false
    });

    submenu.loadUrl('file://' + __dirname + '/app/pages/submenu/submenu.html');


    submenu.on('closed', function(){
        submenu = null;
    });
});

ipc.on('close-submenu', function(){
    if(submenu){
        submenu.close();
    }
});
