const {
  retornaUsuarios,
  adicionarNovoUsuario,
} = require("../src/gerenciarUsuarios");
const { expect } = require("chai");

describe("Testar as funções de Gestão de Usuarios", function () {
  it("Validar que posso adicionar um novo nome na lista de usuarios", function () {
    //Adicionando novo nome na lista de usuarios
    adicionarNovoUsuario("maria");
    //Retornar a lista de usuarios na caixa lista de usuarios
    const listaDeUsuarios = retornaUsuarios();
    //Compara se o novo nome está no fim da lista de usuarios
    expect(listaDeUsuarios.at(-1)).to.equal("maria");
  });
});
