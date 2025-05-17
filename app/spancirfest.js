import Link from "next/link";
import CountDown from "./countDown";
import style from "./spancirfest.module.css";
import { useEffect, useState } from "react";
import { motion , useInView } from "framer-motion";
import { useRef } from "react";


const images = [
    {
        image: "/images/festivals/spancirfest/spancirfest1.webp"
    },
    {
        image: "/images/festivals/spancirfest/spancirfest2.jpg"
    },
    {
        image: "/images/festivals/spancirfest/spancirfest3.webp"
    },
]


export default function Spancirfest() {

    const [currentIndex,setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        },10000 / images.length)

      return () =>  clearInterval(interval)

    },[])


    const ref = useRef(null)

  return (
    <main className={style.main}>
      <div className={style.mainTitle}>
        <h2>ŠPANCIRFEST</h2>
      </div>
        <div className={style.imageWrapper}>
            <motion.div key={currentIndex} initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:0.2}} style={{height:"100%"}}>
                <img src={images[currentIndex].image}/>
            </motion.div>
        </div>
      <div className={style.countWrapper}>
        <Link href="https://www.spancirfest.com/" target="_blank">
          Saznajte više
        </Link>
        <CountDown targetDate="2025-08-22T00:00:00" className={style.countdown}/>
      </div>
    </main>
  );
}
