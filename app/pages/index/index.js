(function(){
    var 
        ipc = require('ipc'),
        closeEl = document.querySelector('.d-close'),
        menuEl = document.querySelector('.d-menu');


    closeEl.addEventListener('click', function(){
        ipc.send('close-main-window');

    });

    menuEl.addEventListener('click', function(){
        ipc.send('open-submenu');
    });

    ipc.on('global-shortcut', function(code){
        switch(code){
            case 0:
                ipc.send('close-main-window');
                break;
        }

    });
})();
