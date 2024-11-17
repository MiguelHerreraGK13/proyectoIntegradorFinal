
export function authenticateUser(username, password) {
   
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    return username === storedUsername && password === storedPassword;
}

export function getUserData() {
    return {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password') // No es recomendable almacenar contraseñas en texto claro.
    };
}

export function updateUserData(newUsername) {
    localStorage.setItem('username', newUsername);
}

export function saveProfileImage(imageData) {
    localStorage.setItem('profileImage', imageData);
}

/**
 * Verifica si un usuario ya existe en el sistema.
 * @param {string} username - El nombre del usuario a verificar.
 * @returns {boolean} - True si el usuario ya existe, False en caso contrario.
 */
export function isUserExists(username) {
    const storedUsername = localStorage.getItem('username');
    return storedUsername === username;
}