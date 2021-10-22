import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'
import Link from 'next/link'

export default function Guides() {

  
    

    

  
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
      </div>
    )
  

  
      }