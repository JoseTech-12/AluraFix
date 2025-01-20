import styles from './CardNuevoVideo.module.css';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';

import { useGlobalContext } from '../../Context/GoblalContext';
import { useState } from 'react';

const CardNuevoVideo = () => {
    const { agregarVideo, setDatos, datos } = useGlobalContext()
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagen, setImagen] = useState('')
    const [video, setVideo] = useState('')
    const [descripcion, setDescripcion] = useState('')


    const isValidURL = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!isValidURL(imagen) || !isValidURL(video)) {

            Swal.fire({
                title: 'Error',
                text: 'Las URLs de imagen o video no son válidas.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;;
        }
        const nuevaVideo = {
            titulo: titulo,
            categoria: categoria,
            capa: imagen,
            url: video,
            descripcion: descripcion
        }

        agregarVideo(nuevaVideo)

        Swal.fire({
            title: 'Ok',
            text: 'Video agregado correctamente',
            icon: 'success',
            confirmButtonText: 'OK'
        });

    }


    const handleLimpiar = () => {
        setCategoria('')
        setDescripcion('')
        setImagen('')
        setTitulo('')
        setVideo('')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.titulos}>
                <Typography variant="h2" component="h1">Nuevo video</Typography>
                <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            </div>
            <Typography variant="h4" align="left" component="h2">Crear tarjeta</Typography>

            <div className={styles.contenedorInputs}>
                <label className={styles.label}>
                    Titulo
                    <input onChange={(e) => setTitulo(e.target.value)}
                        value={titulo} type="text"
                        name="" id="titulo"
                        placeholder='Ingrese titulo del video'
                        required />
                </label>
                <label>
                    Categoria
                    <select required value={categoria} onChange={(e) => { setCategoria(e.target.value) }} id="categoria">
                        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                        <option value="FRONT END">Front End</option>
                        <option value="BACK END">Back End</option>
                        <option value="INOVACION Y GESTION">Inovacion y gestion</option>
                    </select>
                </label>
                <label>
                    Imagen
                    <input onChange={(e) => setImagen(e.target.value)}
                        value={imagen} type="text"
                        id='imagen'
                        placeholder='Ingrese enclace de la imagen' required />
                </label>
                <label>
                    Video
                    <input
                        onChange={(e) => setVideo(e.target.value)}
                        value={video} type="text"
                        id='video'
                        placeholder='ingrese enlace del video' required />
                </label>
                <label>
                    Descripcion
                    <textarea required value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        id="descripcion"
                        placeholder='Ingrese descripcion del video'></textarea>
                </label>
            </div>
            <div className={styles.contenedorBotones}>
                <button className={styles.boton} type='submit'>Crear</button>
                <button className={styles.boton} type='button' onClick={handleLimpiar} >Limpiar</button>
            </div>
        </form>
    );
}

export default CardNuevoVideo;
