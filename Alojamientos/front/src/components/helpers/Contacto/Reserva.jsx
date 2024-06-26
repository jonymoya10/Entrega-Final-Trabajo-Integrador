import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [editando, setEditando] = useState(false);
  const [imagenActual, setImagenActual] = useState(null);
  const [editandoServicio, setEditandoServicio] = useState(false);
  const [alojamientoActual, setAlojamientoActual] = useState(null);
  const [servicioActual, setServicioActual] = useState(null);
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [alojamientoServicios, setAlojamientoServicios] = useState([]);
  const [nuevoAlojamiento, setNuevoAlojamiento] = useState({
    Titulo: "",
    Descripcion: "",
    TipoAlojamiento: "",
    Latitud: "",
    Longitud: "",
    PrecioPorDia: "",
    CantidadDormitorios: "",
    CantidadBanios: "",
    Estado: "Disponible",
  });
  const [nuevoAlojamientoServicio, setNuevoAlojamientoServicio] = useState({
    idAlojamiento: "",
    idServicio: "",
  });

  const [nuevoServicio, setNuevoServicio] = useState({
    Nombre: "",
  });

  useEffect(() => {
    obtenerAlojamientos();
    obtenerServicios();
    obtenerAlojamientoServicios();
    obtenerTiposAlojamiento();
    obtenerImagenes();
  }, []);

  const obtenerAlojamientos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/alojamiento/getAlojamientos"
      );
      setAlojamientos(response.data);
    } catch (error) {
      console.error("Error al obtener alojamientos:", error);
    }
  };

  const obtenerServicios = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/servicio/getAllServicios"
      );
      setServicios(response.data);
    } catch (error) {
      console.error("Error al obtener servicios:", error);
    }
  };

  const obtenerAlojamientoServicios = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/alojamientosServicios/getAllAlojamientoServicios"
      );
      setAlojamientoServicios(response.data);
    } catch (error) {
      console.error("Error al obtener alojamiento-servicios:", error);
    }
  };

  const obtenerTiposAlojamiento = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/tiposAlojamiento/getTiposAlojamiento"
      );
      setTiposAlojamiento(response.data);
    } catch (error) {
      console.error("Error al obtener tipos de alojamiento:", error);
    }
  };

  const manejarCambioAlojamiento = (e) => {
    setNuevoAlojamiento({
      ...nuevoAlojamiento,
      [e.target.name]: e.target.value,
    });
  };

  const manejarCambioAlojamientoServicio = (e) => {
    const { name, value } = e.target;
    setNuevoAlojamientoServicio((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const manejarCambioServicio = (e) => {
    setNuevoServicio({
      ...nuevoServicio,
      [e.target.name]: e.target.value,
    });
  };

  const manejarAgregarAlojamientoServicio = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/alojamientosServicios/createAlojamientoServicio",
        {
          idAlojamiento: nuevoAlojamientoServicio.idAlojamiento,
          idServicio: nuevoAlojamientoServicio.idServicio,
        }
      );
      obtenerAlojamientoServicios();
      setNuevoAlojamientoServicio({ idAlojamiento: "", idServicio: "" });
    } catch (error) {
      console.error("Error al agregar alojamiento-servicio:", error);
    }
  };

  const manejarAgregarTipoAlojamientoServicio = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/tiposAlojamiento/createTipoAlojamiento",
        {
          idAlojamiento: nuevoAlojamientoServicio.idAlojamiento,
          descripcion: nuevoAlojamientoServicio.descripcion,
        }
      );
      obtenerTiposAlojamiento();
      setNuevoAlojamientoServicio({ idAlojamiento: "", descripcion: "" });
    } catch (error) {
      console.error("Error al agregar tipo de alojamiento:", error);
    }
  };
 

  const manejarEliminarAlojamientoServicio = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3001/alojamientosServicios/deleteAlojamientoServicio/${id}`
      );
      obtenerAlojamientoServicios();
    } catch (error) {
      console.error("Error al eliminar alojamiento-servicio:", error);
    }
  };

  const manejarEliminarTipoAlojamiento = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`
      );
      obtenerTiposAlojamiento();
    } catch (error) {
      console.error("Error al eliminar tipo de alojamiento:", error);
    }
  };
  const editarTipoAlojamiento = (tipoAlojamiento) => {
    setNuevoAlojamientoServicio({
      idAlojamiento: tipoAlojamiento.idAlojamiento,
      descripcion: tipoAlojamiento.Descripcion,
    });
    setEditandoTipoAlojamiento(true);
    setTipoAlojamientoActual(tipoAlojamiento);
  };

  const guardarAlojamiento = async (e) => {
    e.preventDefault();
    if (editando) {
      try {
        await axios.put(
          `http://localhost:3001/alojamiento/putAlojamiento/${alojamientoActual.idAlojamiento}`,
          nuevoAlojamiento
        );
        obtenerAlojamientos();
      } catch (error) {
        console.error("Error al actualizar alojamiento:", error);
      }
    } else {
      try {
        await axios.post(
          "http://localhost:3001/alojamiento/createAlojamiento",
          nuevoAlojamiento
        );
        obtenerAlojamientos();
      } catch (error) {
        console.error("Error al crear alojamiento:", error);
      }
    }
    setNuevoAlojamiento({
      Titulo: "",
      Descripcion: "",
      TipoAlojamiento: "",
      Latitud: "",
      Longitud: "",
      PrecioPorDia: "",
      CantidadDormitorios: "",
      CantidadBanios: "",
      Estado: "Disponible",
    });
    setEditando(false);
  };

  const guardarServicio = async (e) => {
    e.preventDefault();
    if (editandoServicio) {
      try {
        await axios.put(
          `http://localhost:3001/servicio/updateServicio/${servicioActual.idServicio}`,
          nuevoServicio
        );
        obtenerServicios();
      } catch (error) {
        console.error("Error al actualizar servicio:", error);
      }
    } else {
      try {
        await axios.post(
          "http://localhost:3001/servicio/createServicio",
          nuevoServicio
        );
        obtenerServicios();
      } catch (error) {
        console.error("Error al crear servicio:", error);
      }
    }
    setNuevoServicio({
      Nombre: "",
    });
    setEditandoServicio(false);
  };

  const editarAlojamiento = (alojamiento) => {
    setNuevoAlojamiento(alojamiento);
    setEditando(true);
    setAlojamientoActual(alojamiento);
  };

  const editarServicio = (servicio) => {
    setNuevoServicio(servicio);
    setEditandoServicio(true);
    setServicioActual(servicio);
  };

  const eliminarAlojamiento = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3001/alojamiento/deleteAlojamiento/${id}`
      );
      obtenerAlojamientos();
    } catch (error) {
      console.error("Error al eliminar alojamiento:", error);
    }
  };

  const eliminarServicio = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/servicio/deleteServicio/${id}`);
      obtenerServicios();
    } catch (error) {
      console.error("Error al eliminar servicio:", error);
    }
  };
  function obtenerTituloAlojamiento(idAlojamiento) {
    const alojamiento = alojamientos.find(
      (a) => a.idAlojamiento === idAlojamiento
    );
    return alojamiento ? alojamiento.Titulo : "Alojamiento Desconocido";
  }
  const [imagenes, setImagenes] = useState([]);
  const [nuevaImagen, setNuevaImagen] = useState({
    idAlojamiento: "",
    RutaArchivo: "",
  });

  const obtenerImagenes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/imagen/getAllImagenes"
      );
      setImagenes(response.data);
    } catch (error) {
      console.error("Error al obtener imágenes:", error);
    }
  };

  const manejarCambioImagen = (e) => {
    setNuevaImagen({
      ...nuevaImagen,
      [e.target.name]: e.target.value,
    });
  };

  const guardarImagen = async (e) => {
    e.preventDefault();
    if (editando) {
      try {
        await axios.put(
          `http://localhost:3001/imagen/updateImagen/${imagenActual.idImagen}`,
          nuevaImagen
        );
        obtenerImagenes();
      } catch (error) {
        console.error("Error al actualizar imagen:", error);
      }
    } else {
      try {
        await axios.post(
          "http://localhost:3001/imagen/createImagen",
          nuevaImagen
        );
        obtenerImagenes();
      } catch (error) {
        console.error("Error al crear imagen:", error);
      }
    }
    setNuevaImagen({ idAlojamiento: "", RutaArchivo: "" });
    setEditando(false);
  };

  const editarImagen = (imagen) => {
    setNuevaImagen(imagen);
    setEditando(true);
    setImagenActual(imagen);
  };

  const eliminarImagen = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/imagen/deleteImagen/${id}`);
      obtenerImagenes();
    } catch (error) {
      console.error("Error al eliminar imagen:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Gestión de Alojamientos</h1>
      <form onSubmit={guardarAlojamiento}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Titulo</label>
            <input
              type="text"
              className="form-control"
              name="Titulo"
              value={nuevoAlojamiento.Titulo}
              onChange={manejarCambioAlojamiento}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Descripcion</label>
            <input
              type="text"
              className="form-control"
              name="Descripcion"
              value={nuevoAlojamiento.Descripcion}
              onChange={manejarCambioAlojamiento}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Tipo de Alojamiento</label>
            <select
              className="form-control"
              name="TipoAlojamiento"
              value={nuevoAlojamiento.TipoAlojamiento}
              onChange={manejarCambioAlojamiento}
            >
              <option value="">Seleccione un tipo</option>
              <option value="1">Tipo 1 Casa</option>
              <option value="2">Tipo 2 Hotel</option>
              <option value="3">Tipo 3 Departamento</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label>Latitud</label>
            <input
              type="number"
              step="0.00000001"
              className="form-control"
              name="Latitud"
              value={nuevoAlojamiento.Latitud}
              onChange={manejarCambioAlojamiento}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Longitud</label>
            <input
              type="number"
              step="0.00000001"
              className="form-control"
              name="Longitud"
              value={nuevoAlojamiento.Longitud}
              onChange={manejarCambioAlojamiento}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Precio por día</label>
            <input
              type="number"
              className="form-control"
              name="PrecioPorDia"
              value={nuevoAlojamiento.PrecioPorDia}
              onChange={manejarCambioAlojamiento}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Cantidad de dormitorios</label>
            <input
              type="number"
              className="form-control"
              name="CantidadDormitorios"
              value={nuevoAlojamiento.CantidadDormitorios}
              onChange={manejarCambioAlojamiento}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Cantidad de baños</label>
            <input
              type="number"
              className="form-control"
              name="CantidadBanios"
              value={nuevoAlojamiento.CantidadBanios}
              onChange={manejarCambioAlojamiento}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Estado</label>
            <select
              className="form-control"
              name="Estado"
              value={nuevoAlojamiento.Estado}
              onChange={manejarCambioAlojamiento}
            >
              <option value="Disponible">Disponible</option>
              <option value="Reservado">Reservado</option>
            </select>
          </div>
        </div>
        <button type="submit" className="">
          {editando ? "Actualizar Alojamiento" : "Agregar Alojamiento"}
        </button>
      </form>
      <hr />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Tipo de Alojamiento</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Precio por Día</th>
              <th>Cantidad de Dormitorios</th>
              <th>Cantidad de Baños</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alojamientos.map((alojamiento) => (
              <tr key={alojamiento.idAlojamiento}>
                <td>{alojamiento.Titulo}</td>
                <td>{alojamiento.Descripcion}</td>
                <td>{alojamiento.TipoAlojamiento}</td>
                <td>{alojamiento.Latitud}</td>
                <td>{alojamiento.Longitud}</td>
                <td>{alojamiento.PrecioPorDia}</td>
                <td>{alojamiento.CantidadDormitorios}</td>
                <td>{alojamiento.CantidadBanios}</td>
                <td>{alojamiento.Estado}</td>
                <td>
                  <button
                    className=""
                    onClick={() => editarAlojamiento(alojamiento)}
                  >
                    Editar
                  </button>
                  <button
                    className=""
                    onClick={() =>
                      eliminarAlojamiento(alojamiento.idAlojamiento)
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Servicios</h2>
      <form onSubmit={guardarServicio}>
        <div className="form-group">
          <label>Nombre del Servicio</label>
          <input
            type="text"
            className="form-control"
            name="Nombre"
            value={nuevoServicio.Nombre}
            onChange={manejarCambioServicio}
          />
        </div>
        <button type="submit" className="">
          {editandoServicio ? "Actualizar Servicio" : "Agregar Servicio"}
        </button>
      </form>
      <hr />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nombre del Servicio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.idServicio}>
                <td>{servicio.Nombre}</td>
                <td>
                  <button className="" onClick={() => editarServicio(servicio)}>
                    Editar
                  </button>
                  <button
                    className=""
                    onClick={() => eliminarServicio(servicio.idServicio)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Relaciones Alojamiento-Servicio</h2>
      <form onSubmit={manejarAgregarAlojamientoServicio}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Alojamiento</label>
            <select
              className="form-control"
              name="idAlojamiento"
              value={nuevoAlojamientoServicio.idAlojamiento}
              onChange={manejarCambioAlojamientoServicio}
            >
              <option value="">Seleccione un alojamiento</option>
              {alojamientos.map((alojamiento) => (
                <option
                  key={alojamiento.idAlojamiento}
                  value={alojamiento.idAlojamiento}
                >
                  {alojamiento.Titulo}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Servicio</label>
            <select
              className="form-control"
              name="idServicio"
              value={nuevoAlojamientoServicio.idServicio}
              onChange={manejarCambioAlojamientoServicio}
            >
              <option value="">Seleccione un servicio</option>
              {servicios.map((servicio) => (
                <option key={servicio.idServicio} value={servicio.idServicio}>
                  {servicio.Nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="">
          Agregar Relación
        </button>
      </form>

      <hr />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Alojamiento</th>
              <th>Servicio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alojamientoServicios.map((alojamientoServicio) => (
              <tr key={alojamientoServicio.idAlojamientoServicio}>
                <td>
                  {
                    alojamientos.find(
                      (a) =>
                        a.idAlojamiento === alojamientoServicio.idAlojamiento
                    )?.Titulo
                  }
                </td>
                <td>
                  {
                    servicios.find(
                      (s) => s.idServicio === alojamientoServicio.idServicio
                    )?.Nombre
                  }
                </td>
                <td>
                  <button
                    className=""
                    onClick={() =>
                      manejarEliminarAlojamientoServicio(
                        alojamientoServicio.idAlojamientoServicio
                      )
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Tipos de alojamiento</h2>
      <form onSubmit={manejarAgregarTipoAlojamientoServicio}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Alojamiento</label>
            <select
              className="form-control"
              name="idAlojamiento"
              value={nuevoAlojamientoServicio.idAlojamiento}
              onChange={manejarCambioAlojamientoServicio}
            >
              <option value="">Seleccione un alojamiento</option>
              {alojamientos.map((alojamiento) => (
                <option
                  key={alojamiento.idAlojamiento}
                  value={alojamiento.idAlojamiento}
                >
                  {alojamiento.Titulo}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Descripción</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              value={nuevoAlojamientoServicio.descripcion}
              onChange={manejarCambioAlojamientoServicio}
            />
          </div>
        </div>
        <button type="submit" className="">
          Agregar Relación
        </button>
      </form>
      <hr />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Alojamiento</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tiposAlojamiento.map((tipoAlojamiento) => (
              <tr key={tipoAlojamiento.idTipoAlojamiento}>
                <td>
                  {obtenerTituloAlojamiento(tipoAlojamiento.idAlojamiento)}
                </td>
                <td>{tipoAlojamiento.descripcion}</td>
                <td>
                  <button
                    className=""
                    onClick={() => editarTipoAlojamiento(tipoAlojamiento)}
                  >
                    Editar
                  </button>
                  <button
                    className=""
                    onClick={() =>
                      manejarEliminarTipoAlojamiento(
                        tipoAlojamiento.idTipoAlojamiento
                      )
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container">
        <h1 className="my-4">Gestión de Imágenes</h1>
        <form onSubmit={guardarImagen}>
          <div className="form-group">
            <label>Alojamiento</label>
            <select
              className="form-control"
              name="idAlojamiento"
              value={nuevaImagen.idAlojamiento}
              onChange={manejarCambioImagen}
            >
              <option value="">Seleccione un alojamiento</option>
              {alojamientos.map((alojamiento) => (
                <option
                  key={alojamiento.idAlojamiento}
                  value={alojamiento.idAlojamiento}
                >
                  {alojamiento.Titulo}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Ruta del Archivo</label>
            <input
              type="text"
              className="form-control"
              name="RutaArchivo"
              value={nuevaImagen.RutaArchivo}
              onChange={manejarCambioImagen}
            />
          </div>
          <button type="submit" className="">
            {editando ? "Actualizar Imagen" : "Agregar Imagen"}
          </button>
        </form>
        <hr />
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID Imagen</th>
                <th>ID Alojamiento</th>
                <th>Ruta del Archivo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {imagenes.map((imagen) => (
                <tr key={imagen.idImagen}>
                  <td>{imagen.idImagen}</td>
                  <td>{imagen.idAlojamiento}</td>
                  <td>{imagen.RutaArchivo}</td>
                  <td>
                    <button className="" onClick={() => editarImagen(imagen)}>
                      Editar
                    </button>
                    <button
                      className=""
                      onClick={() => eliminarImagen(imagen.idImagen)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
