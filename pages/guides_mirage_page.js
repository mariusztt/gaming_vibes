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

    
    fetch('/.netlify/functions/guides_mirage', user && {
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
            <li><a><Link href="/grenade_pages/m_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/m_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/m_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/m_nade">nade</Link></a></li>
          </ul>  
          
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_inferno_page">Inferno</Link></a>
          <ul>
            <li><a><Link href="/grenade_pages/i_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/i_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/i_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/i_nade">nade</Link></a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_dust2_page">Dust II</Link></a>
          <ul>
            <li><a><Link href="/grenade_pages/d_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/d_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/d_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/d_nade">nade</Link></a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_overpass_page">Overpass</Link></a>
          <ul>
            <li><a><Link href="/grenade_pages/o_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/o_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/o_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/o_nade">nade</Link></a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_nuke_page">Nuke</Link></a>
          <ul>
            <li><a><Link href="/grenade_pages/n_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/n_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/n_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/n_nade">nade</Link></a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_train_page">Train</Link></a>
          <ul>
            <li><a><Link href="/grenade_pages/t_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/t_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/t_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/t_nade">nade</Link></a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_vertigo_page">Vertigo</Link></a>
          <ul>
            <li><a><Link href="/grenade_pages/v_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/v_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/v_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/v_nade">nade</Link></a></li>
          </ul> 
        </div>
        <div className={styles.mapa}>
        <a className={styles.menu_a}><Link href="/guides_ancient_page">Ancient</Link></a>
          <ul>
            <li><a><Link href="/grenade_pages/a_smoke">smoke</Link></a></li>
            <li><a><Link href="/grenade_pages/a_flash">flash</Link></a></li>
            <li><a><Link href="/grenade_pages/a_molotov">molotov</Link></a></li>
            <li><a><Link href="/grenade_pages/a_nade">nade</Link></a></li>
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