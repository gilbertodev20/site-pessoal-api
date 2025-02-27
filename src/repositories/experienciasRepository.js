const {pool} = require('../config/db');

exports.getAllExperiencias = async () => {
        const result = await pool.query('SELECT * FROM experiencias');
        return result.rows;  
}

exports.getAllExperienciasById = async (id) => {
    const result = await pool.query('SELECT * FROM experiencias WHERE id = $1', [id]);
    return result.rows[0];
} 
 exports.createExperiencia = async (experiencia) => {
    const result = await pool.query(
      `INSERT INTO experiencias (titulo, tipo, descricao, "anoInicio", "anoFim") VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [ experiencia.titulo, experiencia.tipo, experiencia.descricao, experiencia.anoInicio, experiencia.anoFim]
    );
    return result.rows[0];
}

exports.updateExperiencia = async (id, experiencia) => {
    const result = await pool.query(
        `UPDATE experiencias SET titulo = $1, tipo = $2, descricao = $3, "anoInicio" = $4, "anoFim" = $5 
        RETURNING *`,
        [ experiencia.titulo, experiencia.tipo, experiencia.descricao, experiencia.anoInicio, experiencia.anoFim]
    );
    return result.rows[0];
}
exports.deleteExperiencia = async (id) => {
    const result = await pool.query('DELETE FROM experiencias WHERE id = $1', [id]);
}