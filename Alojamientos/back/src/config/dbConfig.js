const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Root123',
  database: 'idw',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Verificar conexión
connection.getConnection()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err.message);
    process.exit(1); // Salir de la aplicación si no se puede conectar a la base de datos
  });

module.exports = connection;
