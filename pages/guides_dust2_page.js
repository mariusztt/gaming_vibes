import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'
import Link from 'next/link'

export default function Guides() {

  const { user, authReady } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if(authReady) {

    
    fetch('/.netlify/functions/guides_dust2', user && {
      headers: {
        Authorization: 'Bearer ' + user.token.access_token
      }
    })
    .then(res => {
      if(!res.ok) {
        throw Error("You must be logged in to view that content")
      }
      return res.json()
    })
    .then(data => {
      setGuides(data)
      setError(null)
    })
    .catch((err) => {
      setError(err.message)
      setGuides(null)
    })
  }
  },[user, authReady])

  
    return (
      <div className="container">

<div className={styles.menu}>
        <div className={styles.mapa}>
          <a className={styles.menu_a}><Link href="/guides_mirage_page">Mirage</Link></a>
          <ul>
            <li><a href="#">smoke</a></li>
            <li><a href="#">flash</a></li>
            <li><a href="#">molotov</a></li>
            <li><a href="#">nade</a></li>
          </ul>  
          
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_inferno_page">Inferno</Link></a>
          <ul>
            <li><a href="#">smoke</a></li>
            <li><a href="#">flash</a></li>
            <li><a href="#">molotov</a></li>
            <li><a href="#">nade</a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_dust2_page">Dust II</Link></a>
          <ul>
            <li><a href="#">smoke</a></li>
            <li><a href="#">flash</a></li>
            <li><a href="#">molotov</a></li>
            <li><a href="#">nade</a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_overpass_page">Overpass</Link></a>
          <ul>
            <li><a href="#">smoke</a></li>
            <li><a href="#">flash</a></li>
            <li><a href="#">molotov</a></li>
            <li><a href="#">nade</a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_nuke_page">Nuke</Link></a>
          <ul>
            <li><a href="#">smoke</a></li>
            <li><a href="#">flash</a></li>
            <li><a href="#">molotov</a></li>
            <li><a href="#">nade</a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_train_page">Train</Link></a>
          <ul>
            <li><a href="#">smoke</a></li>
            <li><a href="#">flash</a></li>
            <li><a href="#">molotov</a></li>
            <li><a href="#">nade</a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_vertigo_page">Vertigo</Link></a>
          <ul>
            <li><a href="#">smoke</a></li>
            <li><a href="#">flash</a></li>
            <li><a href="#">molotov</a></li>
            <li><a href="#">nade</a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_ancient_page">Ancient</Link></a>
          <ul>
            <li><a href="#" >smoke</a></li>
            <li><a href="#" >flash</a></li>
            <li><a href="#" >molotov</a></li>
            <li><a href="#" >nade</a></li>
          </ul> 
        </div>
      </div>




      <div className={styles.guides}>
        
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}> { error }</div>
      )}

      {guides && guides.map(guide => (
        <div key={guide.map} className={styles.card}>
          <h3>{guide.map}</h3>
          <h4>{guide.granade_type} {guide.place}</h4>
        </div>
        
      ))}

      </div> 
      </div>
    )
  

  
}