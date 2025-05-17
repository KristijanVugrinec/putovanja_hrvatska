import Link from "next/link";
import CountDown from "./countDown";
import style from './renesansni_festival.module.css'


export default function RenesansniFestival () {
    return (
        <main className={style.main}>
            <div className={style.mainTitle}>
            <h2>RENESANSNI FESTIVAL</h2>
            </div>
            <div className={style.imageWrapper}>
            <img src="/images/festivals/renesansni_festival.jpeg" />
            </div>
            <div className={style.countWrapper}>
            <Link href="https://www.renesansnifestival.hr/" target="_blank">Saznajte više</Link>
            <CountDown targetDate="2025-08-21T00:00:00" />
            </div>
        </main>
    )
}