import styles from "../styles/pages/Home.module.css";
import Navbar from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import Rightbar from "@/components/rightbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Leftbar />
      <Rightbar />
      <div className={styles.content}></div>
    </div>
  );
}
