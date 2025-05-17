"use client"
import { useState,useEffect } from "react";


export default function CountDown ({targetDate}) {
    const [timeLeft,setTimeLeft] = useState("")

    useEffect(() => {

        const countDownDate = new Date(targetDate).getTime()

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now

            if(distance <= 0){
                clearInterval(interval);
                setTimeLeft("Festival je započeo");
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds =Math.floor((distance % (1000 * 60)) / 1000);
            
            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        },1000)
            return () => clearInterval(interval)
    },[targetDate])
    return (
        <p style={{color:"black",fontSize:"3rem",fontFamily:"var(-font-geist-mono)"}}>{timeLeft}</p>
    )
}