// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {

    let idUser;

    
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    idUser = users.length + 1;
    console.log('ID generado:', idUser);

  const postResponse = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: idUser,
      first_name,
      last_name,
      email
    }),
  });

  const data = await postResponse.json();
  console.log('Usuario creado:', data);
}
