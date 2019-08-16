const editUser = (id, token, email, password, admin) => {
  return fetch(`http://165.22.166.131:8080/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ 'email': email, 'password': password, 'roles': { 'admin': admin } })
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 400) {
      return Promise.reject({ message: 'Es necesario ingresar email y/o contraseña' })
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No existe token válido' })
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'Es necesario ser administrador para realizar esta acción' })
    } else if (resp.status === 404) {
      return Promise.reject({ message: 'Usuario solicitado no existe' })
    }
    return Promise.reject({ message: resp.statusText })
  })

}
export default editUser;