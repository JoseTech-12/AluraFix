import { useGlobalContext } from "../../Context/GoblalContext"
import styles from "./Cards.module.css"
import swal from 'sweetalert2'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import Swal from "sweetalert2"
import ModalEditar from "../Modal"
import { Link } from "react-router-dom"
const Card = ({ id, video, color }) => {
    const { modal, eliminarVideo, seleccionarVideoParaEditar, setVideo } = useGlobalContext()

    const borrarVideo = () => {
        swal.fire({
            title: '¿Estas seguro que deseas eliminar?',
            text: "No podras recuperar el video una vez eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarVideo(id)
                Swal.fire(
                    'Eliminado',
                    'El video ha sido eliminado',
                    'success'
                )
            }
        })
    }

    const handleEditarClick = () => {
        seleccionarVideoParaEditar(video)


    };
    return (
        <div className={styles.contenedor}>
            <article className={styles.article} style={{ border: `2px solid ${color}` }}>
                <Link to={`video/${id}`}><img className={styles.capa} src={video.capa} alt={video.titulo} /></Link>
                <div>
                    <button
                        onClick={borrarVideo} className={styles.button}>Borrar<RiDeleteBinLine />
                    </button>
                    <button
                        onClick={handleEditarClick}
                        className={styles.button}> Editar<FaTools />
                    </button>
                </div>
            </article>

            {modal && <ModalEditar />}
        </div >
    )
}

export default Card