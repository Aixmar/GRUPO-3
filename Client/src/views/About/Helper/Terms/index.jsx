import styles from "./index.module.css";

const Terms = () => {
  return (
    <div>
      <div className={styles.posdata}>
        <div className={styles.t1}>Try the best pizzas created to your style with Mix2Pizza</div>
        <div className={styles.t2}>We have a wide variety of ingredients to taste.</div>
        <div className={styles.t3}>Made with love love for you.</div>
      </div>
      <div className={styles.terms}>
        <div className={styles.termsOfService}>Terms of Service</div>
        <div className={styles.privacy}>Privacy</div>
      </div>
    </div>
  );
};

export default Terms;
