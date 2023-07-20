import styles from "../styles/pages/Home.module.css";
import Navbar from "@/components/navbar";
import Leftbar from "@/components/leftbar";
import Rightbar from "@/components/rightbar";
import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Leftbar />
      <Rightbar />
      <div className={styles.content}>
        <SignUp />
      </div>
    </div>
  );
}
