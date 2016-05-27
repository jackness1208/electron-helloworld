(function(){
    var 
        ipcRenderer = require('electron').ipcRenderer,
        closeEl = document.querySelector('.d-close'),
        menuEl = document.querySelector('.d-menu');


    closeEl.addEventListener('click', function(){
        ipcRenderer.send('close-main-window');

    });

    menuEl.addEventListener('click', function(){
        ipcRenderer.send('open-submenu');
    });

    ipc.on('global-shortcut', function(code){
        switch(code){
            case 0:
                ipcRenderer.send('close-main-window');
                break;
        }

    });
})();
