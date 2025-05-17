"use client"

import style from './cards.module.css'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'


const cards = [
    {
      name: "Biokovo",
      description: "Planinski masiv iznad Makarske, poznat po Skywalku i spektakularnim pogledima na Jadran.",
      button: "Otkrij",
      image: "/images/cards/biokovo.webp"
    },
    {
      name: "Ston",
      description: "Povijesni gradić s najduljim obrambenim zidom u Europi, te poznat po kamenicama i solanama.",
      button: "Otkrij",
      image: "/images/cards/ston.jpg"
    },
    {
      name: "Kornati",
      description: "Arhipelag 89 otoka s netaknutom prirodom — idealno za jedrenje i ronjenje.",
      button: "Otkrij",
      image: "/images/cards/kornati.webp"
    },
    {
      name: "Sjeverni Velebit",
      description: "Divlji planinski park s legendarnom Premužićevom stazom i bogatim biljnim i životinjskim svijetom.",
      button: "Otkrij",
      image: "/images/cards/sjeverni_velebit.jpg"
    },
    {
      name: "Kopački rit",
      description: "Jedno od najvećih močvarnih područja Europe, raj za promatranje ptica i lagane biciklističke ture.",
      button: "Otkrij",
      image: "/images/cards/kopacki_rit.jpg"
    },
    {
      name: "Krka",
      description: "Nacionalni park s impresivnim slapovima, gdje se možete osvježiti kupanjem kod Skradinskog buka.",
      button: "Otkrij",
      image: "/images/cards/krka.jpg"
    },
    {
      name: "Brač",
      description: "Otok poznat po Zlatnom ratu u Bolu, tradicionalnoj kamenoj arhitekturi i vrhunskim maslinama.",
      button: "Otkrij",
      image: "/images/cards/brač.jpg"
    },
    {
      name: "Mljet",
      description: "Zeleni otok s dva slana jezera i benediktinskim samostanom na otočiću usred Velikog jezera.",
      button: "Otkrij",
      image: "/images/cards/mljet.jpg"
    }
  ];
  


export default function Card () {


    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})



  
    return (
        <section className={style.sectionMain} ref={ref}>
            <div className={style.mainText}>
                <h2>Lokacije</h2>
            </div>
            <div className={style.cardWrapper}>
                {cards.map((card,index) => {
                    return (
                        <motion.div key={card.name}  initial={{opacity:0,y:50}} animate={isInView ? {opacity:1,y:0} : {}} transition={{duration:0.5,delay:index * 0.2,ease:"easeIn"}}>
                        <div className={style.card}>
                            <div className={style.cardImage}>
                                <img src={card.image} />
                            </div>
                            <div className={style.cardText}>
                                <p className={style.cardName}>{card.name}</p>
                                <p className={style.cardDescription}>{card.description}</p>
                                <button className={style.cardButton}>{card.button}</button>
                            </div>
                        </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}