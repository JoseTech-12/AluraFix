import styles from "./Footer.module.css"



import React from 'react'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src="/img/Logo.svg" alt="" />
            <p>Desarrollado por Jose luis Parra</p>
        </footer>
    )
}

export default Footer