const { retornarUsuarios } = require('../src/gerenciarUsuarios');
const { adicionarNovoUsuario } = require('../src/gerenciarUsuarios');

//Faz as comparações
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {

    it('Validar se um novo usuário foi adicionado corretamente', function () {
        adicionarNovoUsuario('Murilo');

        const listaDeUsuarios = retornarUsuarios();
        
        expect(listaDeUsuarios.at(-1)).to.equal('Murilo');
    });

    it('Validar se a lista de usuários é retornada corretamente', function () {
        const listaDeUsuarios = retornarUsuarios();
        
        expect(listaDeUsuarios.length).to.be.greaterThan(0);
    });
});