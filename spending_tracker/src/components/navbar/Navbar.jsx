import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>My Budget</h1>
                </div>
                <div className={styles.navLinks}>
                    <a>Расходы</a>
                    <a>Календарь</a>
                    <button className={styles.authBtn}>Войти</button>
                </div>
            </nav>
        </header>
	);
};

export default Navbar;
