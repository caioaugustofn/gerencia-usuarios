const {
  retornaUsuarios,
  adicionarNovoUsuario,
} = require("../src/gerenciarUsuarios");
const { expect } = require("chai");

describe("Testar as funções de Gestão de Usuarios", function () {
  it("Validar que posso adicionar um novo nome na lista de usuarios", function () {
    //Adicionando novo nome na lista de usuarios
    adicionarNovoUsuario({
      nome: "Maria",
      email: "maria@gmail.com",
    });
    //Retornar a lista de usuarios na caixa lista de usuarios
    const listaDeUsuarios = retornaUsuarios();
    //Compara se o novo nome está no fim da lista de usuarios
    //expect(listaDeUsuarios.at(-1).nome).to.equal("maria");
    //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com')
      expect(listaDeUsuarios.at(-1).to.eql({
      nome: "Maria",
      email: "maria@gmail.com",
    )}

  });
});


