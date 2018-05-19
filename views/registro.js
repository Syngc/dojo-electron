const ipcRenderer = require('electron').ipcRenderer;
const paragraph = document.getElementById('response');

function registrar(event){
    console.log('va a registrar');
    event.preventDefault();

    let email = document.getElementById('email').value;
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let passConf = document.getElementById('passConf').value;

    ipcRenderer.send('registro-submission', email, user, pass, passConf)
}

ipcRenderer.on('error-message', (event, message) => {
    paragraph.innerHTML = message;
})

ipcRenderer.on('registro-exitoso', (event, vista) => {
    window.location.replace(vista);
})