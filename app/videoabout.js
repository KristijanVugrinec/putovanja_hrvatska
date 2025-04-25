"use client";
import { useState } from "react";
import style from "./videoabout.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link"

const items = [
    {
      type: "video",
      src: "/videos/dubrovnik.mp4",
      text: "Medieval charm and stunning views.",
      buttonText: "Discover Dubrovnik",
      href: "/dubrovnik"
    },
    {
      type: "video",
      src: "/videos/pula.mp4",
      text: "Ancient Roman history in a modern city.",
      buttonText: "Explore Pula",
      href:"/pula"
    },
    {
      type: "image",
      src: "/images/beach.jpg",
      text: "Beautiful beaches and unique sunsets.",
      buttonText: "Visit Zadar",
      href:"/zadar"
    },
    {
      type: "image",
      src: "/images/split.jpg",
      text: "Roman ruins and Mediterranean vibes.",
      buttonText: "Explore Split",
      href:"/split"
    },
    {
      type: "image",
      src: "/images/varazdin.jpg",
      text: "Baroque beauty and rich culture.",
      buttonText: "Discover Varaždin",
      href:"/varazdin"
    },
    {
      type: "image",
      src: "/images/plitvicka_jezera.jpg",
      text: "Nature's wonder with stunning waterfalls.",
      buttonText: "Explore Plitvice",
      href:"/plitvickaJezera"
    },
  ];


export default function AboutVideos() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(false);
    
    const handleNext = () => {
        setIsLoaded(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
    
    const handlePrev = () => {
        setIsLoaded(false);
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
            );
        };
        useEffect(() => {
            setShowText(false)
        },[currentIndex])

  return (
    <main className={style.main}>
      <div className={style.videosAbout}>
        <motion.div
        key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className={style.mediaWrapper}
          onAnimationComplete={() => {
            if(isLoaded){
                setShowText(true)
                console.log("Video je loadani")
            }
          }}
        >
          {items[currentIndex].type === "video" ? (
            <video
              key={items[currentIndex].src}
              autoPlay
              muted
              loop
              onLoadedData={() => setIsLoaded(true)}
            >
              <source src={items[currentIndex].src} type="video/mp4" />
            </video>
          ) : (
            <img
              key={items[currentIndex].src}
              src={items[currentIndex].src}
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </motion.div>
      </div>
      <div className={style.textAbout}>
        <motion.div
        className={style.mediaWrapper}
        key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <p>{items[currentIndex].text || "no description"}</p>
          <Link href={items[currentIndex].href} className={style.linkButton}>
          {items[currentIndex].buttonText || "no text"}
          </Link>
        </motion.div>
      </div>
      <div className={style.buttons}>
        <button onClick={handlePrev} className={style.buttonsForHandling}>
          <FaArrowLeft />
        </button>
        <button onClick={handleNext} className={style.buttonsForHandling}>
          <FaArrowRight />
        </button>
      </div>
    </main>
  );
}
