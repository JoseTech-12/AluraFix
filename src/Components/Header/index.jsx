
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { IoIosHome } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";



const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.logo} src="/img/Logo.svg" alt="logo" />
            </Link>

            <div className={styles.container}>


                <Link to="/" className={styles.link} >
                    <button className={styles.boton}>
                        <IoIosHome />Home
                    </button>
                </Link >
                <Link to="/nuevovideo" className={styles.link} >
                    <button className={styles.boton}>
                        <IoIosAddCircle />Nuevo video
                    </button>
                </Link >
                <Link to="/" className={styles.link} >
                    <button className={styles.btn}>
                        <IoIosHome />
                    </button>
                </Link >
                <Link to="/nuevovideo" className={styles.link} >
                    <button className={styles.btn}>
                        <IoIosAddCircle />
                    </button>
                </Link >


            </div>
        </header >
    )
}

export default Header