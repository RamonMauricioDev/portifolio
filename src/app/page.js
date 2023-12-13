'use client'

import styles from './page.css'
import { Header, LandingPage, Arsenal, Contact, Projects } from './components'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <div className='webpage'>
        <LandingPage id="home"></LandingPage>
        <div className='webpage-div'>
          <Arsenal></Arsenal>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
    </main>
  )
}