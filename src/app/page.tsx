import Login from "./components/login"
import styles from './page.module.css'

export default function Home() {
  return(
    <main className={styles.page}>
      <Login/>
    </main>
  )
}
