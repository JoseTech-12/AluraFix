import styles from "./Banner.module.css";
import Titulo from "../Titulo";
import theme from "../../Styles/theme";
import { useGlobalContext } from "../../Context/GoblalContext";
import { CircularProgress } from '@mui/material';
import { Link } from "react-router-dom"

const Banner = () => {
    const { datos } = useGlobalContext();

    if (!datos || datos.length === 0) {
        return <CircularProgress />;
    }
    const index = Math.floor(Math.random() * datos.length);
    const { titulo, descripcion, capa, categoria, id } = datos[index];

    return (
        <section className={styles.Banner} style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/fondo-Banner.jpeg)' }}>
            <div className={styles.container}>
                <Titulo text={categoria} color={theme.colors.categoryColors[categoria]} ancho="200px" />
                <h4>{titulo}</h4>
                <p>{descripcion}</p>
            </div>
            <Link to={`/video/${id}`}>
                <img className={styles.imagen} alt={titulo} src={capa} />
            </Link>
        </section>
    );
};

export default Banner;

