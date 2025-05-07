"use client"

import { useEffect, useRef, useState } from 'react'
import style from './counter.module.css'
import { useInView } from 'framer-motion'


export default function Counter() {

    const ref = useRef(null)    
    const isInView = useInView(ref,{once:true})
    const [counterMountain,setCounterMountain] = useState(0)
    const [counterIsland,setCounterIsland] = useState(0)
    const [counterParks,setCounterParks] = useState(0)



    useEffect(() => {
        if(isInView){
            controlCounter(1244,setCounterIsland)
            controlCounter(8,setCounterParks)
            controlCounter(115,setCounterMountain)
        }
    },[isInView])


    const controlCounter = (target,setter) => {
        let current = 0;


      
        const step = () => {
            current += 1;
            setter(current);
        
            if (current >= target) return;
            const remaining = target - current;
            const delay = remaining < 10 ? 150 : remaining < 30 ? 80 : 30;
        
            setTimeout(step, delay);
          };
        
          step();
    }


    return (
        <main className={style.mainWrapper}>
            <div className={style.quote}>
                <h1>Hrvatska – zemlja tisuću otoka i netaknute prirode</h1>
            </div>
            <div className={style.counterWrapper} ref={ref}>
                <div className={style.counterDiv}>
                    <img src='/images/mountain.svg'/>
                    <p className={style.counterP}>+{counterMountain}</p>
                    <p className={style.counterText}>Planina</p>

                </div>
                <div className={style.counterDiv}>
                    <img src='/images/island.svg' />
                    <p className={style.counterP}>+{counterIsland}</p>
                    <p className={style.counterText}>Otoka</p>
                </div>
                <div className={style.counterDiv}>
                    <img src='/images/national_park.svg' />
                    <p className={style.counterP}>{counterParks}</p>
                    <p className={style.counterText}>Nacionalnih parkova</p>
                </div>
            </div>
        </main>
    )
}