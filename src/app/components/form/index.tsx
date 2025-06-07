'use client'

import { useState } from "react";
import styles from './index.module.css'
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
function Form (){
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
    
        if (email && password) {
          router.push("/events"); 
        } else {
          alert("Preencha todos os campos.");
        }
      };
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.content_input}>
                <label htmlFor="email" className={styles.label}>E-mail</label>
                <input type="email" name="email" id="email" className={styles.input} placeholder="seunome@seuservidor.com"/>
            </div>
            <div className={styles.content_input}>
                <label htmlFor="password" className={styles.label}>Senha</label>
                <div className={styles.passwordWrapper}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
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
            <button type="submit" className={styles.button}>Enviar</button>
        </form>
    )
}

export default Form