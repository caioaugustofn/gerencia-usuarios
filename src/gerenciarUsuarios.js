const usuarios = [
  {
    nome: "Matheus",
    email: "matheus@gmail.com",
  },
  {
    nome: "Marco",
    email: "marco@gmail.com",
  },
  {
    nome: "Gilson",
    email: "gilson@gmail.com",
  },
  {
    nome: "Fernando",
    email: "fernando@gmail.com",
  },
];

function retornaUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(usuario) {
  usuarios.push(usuario);
}

module.exports = {
  retornaUsuarios,
  adicionarNovoUsuario,
};
