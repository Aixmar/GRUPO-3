import { useNavigate } from 'react-router-dom';
import css from './Slider.module.css';
import pizza1 from '../../assets/slidePizza1.jpeg';
import pizza2 from '../../assets/slidePizza2.jpg';
import pizza3 from '../../assets/slidePizza3.jpg';
import pizza4 from '../../assets/slidePizza4.jpg';


const Slider = () => {

    const navigate = useNavigate();
    
    setTimeout(() => {
        const slides = document.querySelectorAll('.pizza');
        slides.forEach((slide) => slide.classList.add(css.pizza));
    }, 1200);

    const redirectToDetail = (event) => {
        const { id } = event.target;
        navigate(`/pizzadetail/${id}`)
    };



    return (
        <>
            <div className={css.contSlider} >
                <div className={css.contSlides} >

                <div className={css.contPizza} >
                        <img src={pizza1} alt='pizza' className={`pizza`} onClick={redirectToDetail} id={3}  />
                        <div className={`${css.infoPizza1} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Meat lovers</h3>
                            <p>Mozzarella Cheese - Pepperoni - Bacon - York Ham</p>
                            <h2 className={css.pizzaName} >$14.99</h2>
                        </div>
                        <div className={`${css.contBtn1} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                </div>

                <div className={css.contPizza} >
                        <img src={pizza2} alt='pizza' className={`pizza`} onClick={redirectToDetail} id={31} />
                        <div className={`${css.infoPizza2} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Supreme</h3>
                            <p>Pepperoni - Black Olives - Onions - Sausage - Bell peppers</p>
                            <h2 className={css.pizzaName} >$14.99</h2>
                        </div>
                        <div className={`${css.contBtn2} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                </div>

                <div className={css.contPizza} >
                        <img src={pizza3} alt='pizza' className={`pizza`} onClick={redirectToDetail} id={4}  />
                        <div className={`${css.infoPizza3} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Hawaiian</h3>
                            <p>Mozzarella Cheese - Pineapple - Cooked Ham</p>
                            <h2 className={css.pizzaName} >$12.99</h2>
                        </div>
                        <div className={`${css.contBtn3} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                </div>

                <div className={css.contPizza} >
                        <img src={pizza4} alt='pizza' className={`pizza`} onClick={redirectToDetail} id={2}  />
                        <div className={`${css.infoPizza4} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Pepperoni</h3>
                            <p>Mozzarella Cheese - Pepperoni</p>
                            <h2 className={css.pizzaName} >$12.99</h2>
                        </div>
                        <div className={`${css.contBtn4} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                </div>

                </div>

              
            </div>
        </>
    );
};



export default Slider;