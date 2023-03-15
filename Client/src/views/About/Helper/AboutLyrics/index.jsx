import styles from './index.module.css'

const AboutLyrics = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLyrics}>
        <div className={styles.titleAbout}>About Mix2Pizza</div>
        <div className={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias
          optio neque eligendi, id laborum accusamus fugiat vel sequi aspernatur
          voluptatem maiores? Quaerat fugiat placeat molestiae illum nulla
          eligendi fuga!
        </div>
        <div className={styles.subTitleAbout}>Proposito</div>
        <div className={styles.descriptionAbout}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, unde
          velit. Ex accusantium libero voluptas ullam cumque debitis quaerat
          nesciunt inventore! Temporibus, dolore labore? Autem dolorem eaque
          cupiditate sed beatae?
        </div>
        <div className={styles.subTitleAbout}>Caracteristicas Principales</div>
        <div className={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab maiores
          debitis, amet quo vitae obcaecati aspernatur consectetur libero
          necessitatibus, enim repudiandae tempora ex illo delectus saepe culpa
          ipsam officiis cumque?
        </div>
        <div className={styles.subTitleAbout}>Resumen de Desarrollo</div>
        <div className={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          perspiciatis necessitatibus optio numquam amet eius in magni, earum
          rem. Minus laboriosam similique non numquam reiciendis error magni
          soluta a accusantium?
        </div>
      </div>
      <div className={styles.detailsAbout}>
        <div className={styles.subTitleAbout}>DETAILS</div>
        <div>Mix2Pizza Web v.0.1.0</div>
        <div>Mix2Pizza Facebook</div>
        <div>Mix2Pizza Instagram</div>
        <div>
          If you have questions or suggestions, feel free to reach us through:
        </div>
        <div>support@mix2pizza.app</div>
      </div>
    </div>
  );
};

export default AboutLyrics;
