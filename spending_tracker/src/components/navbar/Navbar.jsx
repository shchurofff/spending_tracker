import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <a>MyAppLogo</a>
                </div>
                <div className={styles.navLinks}>
                    <a>Spend</a>
                    <a>Spend Kaledar</a>
                    <button className={styles.authBtn}>Login</button>
                </div>
            </nav>
        </header>
	);
};

export default Navbar;
