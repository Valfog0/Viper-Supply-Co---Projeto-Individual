

var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        return res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    if (resultadoAutenticar.length == 1) {
                        res.json({
                            id: resultadoAutenticar[0].idUsuario, 
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            cargoId: resultadoAutenticar[0].cargoId,   
                            regiaoId: resultadoAutenticar[0].regiaoId 
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// --- FUNÇÃO DE CADASTRO (Simplificada) ---
async function cadastrar(req, res) {
    // 1. Receber os IDs numéricos do Front-end
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkCargoStr = req.body.agenciaServer;    
    var fkRegiaoStr = req.body.regiaoServer;    
    var topicosArr = req.body.topicosServer;     


    // string pra int
    if (nome == undefined || email == undefined || senha == undefined || fkCargoStr == undefined || fkRegiaoStr == undefined) {
        return res.status(400).send("Há campos obrigatórios indefinidos no envio.");
    }
    
    const fkCargo = parseInt(fkCargoStr);
    const fkRegiao = parseInt(fkRegiaoStr);
    
    if (isNaN(fkCargo) || isNaN(fkRegiao)) {
        return res.status(400).send("IDs de Agência ou Região inválidos.");
    }


    try { //aceita erro
        
        const resultadoCadastro = await usuarioModel.cadastrar(nome, email, senha, fkCargo, fkRegiao);
        const idNovoUsuario = resultadoCadastro.insertId; 
        
        
        // cad topicos
        if (idNovoUsuario && topicosArr && topicosArr.length > 0) {
            
            // garante que cad é array
            const listaTopicos = Array.isArray(topicosArr) ? topicosArr : [topicosArr];

            for (const idTopicoStr of listaTopicos) {
                const idTopico = parseInt(idTopicoStr);
                if (isNaN(idTopico)) continue;
                
                // salva a relacao 
                await usuarioModel.cadastrarTopicos(idNovoUsuario, idTopico);
            }
        }
        
    
        res.status(201).json({ mensagem: "Cadastro realizado com sucesso!", id: idNovoUsuario });

    } catch (erro) {
        console.error("\nHouve um erro ao realizar o cadastro! Erro: ", erro);
        res.status(500).json({
            erro: erro.sqlMessage || "Erro interno do servidor ao cadastrar."
        });
    }
}


module.exports = {
    autenticar,
    cadastrar
}