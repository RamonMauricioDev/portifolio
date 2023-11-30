import styles from './page.css'
import { Header, LandingPage, Arsenal, Contact, Projects } from './components'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <LandingPage></LandingPage>
      <Arsenal></Arsenal>
      <Contact></Contact>
      <Projects></Projects>
    </main>
  )
}