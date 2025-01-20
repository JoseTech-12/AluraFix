import { useState, useEffect } from 'react'
import styles from './Modal.module.css'
import { useGlobalContext } from '../../Context/GoblalContext'
import Titulo from '../Titulo'
import Swal from 'sweetalert2';

const ModalEditar = () => {
    const { modal, abrirCerrarModal, editarVideo, videoSeleccionado } = useGlobalContext()

    const { id, titulo, capa, url, categoria, descripcion } = videoSeleccionado
    const [nuevoTitulo, setNuevoTitulo] = useState(titulo)
    const [nuevaCategoria, setNuevaCategoria] = useState(categoria)
    const [imagen, setImagen] = useState(capa)
    const [nuevoVideo, setNuevoVideo] = useState(url)
    const [NuevaDescripcion, setNuevaDescripcion] = useState(descripcion)

    const isValidURL = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };



    const handleEditar = (e) => {
        e.preventDefault()

        if (!isValidURL(imagen) || !isValidURL(nuevoVideo)) {

            Swal.fire({
                title: 'Error',
                text: 'Las URLs de imagen o video no son válidas.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;;
        }
        const videoEditado = {
            titulo: nuevoTitulo,
            categoria: nuevaCategoria,
            capa: imagen,
            url: nuevoVideo,
            descripcion: NuevaDescripcion
        }
        editarVideo(id, videoEditado)
        abrirCerrarModal()

    }
    const overlay = (
        <div className={styles.overlay}>
        </div>
    )
    return (
        <>
            {modal && overlay}
            <dialog open={modal} className={styles.modal}>
                <button onClick={abrirCerrarModal} className={styles.closeButton}>X</button>
                <form onSubmit={handleEditar} className={styles.form}>
                    <h2>Editar Video</h2>
                    <div className={styles.contenedorInputs}>
                        <label>
                            Titulo

                            <input
                                required
                                type="text"
                                onChange={(e) => setNuevoTitulo(e.target.value)}
                                value={nuevoTitulo} />
                        </label>
                        <label>
                            Categoria
                            <select
                                required
                                onChange={(e) => setNuevaCategoria(e.target.value)}
                                value={nuevaCategoria}>
                                <option value="FRONT END">Front End</option>
                                <option value="BACK END">Back End</option>
                                <option value="INOVACION Y GESTION">Inovacion y gestion</option>
                            </select>
                        </label>
                        <label>
                            Imagen
                            <input
                                required
                                onChange={(e) => setImagen(e.target.value)}
                                type="text" value={imagen} />
                        </label>
                        <label>
                            Video
                            <input
                                required
                                onChange={(e) => setNuevoVideo(e.target.value)}
                                value={nuevoVideo} type="text" />
                        </label>
                        <label>
                            Descripcion
                            <textarea required value={NuevaDescripcion}
                                onChange={(e) => setNuevaDescripcion(e.target.value)}
                            ></textarea>
                        </label>
                        <div className={styles.contenedorBotones}>
                            <button type="submit">Guardar</button>
                            <button onClick={abrirCerrarModal}>Cancelar</button>
                        </div>
                    </div>
                </form>


            </dialog >
        </>
    );
}

export default ModalEditar
