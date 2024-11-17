import { getUserData, updateUserData, saveProfileImage } from '../../../model/user.js';

document.addEventListener('DOMContentLoaded', () => {
    // const username = getUserData().username;
    // document.getElementById('usernameDisplay').textContent = username;

    // Recuperar datos del usuario activo
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

    if (!usuarioActivo) {
        // Si no hay usuario activo, redirigir al inicio de sesión
        alert("No has iniciado sesión.");
        location.href = "landing.html";
        return;
    }

    // Mostrar los datos del usuario en el perfil
    document.getElementById('usernameDisplay').textContent = usuarioActivo.nombre;
    document.getElementById('userEmail').textContent = usuarioActivo.correo;


    const profileImage = localStorage.getItem('profileImage') || 'default-profile.png';
    document.getElementById('profileImage').src = profileImage;


   // Redirigir al formulario de actualización
    document.getElementById('editButton').addEventListener('click', () => {
    window.location.href = 'actualizarDatos.html';
    });

     // Subir imagen de perfil
     document.getElementById('uploadImageButton').addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    saveProfileImage(reader.result);
                    document.getElementById('profileImage').src = reader.result;
                };
                reader.readAsDataURL(file);
            }
        });

        fileInput.click();
    });

    document.querySelector('.logout').addEventListener('click', () => {
        localStorage.removeItem('usuarioActivo'); // Limpiar datos del usuario activo
        location.href = "landing.html"; // Redirigir al login
    });

});