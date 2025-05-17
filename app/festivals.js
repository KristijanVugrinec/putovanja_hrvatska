"use client"

import style from './festivals.module.css'
import { use, useEffect,useState } from 'react'
import Spancirfest from './spancirfest'
import RenesansniFestival from './renesansni_festival'
import {motion} from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import BarokneVeceri from './barokne_veceri'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const festivals = [ 
    {
        component : <Spancirfest />
    },
    {
        component: <RenesansniFestival />
    },
    {
        component: <BarokneVeceri/>
    },
    {
        component: <RenesansniFestival />
    }
]

export default function Festivals(){
     
    const [currentIndex,setCurrentIndex] = useState(0)
    const extendedFestivals = [...festivals,...festivals]

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % festivals.length);
      };
      
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + festivals.length) % festivals.length);
      };

    //   useEffect(() => {
    //     if(currentIndex >= festivals.length){
    //         setCurrentIndex(0)
    //     }
    //   })


    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})

    return (
        <main className={style.main} ref={ref}>
            <div className={style.mainWrapper}>
                <h2>Festivals</h2>
                <p>Upcoming Festivals</p>           
                <div className={style.festivalWrapper} style={{transform:`translateX(-${currentIndex * 50}%)`}}>
                    {extendedFestivals.map((item,index) => {
                        return (
                            <div key={index} style={{width:"100%"}}>
                                {item.component}
                            </div>
                        )
                    })}
                </div>
                <div className={style.buttons}>
                <button onClick={handlePrev} className={style.buttonsForHandling}><FaArrowLeft /></button>
                <button onClick={handleNext} className={style.buttonsForHandling}><FaArrowRight /></button>
                </div>
            </div>
        </main>
    )
    

}