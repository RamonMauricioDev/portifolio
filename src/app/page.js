import styles from './page.css'
import { LandingPage, Arsenal, Contact, Projects } from './components'

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage></LandingPage>
      <Arsenal></Arsenal>
      <Contact></Contact>
      <Projects></Projects>
    </main>
  )
}