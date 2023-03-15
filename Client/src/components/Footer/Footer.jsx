import styles from './Footer.module.css';
import fbIco from '../../assets/facebook.png';
import igIco from '../../assets/instagram.png';
import twIco from '../../assets/twitter.png';



const Footer = () => {

    return (
        <>
        //fddf
        <div className={styles.containerFooter} >
            <div className={styles.contContact} >
                <h2>Contact</h2>
                <p>support@mix2pizza.app</p>
                <div className={styles.contNetworks} >
                    <img src={fbIco} />
                    <img src={igIco} />
                    <img src={twIco} />
                </div>
            </div>

            <div className={styles.contAbout} >
                <h2>About us</h2>
                <h3>Our history</h3>
                <h3>Work with us</h3>
                <h3>franchise yourself</h3>
            </div>

            <div className={styles.contNutrition} >
                <h2>Nutrition and Quality</h2>
                <h3>Without gluten</h3>
                <h3>Nutritional values</h3>
                <h3>Quality food</h3>
                {/* <h3>allergen list</h3> */}
            </div>
                
            <div className={styles.contCopyright} >
                <p>© 2023 Mix2Pizza Todos los derechos reservados.</p>
            </div>
        </div>
        </>
    )
};


export default Footer;