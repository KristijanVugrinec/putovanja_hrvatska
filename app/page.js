import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import VideoAbout from './videoabout'

export default function Home() {
  return (
    <div>
      <VideoAbout />
    </div>
  );
}
