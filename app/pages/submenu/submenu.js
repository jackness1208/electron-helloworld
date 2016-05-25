(function(){
    var 
        ipc = require('ipc'),
        closeEl = document.querySelector('.d-close');

    closeEl.addEventListener('click', function(){
        ipc.send('close-submenu');
    });

})();
