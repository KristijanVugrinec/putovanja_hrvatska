import Link from "next/link";
import CountDown from "./countDown";
import style from './barokne_veceri.module.css'


export default function BarokneVeceri () {
    return (
        <main className={style.main}>
            <div className={style.mainTitle}>
            <h2>BAROKNE VECERI</h2>
            </div>
            <div className={style.imageWrapper}>
            <img src="/images/festivals/barokne_veceri.jpg" />
            </div>
            <div className={style.countWrapper}>
            <Link href="https://www.renesansnifestival.hr/" target="_blank">Saznajte više</Link>
            <CountDown targetDate="2025-09-19T00:00:00" />
            </div>
        </main>
    )
}