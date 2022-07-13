import React from "react";
import styles from './notfound.module.scss';

function NotFound() {
    const currentUser = localStorage.getItem('CURRENT_USER');
    return (
        <div>
            <div className={styles.face}>
                <div className={styles.band}>
                    <div className={styles.red}></div>
                    <div className={styles.white}></div>
                    <div className={styles.blue}></div>
                </div>
                <div className={styles.eyes}></div>
                <div className={styles.dimples}></div>
                <div className={styles.mouth}></div>
            </div>

            <h1 className={styles.h1}>Oops! Something went wrong!</h1>
            <a className={styles.a} href={currentUser?"/":"login"}>
              <div className={styles.btn}>Return to Home</div>  
            </a>
        </div>
    );
}
export default NotFound;