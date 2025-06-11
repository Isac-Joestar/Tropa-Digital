import styles from "./page.module.css";
import Form from "./components/form/index";
import TestStyled from "./components/testStyled";
export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content_left}>
          <div className={styles.content_top}>
              <img className={styles.icon} src="/icon.svg" alt="" />
            <div className={styles.text}>
              <h1 className={styles.title}>Bem-vindo de volta</h1>
              <p className={styles.sub_title}>Entre com sua conta para acessar o painel.</p>
            </div>
          </div>
          <div className={styles.content_form}>
            <Form/>
          </div>
        </div>
        <div className={styles.content_image}>
          <img src="/image/login.svg" alt="" />
          <div className={styles.rectangle}>
          </div>
        </div>
      </div>
    </main>
  );
}
