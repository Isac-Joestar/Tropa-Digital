import Menu from '../components/menu'
import styles from './index.module.css'

export default function Events(){
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <Menu/>
            </div>
            <div className={styles.content}>

            </div>
        </div>
    )
}

