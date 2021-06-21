const botonAgregar = document.querySelector("#agregar");

let listadoParticipantes = [];

var carrera = document.getElementById("carrera");
var registro = document.getElementById("registro");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");

botonAgregar.addEventListener("click", () => {
  //   alert("se hizo click")

  if (
    !(
      carrera.value == "" &&
      registro.value == "" &&
      nombre.value == "" &&
      apellido.value == ""
    )
  ) {
    // if (listadoParticipantes.length < 3) {
    const participante = {
      carrera: carrera.value,
      registro: registro.value,
      nombre: nombre.value,
      apellido: apellido.value,
    };

    // alert(listadoParticipantes.length);
    listadoParticipantes.push(participante);
    document.getElementById("lista").innerHTML += `
            <div>
                <div>
                <h6 style="font-weight:600">Participante ${listadoParticipantes.length}</h6>
                <p>${participante.carrera}</p>
                <p>${participante.registro}</p>
                <p>${participante.nombre} ${participante.apellido}</p>
                </div>
            </div>
          `;

    carrera.value = "";
    registro.value = "";
    nombre.value = "";
    apellido.value = "";
    // } else {
    //   alert("El equipo no puede tener mas de 4 participantes");
    // }
  } else {
    alert("debe rellenar todos los campos");
  }
});

document.getElementById("submi").addEventListener("click", () => {
  if (listadoParticipantes.length < 3) {
    alert("debe agregar mínimo 3 participantes");
  }
  console.log(listadoParticipantes.length);
  console.log(listadoParticipantes);
});

// botonSubmit(){
//     if(listadoParticipantes.length == 0) {

//         listadoParticipantes.push(participante)
//         alert('alert')
//         return
//     }

// }
