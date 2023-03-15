import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';



const Home = () => {
  return (
    <> 
      <div className={styles.contHome} >

        <div>Home</div>
        
        <div>
          <Footer />
        </div>
      </div>
    </>
    
  )
}

export default Home