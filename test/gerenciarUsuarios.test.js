const { retornarUsuarios } = require('../src/gerenciarUsuarios');
const { adicionarNovoUsuario } = require('../src/gerenciarUsuarios');

//Faz as comparações
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {

    it('Validar se um novo usuário foi adicionado corretamente', function () {
        adicionarNovoUsuario({
            nome: 'Murilo',
            email: 'murilo.reis@hotmail.com'
        });

        const listaDeUsuarios = retornarUsuarios();

        expect(listaDeUsuarios.at(-1).nome).to.equal('Murilo');
        expect(listaDeUsuarios.at(-1).email).to.equal('murilo.reis@hotmail.com');
    });

    it('Validar se a lista de usuários é retornada corretamente', function () {
        const listaDeUsuarios = retornarUsuarios();
        
        expect(listaDeUsuarios.length).to.be.equal(5);
    });
});