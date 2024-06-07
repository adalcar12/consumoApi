document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const idu = document.getElementById("idu").value;
        const Nombres  = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;
        const ciudad = document.getElementById("ciudad").value;
        const fecha = document.getElementById("fecha").value;
    
        const data = {
            idu: idu,
            nombres: Nombres,
            telefono: telefono,
            correo: correo,
            ciudad: ciudad,
            fecha: fecha
        }
        
        fetch("http://www.pruebasena202414.somee.com/api/usuario", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
          .then((response) => {
            // Verificar si la respuesta es exitosa (código de estado 200)
            if (response.ok) {
              console.log("Datos enviados correctamente");

              window.location.href = "../view/index.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})

