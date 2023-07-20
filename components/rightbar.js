import styles from "../styles/components/rightbar.module.css";

export default function rightbar() {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>Recommended Tags</h6>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">Summer</button>
        <button className="btn btn-xs btn-outline btn-secondary">Futurama</button>
      </div>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">He's not real</button>
        <button className="btn btn-xs btn-outline btn-secondary">Oppenheimer</button>
      </div>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">Barbie</button>
        <button className="btn btn-xs btn-outline btn-secondary">Dark</button>
        <button className="btn btn-xs btn-outline btn-secondary">Dark Humor</button>
      </div>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">Dank</button>
        <button className="btn btn-xs btn-outline btn-secondary">Spongebob</button>
        <button className="btn btn-xs btn-outline btn-secondary">Anime</button>
      </div>

      <h6 className={styles.title2}>Trending Tags</h6>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">Dark Humor</button>
        <button className="btn btn-xs btn-outline btn-secondary">GIGACHAD</button>
      </div>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">Dog</button>
        <button className="btn btn-xs btn-outline btn-secondary">Minecraft</button>
        <button className="btn btn-xs btn-outline btn-secondary">Dark</button>
      </div>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">Wholesome</button>
        <button className="btn btn-xs btn-outline btn-secondary">Lol</button>
      </div>
      <div className={styles.layerCont}>
        <button className="btn btn-xs btn-outline btn-secondary">Oppengeimer</button>
        <button className="btn btn-xs btn-outline btn-secondary">Waiting</button>
      </div>
    </div>
  );
}
