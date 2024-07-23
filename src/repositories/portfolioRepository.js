const {pool} = require('../config/db');

exports.getAllPortfolio = async () => {
    const result = await pool.query('SELECT * FROM portfolio');
    return result.rows;  
}
exports.getAllPortfolioById = async (id) => {
    const result = await pool.query('SELECT * FROM portfolio WHERE id = $1', [id]);
    return result.rows[0];
} 

exports.createPortfolio = async (portfolio) => {
    const result = await pool.query(
      `INSERT INTO portfolio (title, image, link) VALUES ($1, $2, $3)
        RETURNING *`,
        [ portfolio.title, portfolio.image, portfolio.link]
    );
    return result.rows[0];
}

exports.updatePortfolio = async (id, portfolio) => {
    const result = await pool.query(
        `UPDATE portfolio SET title = $1, image = $2, link = $3
        RETURNING *`,
        [ portfolio.title, portfolio.image, portfolio.link]
    );
    return result.rows[0];
}

exports.deletePortfolio = async (id) => {
    const result = await pool.query('DELETE FROM portfolio WHERE id = $1', [id]);
}