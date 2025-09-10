//const usuarios = [usuario1, usuario2, usuario3, usuario4];

const usuarios = [
    {
        nome: 'Lucas',
        email: 'lucas.carvalho@hotmail.com'
    },
    {
        nome: 'Matheus',
        email: 'matheus.canesso@hotmail.com'
    },
    {
        nome: 'João',
        email: 'joao.maga@hotmail.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos.borges@hotmail.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}