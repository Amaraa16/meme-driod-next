import { useEffect } from "react";
import styles from "../styles/components/leftbar.module.css";

export default function leftbar() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.catagoryCont}>
        <button className="btn btn-sm btn-outline btn-secondary">Latest Memes</button>
        <button className="btn btn-sm btn-outline btn-secondary">Top Memes</button>
        <button className="btn btn-sm btn-outline btn-secondary">Random Memes</button>
        <button className="btn btn-sm btn-outline btn-secondary">My Subscription</button>
        <button className="btn btn-sm btn-outline btn-secondary">Favorites</button>
        <button className="btn btn-sm btn-outline btn-secondary">Moderate</button>
        <button className="btn btn-sm btn-outline btn-secondary">My Uploads</button>
        <button className="btn btn-sm btn-outline btn-secondary">Chat</button>
        <button className="btn btn-sm btn-outline btn-secondary">Ranking</button>
        <button className="btn btn-sm btn-outline btn-secondary">Blog</button>
      </div>
      <div className={styles.line}></div>
      <button className="btn btn-sm btn-outline btn-warning">English</button>
      <div className={styles.line}></div>
    </div>
  );
}
