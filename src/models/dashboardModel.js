var database = require("../database/config");

function buscarProporcoesInteresses() {
    var instrucaoSql = `
        -- Seleciona os nomes de Cargo, Região e Tópico, e conta quantos usuários têm essa combinação.
        SELECT
            c.nome_cargo AS cargo,
            r.nome_regiao AS regiao,
            t.nome_topico AS interesse,
            COUNT(ut.id_usuario) AS total_interessados
        FROM usuarios_topicos ut  -- CORRIGIDO: Nome da tabela N:N
        
        -- Junta com a tabela de usuários para obter a id_cargo e id_regiao
        JOIN usuarios u ON ut.id_usuario = u.id_usuario -- CORRIGIDO: usa ut.id_usuario
        
        -- Juntas com as tabelas de referência para obter os nomes
        JOIN regioes r ON u.id_regiao = r.id_regiao  -- CORRIGIDO: usa u.id_regiao
        JOIN cargos c ON u.id_cargo = c.id_cargo    -- CORRIGIDO: usa u.id_cargo
        JOIN topicos_interesse t ON ut.id_topico = t.id_topico  -- CORRIGIDO: usa ut.id_topico
        
        -- Agrupa por Cargo, Região e Tópico para contar as ocorrências
        GROUP BY 
            c.nome_cargo, 
            r.nome_regiao, 
            t.nome_topico
        
        -- Ordena para facilitar a visualização no backend
        ORDER BY regiao, cargo, total_interessados DESC;
    `; 
    
    console.log("Executando a instrução SQL para Dashboard: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarProporcoesInteresses
};