import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import VideoAbout from './videoabout'
import Counter from "./counter";

export default function Home() {
  return (
    <div>
      <VideoAbout />
      <Counter />
    </div>
  );
}
