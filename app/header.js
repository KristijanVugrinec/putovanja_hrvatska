"use client"
import style from './header.module.css'
import Link from "next/link"
import { useState } from "react"


export default function Header() {

    const [isOpen,setIsOpen] = useState(false)
    const [isOpenCountry,setIsOpenCountry] = useState(false)



    return (
        <header className={style.header}>
            <div className={style.main}>
                <div className={style.logo}>
                <Link href="/" >
                    <img src="/images/cro-flag.svg" alt='CRO-flag'/>
                </Link>
                </div>
            <nav className={style.navigation}>
                <Link href="/">
                    Početna
                </Link>
                <div className={style.listButton}>
                  <button onClick={() => setIsOpen(!isOpen)}>Gradovi</button>
                  {isOpen && (
                    <ul className={`${style.list} ${isOpen ? style.open : ''}`}>
                        <li><Link href="/dubrovnik">Dubrovnik</Link></li>
                        <li><Link href="/split">Split</Link></li>
                        <li><Link href="/rovinj">Rovinj</Link></li>
                        <li><Link href="/poreč">Poreč</Link></li>
                        <li><Link href="/zadar">Zadar</Link></li>
                        <li><Link href="/umag">Umag</Link></li>
                        <li><Link href="/opatija">Opatija</Link></li>
                        <li><Link href="/pula">Pula</Link></li>
                        <li><Link href="/medulin">Medulin</Link></li>
                        <li><Link href="/varaždin">Varaždin</Link></li>
                        <li><Link href="/zagreb">Zagreb</Link></li>

                    </ul>
                        )}
                </div>
                <Link href="/planiraj">
                    Planiraj putovanje
                </Link>
                <Link href="/aktivnosti">
                    Aktivnosti
                </Link>
            </nav>
            <div className={style.language}>
                <button onClick={() => setIsOpenCountry(!isOpenCountry)}><img className={style.languageSVG} src='/images/cro-flag.svg' alt='CRO-flag'/>CRO</button>
                {isOpenCountry && (
                    <button><img src='/images/eng-flag.svg' alt='ENG-flag' className={style.languageSVG}/>ENG</button>
                )}
            </div>
            </div>
        </header>
    )

}