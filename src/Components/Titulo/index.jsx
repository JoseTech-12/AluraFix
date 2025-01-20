import styles from "./Titulo.module.css"





const Titulo = ({ text, ancho, color }) => {
    const estilos = {
        backgroundColor: color,
        width: ancho,

    }
    return (
        <h1 className={styles.titulo} style={estilos}>
            {text}
        </h1>

    )
}

export default Titulo