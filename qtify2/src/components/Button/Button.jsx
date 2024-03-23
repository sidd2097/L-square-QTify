import React from "react";
import styles from "./Button.module.css";

function Button({children}){
    return <Button className={styles.button}>{children}</Button>;
}

export default Button;