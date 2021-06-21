const botonArte = document.getElementById('arte');
const espacioOtro = document.getElementById('opcion-otro')

botonArte.addEventListener("change", () => {
    if (botonArte.value == "Otra") {
        // alert('se selecciono el que querias')
        espacioOtro.style.display = "flex"
    }
})

