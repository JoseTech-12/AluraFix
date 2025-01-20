import styles from "./Footer.module.css"



import React from 'react'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src="/img/Logo.svg" alt="" />
        </footer>
    )
}

export default Footer