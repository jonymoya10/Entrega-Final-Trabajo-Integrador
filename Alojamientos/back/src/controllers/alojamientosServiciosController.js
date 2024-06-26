const dbConnection = require('../config/dbConfig');

exports.getAllAlojamientoServicios = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM alojamientoservicios');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alojamientoservicios' });
  }
};

// Obtener los servicios asociados a un alojamiento por su ID de alojamiento
exports.getServiciosByAlojamientoId = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT s.* FROM servicios s JOIN alojamientoservicios a ON s.idServicio = a.idServicio WHERE a.idAlojamiento = ?', [id]);
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios del alojamiento' });
  }
};

// Agregar una nueva relación entre alojamiento y servicio
exports.createAlojamientoServicio = async (req, res) => {
  try {
    const { idAlojamiento, idServicio } = req.body;
    const connection = await dbConnection.getConnection();
    const [results] = await connection.query('INSERT INTO alojamientoservicios (idAlojamiento, idServicio) VALUES (?, ?)', [idAlojamiento, idServicio]);
    connection.release();
    res.json({ message: 'Relación alojamiento-servicio creada correctamente', id: results.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la relación alojamiento-servicio' });
  }
};

// Eliminar una relación entre alojamiento y servicio por ID
exports.deleteAlojamientoServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    await connection.query('DELETE FROM alojamientoservicios WHERE idAlojamientoServicio = ?', [id]);
    connection.release();
    res.json({ message: 'Relación alojamiento-servicio eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la relación alojamiento-servicio' });
  }
};



