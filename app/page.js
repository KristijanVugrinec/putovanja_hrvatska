import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import VideoAbout from './videoabout'
import Counter from "./counter";
import Card from "./cards";
import Festivals from "./festivals";

export default function Home() {
  return (
    <div>
      <VideoAbout />
      <Counter />
      <Card />
      <Festivals />
    </div>
  );
}
