// pido la variable
const boton_1 = document.getElementById("boton_1");


// funcion para cambiar de primary a danger
function cambiarDanger(){
    boton_1.classList.remove("btn-primary, btn-succes");
    boton_1.classList.add("btn-danger");
};

// funcion para cambiar de primary a success
function cambiarSucces(){
boton_1.classList.remove("btn-primary, btn-danger");
boton_1.classList.add("btn-success");

};


// funcion para cambiar de mostrar los datos solicitados
function enviar_nombre() {
    // Pido las variables de los inputs
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const celular = document.getElementById("celular");
    const direccion = document.getElementById("direccion");

    // Guardo los elementos en un array
    const campos = [nombre, apellido, correo, celular, direccion];

    // Verifico si TODOS los campos tienen un valor distinto de vacío
    const todos_llenos = campos.every(campo => campo.value.trim() !== "");

    // Si todos están llenos, recorremos para poner las clases de válido
    if (todos_llenos) {
        
        campos.forEach(campo => {
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
        });

        // Mostramos todos los datos solicitados en pantalla
        document.getElementById("tu_nombre").innerText = nombre.value;
        document.getElementById("tu_apellido").innerText = apellido.value;
        document.getElementById("tu_correo").innerText = correo.value;
        document.getElementById("tu_celular").innerText = celular.value;
        document.getElementById("tu_direccion").innerText = direccion.value;

    } else {
        // Si al menos uno falta por llenar, marcamos los errores y avisamos una sola vez
        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                campo.classList.remove("is-valid");
                campo.classList.add("is-invalid");
            } else {
                campo.classList.remove("is-invalid");
                campo.classList.add("is-valid");
            }
        });

        alert("Debes llenar todos los campos");
    }
}