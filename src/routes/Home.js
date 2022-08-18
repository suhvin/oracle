import React from "react";
import styles from "./Home.module.css"

const Home = () => {
    return(
        <div>
            <p id={styles.title1}>gray</p>
            <p id={styles.title2}></p>
            <div className={styles.box} id={styles.boxA}>
                <div className={styles.line} id={styles.lineA}>
                    <p id={styles.textA1}></p>
                    <img id={styles.imgA1}/>
                </div>
            </div>
            <div className={styles.box} id={styles.boxB}>
                <div className={styles.line} id={styles.lineB}>
                    <p id={styles.textB1}></p>
                    <img id={styles.imgB1}></img>
                </div>
            </div>
        </div>
    );
};
export default Home;