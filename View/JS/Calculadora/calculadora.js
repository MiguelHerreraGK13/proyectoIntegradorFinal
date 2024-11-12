// Definir las primas base, factor que indica un valor constante de pesosPrima/millonAsegurado
const primas = {
    hombre: {
      3: 1039,
      4: 1660.8,
      5: 2282.6,
      6: 2904.4,
      7: 3526.2,
      8: 4148
    },
    mujer: {
      3: 666.0,
      4: 1080,
      5: 1494,
      6: 1908,
      7: 2322,
      8: 2736
    }
  };
  
  // Función para calcular la edad a partir de la fecha de nacimiento
  function calcularEdad(fechaNacimiento) {
      const hoy = new Date();
      const nacimiento = new Date(fechaNacimiento);
      let edad = hoy.getFullYear() - nacimiento.getFullYear();
      const m = hoy.getMonth() - nacimiento.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
          edad--;
      }
      return edad;
  }
  
  // Actualizar el valor asegurado en el display
  function actualizarValorAsegurado() {
      const valorAsegurado = document.getElementById("valorAsegurado").value;
      document.getElementById("valorAseguradoDisplay").innerText = valorAsegurado + ',000,000';
  }
  
  // Función para calcular la prima final
  function calcularPrima() {
      let validacion = false;
  
      // Ciclo de validación de los campos
      do {
          // Obtener los valores del formulario
          const nombre = document.getElementById("nombre").value;
          const apellido = document.getElementById("apellido").value;
          const fechaNacimiento = document.getElementById("fechaNacimiento").value;
          const genero = document.getElementById("genero").value;
          const celular = document.getElementById("celular").value;
          const email = document.getElementById("email").value;
          const usaMoto = document.getElementById("usaMoto").checked;
          const incremento = parseInt(document.getElementById("incremento").value);
          const valorAsegurado = parseInt(document.getElementById("valorAsegurado").value);
  
          // Limpiar el mensaje de error
          document.getElementById("error").innerHTML = "";
  
          // Validar los datos
          const edad = calcularEdad(fechaNacimiento);
  
          // Verificación de edad
          if (edad < 18 || edad > 79) {
              document.getElementById("error").innerHTML = "La edad debe estar entre 18 y 79 años.";
              validacion = false;
              break;
          }
  
          // Verificación de incremento
          if (![3, 4, 5, 6, 7, 8].includes(incremento)) {
              document.getElementById("error").innerHTML = "El incremento debe ser uno de los siguientes: 3, 4, 5, 6, 7, 8.";
              validacion = false;
              break;
          }
  
          // Verificación de género
          if (genero !== "hombre" && genero !== "mujer") {
              document.getElementById("error").innerHTML = "El género debe ser 'hombre' o 'mujer'.";
              validacion = false;
              break;
          }
  
          // Si todos los datos son válidos, se realiza el cálculo
          let primaBase = primas[genero][incremento];
          let variacionEdad = 0.0005 * (edad - 40);
          let primaFinal = primaBase * (1 + variacionEdad);
  
          // Aplicar sobrecosto si usa moto y tiene entre 18 y 35 años
          if (usaMoto && edad >= 18 && edad <= 35) {
              primaFinal *= 1.15; // Incremento del 15%
          }
  
          // Aplicar sobrecosto si usa moto y tiene entre 36 y 50 años
          if (usaMoto && edad >36 && edad <= 50) {
              primaFinal *= 1.10; // Incremento del 10%
          }
  
          // Aplicar sobrecosto si usa moto y tiene entre 50 años y +
          if (usaMoto && edad >51 && edad <= 79) {
              primaFinal *= 1.05; // Incremento del 5%
          }
  
          // Ajustar la prima en relación al valor asegurado
          primaFinal = primaFinal * valorAsegurado;
  
          // Mostrar el resultado
          document.getElementById("resultado").style.display = "block";
          document.getElementById("primaResultado").innerText = `La prima para ${nombre} ${apellido} de ${edad} años de edad, considerando un incremento del ${incremento}% y valor asegurado de ${valorAsegurado} millones es: $${primaFinal.toFixed(2)}`;
  
          validacion = true;  // Si todo es correcto, salir del ciclo
      } while (!validacion);  // Continuar hasta que todos los datos sean válidos
  }