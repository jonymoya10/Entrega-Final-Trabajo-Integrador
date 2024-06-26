const express = require('express');
const router = express.Router();
const alojamientoServicioController = require('../controllers/alojamientosServiciosController');

// Ruta para obtener todos los alojamientoservicios (relaciones)
router.get('/getAllAlojamientoServicios', alojamientoServicioController.getAllAlojamientoServicios);

// Ruta para obtener los servicios de un alojamiento por su ID de alojamiento
router.get('/getServiciosByAlojamientoId/:id', alojamientoServicioController.getServiciosByAlojamientoId);

// Ruta para crear una nueva relación alojamiento-servicio
router.post('/createAlojamientoServicio', alojamientoServicioController.createAlojamientoServicio);

// Ruta para eliminar una relación alojamiento-servicio por su ID
router.delete('/deleteAlojamientoServicio/:id', alojamientoServicioController.deleteAlojamientoServicio);

module.exports = router;
