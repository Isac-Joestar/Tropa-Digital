import Login from "./_components/login/index"
import styles from './page.module.css'

export default function Home() {
  return(
    <main className={styles.page}>
      <Login/>
    </main>
  )
}
