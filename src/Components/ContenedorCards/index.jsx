import { useGlobalContext } from "../../Context/GoblalContext"
import Card from "../Cards"
import Titulo from "../Titulo"
import styles from "./ContenedorCards.module.css"
import theme from "../../Styles/theme"

import React from 'react'



const ContenedorCards = () => {
    const { datos } = useGlobalContext()
    const color = theme.colors.categoryColors

    const categorias = datos.reduce((acc, dato) => {
        if (!acc[dato.categoria]) {
            acc[dato.categoria] = [];
        }
        acc[dato.categoria].push(dato);
        return acc;
    }, {});

    return (
        <section className={styles.seccion}>
            {Object.keys(categorias).map((categoria) => {
                return (
                    <div className={styles.contenedor} key={categoria}>
                        <Titulo text={categoria} color={color[categoria]} ancho="230px" />
                        <div className={styles.contenedorCards}>
                            {categorias[categoria].map((video) => (
                                <Card key={video.id} id={video.id} categoria={categoria} video={video} color={color[categoria]} />
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ContenedorCards