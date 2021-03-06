const ipcRenderer = require('electron').ipcRenderer;
const paragraph = document.getElementById('response');

function login(event){
    console.log('va a loguearse');
    event.preventDefault();

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    ipcRenderer.send('login-submission', user, pass)
}

ipcRenderer.on('error-message', (event, message) => {
    paragraph.innerHTML = message;
})

ipcRenderer.on('login-exitoso', (event, vista) => {
    paragraph.innerHTML = 'Login exitoso';
})

ipcRenderer.on('login-fallido', (event, vista) => {
    paragraph.innerHTML = 'Usuario o contraseña incorrecta, sigue intentando';
})