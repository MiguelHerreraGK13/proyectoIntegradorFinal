function guardarCambios() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const numeroDocumento = document.getElementById("numeroDocumento").value;
    const nacimiento = document.getElementById("nacimiento")?.value; 
    const numeroPoliza = document.getElementById("numeroPoliza")?.value; 

    alert("Datos guardados:\n" +
        `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\n` +
        `Tipo de Documento: ${tipoDocumento}\nNúmero de Documento: ${numeroDocumento}\n` +
        `Fecha de Nacimiento: ${nacimiento}\nNúmero de Póliza: ${numeroPoliza}`);
        window.location.href="/home.html"
}

function guardarDocumento() {
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() !== "") {
        const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario")) || {};
        datosUsuario.nombre = nombre;
        localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

        alert("Nombre de usuario actualizado correctamente.");
    } else {
        alert("Por favor, ingresa un nombre.");
        return;
    }

   
}

function cancelar() {
    if (confirm("¿Estás seguro de que deseas cancelar los cambios?")) {
        // Redirige a la página principal (home.html)
        window.location.href = "../home.html";
    }
}
