(function(){
    var 
        ipcRenderer = require('electron').ipcRenderer,
        closeEl = document.querySelector('.d-close');

    closeEl.addEventListener('click', function(){
        ipcRenderer.send('close-submenu');
    });

})();
