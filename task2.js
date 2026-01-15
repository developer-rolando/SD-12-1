// Task 2: listUsers()
export function listUsers() {
    fetch('http://localhost:3000/users')
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos))
}
