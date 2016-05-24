(function(){
    var 
        ipc = require('ipc'),
        closeEl = document.querySelector('.d-close');


    closeEl.addEventListener('click', function(){
        ipc.send('close-main-window');

    });

    ipc.on('global-shortcut', function(code){
        switch(code){
            case 0:
                ipc.send('close-main-window');
                break;
        }

    });
})();
