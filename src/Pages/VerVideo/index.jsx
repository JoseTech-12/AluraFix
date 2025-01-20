
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../Context/GoblalContext'
import NotFount from '../Not Fount/NotFount'
import styles from './VerVideo.module.css'

const VerVideo = () => {
    const { datos } = useGlobalContext()
    const { id } = useParams()
    const video = datos.find(video => video.id === id)

    if (!video) {
        // Si no se encuentra el video, muestra un mensaje o redirige
        return <NotFount />;
    }
    const videoId = new URL(video.url).searchParams.get('v');

    return (
        <section className={styles.videoss}>
            <h1>{video.titulo}</h1>
            <p>{video.descripcion}</p>
            <iframe
                className={styles.video}

                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"  // Cambiado a frameBorder
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen  // Cambiado a camelCase
            ></iframe>

        </section>
    )
}

export default VerVideo



