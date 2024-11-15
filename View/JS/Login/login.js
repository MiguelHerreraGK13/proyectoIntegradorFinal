const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Botones de alternar entre registro e inicio de sesión
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Variables del formulario de login
let loginCorreo = document.querySelector('#login-correo');
let loginContra = document.querySelector('#login-contra');
let loginBoton = document.querySelector('.btn-login');

// Variables del formulario de registro
let registroNombre = document.querySelector('#registro-nombre');
let registroCorreo = document.querySelector('#registro-correo');
let registroContra = document.querySelector('#registro-contra');
let registroBoton = document.querySelector('.btn-registrar');

// Eventos de los botones
loginBoton.addEventListener('click', iniciarSesion);
registroBoton.addEventListener('click', registrarUsuario);

// Función para iniciar sesión
function iniciarSesion() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuarioEncontrado = usuarios.find(user => user.correo === loginCorreo.value && user.contra === loginContra.value);

    if (usuarioEncontrado) {
        alert("Bienvenido " + usuarioEncontrado.nombre);
        location.href = "dashboard.html";
    } else {
        alert("El usuario y/o contraseña son incorrectos.");
    }
}



// Función para registrar un usuario
function registrarUsuario() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (registroNombre.value && registroCorreo.value && registroContra.value) {
        let existe = usuarios.some(user => user.correo === registroCorreo.value);

        //se valida si existe el correo para evitar duplicados
        if (existe) {
            alert("Este correo ya está registrado. Intenta con otro.");
            return;
        } else{
            let usuario = {
                nombre: registroNombre.value,
                correo: registroCorreo.value,
                contra: registroContra.value
            };
            usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Limpiar los campos
        registroNombre.value = "";
        registroCorreo.value = "";
        registroContra.value = "";

            alert("Usuario registrado con éxito 👍, ve al login para ingresar");
        } 
        }else{
            alert("Todos los campos son obligatorios.");
        }


    
       
}
