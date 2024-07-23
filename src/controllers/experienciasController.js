const experienciasRepository = require('../repositories/experienciasRepository');


exports.getAllExperiencias = async (req, res) => {
    const experiencias = await experienciasRepository.getAllExperiencias();
    res.json(experiencias)
}


exports.getExperienciasById = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = await experienciasRepository.getAllExperienciasById(id);
    res.json(experiencia)
}


exports.createExperiencia = async (req, res) => {
    const experiencia = req.body;
    const newExperiencia = await experienciasRepository.createExperiencia(experiencia);
    res.json(newExperiencia);
}
exports.updateExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updateExperiencias = await experienciasRepository.updateExperiencia(id, experiencia);
     res.json(updateExperiencias)
}

exports.deleteExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await experienciasRepository.deleteExperiencia(id);
    res.json({message: `Experiencia ${id} deleted`})

}