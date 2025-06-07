'use client'

import { useState } from "react";
import styles from './index.module.css'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
function Form (){
    const [showPassword, setShowPassword] = useState(false);
    return(
        <form action="" className={styles.form}>
            <div className={styles.content_input}>
                <label htmlFor="email" className={styles.label}>E-mail</label>
                <input type="email" name="email" className={styles.input} id="email" placeholder="seunome@seuservidor.com"/>
            </div>
            <div className={styles.content_input}>
                <label htmlFor="password" className={styles.label}>Senha</label>
                <div className={styles.passwordWrapper}>
                    <input
                        type={showPassword ? "text" : "password"}
                        className={styles.input}
                        id="password"
                        placeholder="Digite aqui"
                    />
                    <button
                        type="button"
                        className={styles.eyeButton}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IoEyeOffOutline size={24} /> : <IoEyeOutline size={24} />}
                    </button>
                </div>
            </div>
            <button className={styles.button}>Enviar</button>
        </form>
    )
}

export default Form